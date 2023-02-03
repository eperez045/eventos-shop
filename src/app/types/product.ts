export interface Product {
    id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  startDate: string;
  endDate: string;
  place: string;
}

export interface CartProduct extends Product {
    qty: number;
  }
