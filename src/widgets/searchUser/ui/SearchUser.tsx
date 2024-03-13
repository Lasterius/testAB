import { useEffect, useState } from 'react';
import { Select } from '../../../features/select';
import { fetchUsers } from '../api/fetchUsers';
import css from './SearchUser.module.css';

export const SearchUser = () => {
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetchUsers();
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
      }
    }

    getUsers();
  }, []);

  return (
    <div className={css.search}>
      <Select options={users} title={'Users'} />
    </div>
  );
};
