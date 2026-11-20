export interface Listing {
  id: string;
  title: string;
  description?: string;
  price: number;
  currency?: string;
  location?: string;
  condition?: string;
  imageUrl?: string;
  createdAt?: string;
}

export interface ApiList<T> {
  items: T[];
  total?: number;
}
