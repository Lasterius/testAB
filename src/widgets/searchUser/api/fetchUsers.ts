export async function fetchUsers(page: number, limit: number) {
  try {
    const response = await fetch(
      `https://alanbase.vercel.app/api/users?page=${page}&limit=${limit}`
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
