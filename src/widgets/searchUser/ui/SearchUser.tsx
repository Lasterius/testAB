import { useEffect, useState } from 'react';
import { Select } from '../../../features/select';
import { fetchUsers } from '../api/fetchUsers';
import { Response } from '../model/types';
import css from './SearchUser.module.css';

export const SearchUser = () => {
  const [users, setUsers] = useState<Response['data']>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  const handleDropdownOpen = (height: number) => {
    setDropdownHeight(height);
  };

  const loadMoreUsers = async () => {
    if (loading || currentPage > 100) {
      return;
    }
    if (users.length < totalUsers) {
      setLoading(true);
      try {
        const response = await fetchUsers(currentPage, 50);
        setUsers(prevUsers => [...prevUsers, ...response.data]);
        setCurrentPage(prevPage => prevPage + 1);
      } catch (error) {
        console.error(
          'Ошибка при загрузке дополнительных пользователей:',
          error
        );
      } finally {
        setLoading(false);
      }
    }
  };

  const handleScroll = (scrolled: number) => {
    if (scrollLocked) return;
    const threshold = dropdownHeight - 800;
    if (!loading && scrolled >= threshold) {
      setScrollLocked(true);
      loadMoreUsers();
    }

    setTimeout(() => {
      setScrollLocked(false);
    }, 1000);
  };

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetchUsers(1, 50);
        setUsers(response.data);
        setTotalUsers(response.meta.total);
      } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
      }
    }

    getUsers();
  }, []);

  return (
    <div className={css.search}>
      <Select
        options={users}
        title={'Users'}
        onDropdownOpen={handleDropdownOpen}
        onScroll={handleScroll}
      />
    </div>
  );
};
