const API_URL = 'https://jsonplaceholder.typicode.com';

// Fetch z obsługą błędów HTTP
const request = async (endpoint) => {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
};

// Pobierz listę użytkowników
export const fetchUsers = async () => {
  const users = await request('/users');
  return users;
};

// Pobierz posty danego użytkownika
export const fetchUserPosts = async (userId) => {
  const posts = await request(`/posts?userId=${userId}`);
  return posts;
};

// Mapuj surowe dane API → czysty model
export const formatUser = (user) => ({
  id:       user.id,
  name:     user.name,
  email:    user.email.toLowerCase(),
  city:     user.address?.city ?? 'Nieznane',
  company:  user.company?.name ?? null,
  website:  user.website ? `https://${user.website}` : null,
});