/// <reference types="react-scripts" />
type Product = {
  name: string,
  productUrl: string,
  image: {
    url: string,
    alt: string,
  },
  rating: number,
  reviewCount: number,
  sale: string,
  price: {
    current: string,
    withSale: string,
  },
};
