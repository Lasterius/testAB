export async function fetchUsers() {
  try {
    const response = await fetch(
      'https://alanbase.vercel.app/api/users?page=1&limit=50'
    );
    if (!response.ok) {
      throw new Error('Ошибка сети');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    return null;
  }
}
