export type Paginated<I> = {
  skip: number;
  limit: number;
  total: number;
  products: I[]; // api naming - should be more generic
};
