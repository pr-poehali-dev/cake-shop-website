export interface Cake {
  id: number;
  name: string;
  description: string;
  pricePerKg: number;
  image: string;
}

export interface OrderForm {
  cake: Cake | null;
  weight: number;
  name: string;
  phone: string;
  comment: string;
}

export interface PortfolioImage {
  id: number;
  url: string;
  alt: string;
}
