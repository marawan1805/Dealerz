export interface Product {
  id: number;
  title: string;
  image: string;
  rating: {
    rate: string;
    count: number;
  }; 
  price: number;
  seller: string;
  category: string;
  description: string;
  images: string[];
}
