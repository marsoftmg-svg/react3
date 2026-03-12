// ES6 modules — import/export
import { fetchUsers, formatUser } from './utils/api.js';
import { debounce, groupBy } from './moduls/helpers.js';

// Async/await entry point
const init = async () => {
  try {
    const users = await fetchUsers();
    const formatted = users.map(formatUser);

    // Template literals
    console.log(`Załadowano ${formatted.length} użytkowników`);

    // Destructuring + optional chaining + nullish coalescing
    const firstName = users[0]?.name ?? 'Brak nazwy';
    console.log(`Pierwszy użytkownik: ${firstName}`);

    // groupBy z helpers
    const byCity = groupBy(formatted, 'city');
    console.log('Grupowanie po mieście:', byCity);

    // Debounced search (symulacja)
    const search = debounce((query) => {
      console.log(`Szukam: ${query}`);
    }, 300);

    search('test');

    return { users: formatted, byCity };

  } catch (err) {
    console.error('Błąd inicjalizacji:', err.message);
  }
};

init();