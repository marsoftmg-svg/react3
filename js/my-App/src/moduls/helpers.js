// Debounce — opóźnia wywołanie funkcji
export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// GroupBy — grupuje tablicę obiektów po kluczu
export const groupBy = (array, key) =>
  array.reduce((result, item) => {
    const group = item[key] ?? 'inne';
    return {
      ...result,
      [group]: [...(result[group] ?? []), item],
    };
  }, {});

// Capitalize — pierwsza litera wielka
export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// Sleep — async delay (użyteczne w testach)
export const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Pipe — kompozycja funkcji (lewo → prawo)
export const pipe = (...fns) =>
  (value) => fns.reduce((acc, fn) => fn(acc), value);