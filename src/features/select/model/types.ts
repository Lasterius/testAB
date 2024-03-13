export type Response = {
  data: Array<{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    job?: string;
  }>;
  meta: {
    from: number; // порядковый номер первого возвращаемого элемента
    to: number; // порядковый номер последнего возвращаемого элемента
    total: number; // общее количество данных
  };
};

export type Props = {
  options: Response['data'];
  title: string;
};
