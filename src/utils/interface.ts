export interface Product {
  id: number;
  title: string;
  imageSrc: string;
  specification: string[];
  price: string;
  stockCount: number;
}

export interface Filter {
  price: {
    min: number;
    max: number;
  };
  others?: string;
}
