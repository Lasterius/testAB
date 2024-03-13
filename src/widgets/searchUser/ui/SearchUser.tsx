import { Select } from '../../../features/select';
import css from './SearchUser.module.css';

const users = [
  {
    id: 1,
    first_name: 'Jack',
    last_name: 'Ivanov',
    email: 'jack@m.ru',
    job: 'it',
  },
  {
    id: 2,
    first_name: 'Petr',
    last_name: 'Petrov',
    email: 'petr@m.ru',
    job: 'smm',
  },
  {
    id: 3,
    first_name: 'Igor',
    last_name: 'Sidorov',
    email: 'igor@m.ru',
    job: 'qa',
  },
];

export const SearchUser = () => {
  return (
    <div className={css.search}>
      <Select options={users} title={'Users'} />
    </div>
  );
};
