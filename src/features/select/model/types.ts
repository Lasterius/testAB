export type Response = {
  data: Array<{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    job?: string;
  }>;
  meta: {
    from: number;
    to: number;
    total: number;
  };
};

export type Props = {
  options: Response['data'];
  title: string;
  onDropdownOpen: (h: number) => void;
  onScroll: (h: number) => void;
};
