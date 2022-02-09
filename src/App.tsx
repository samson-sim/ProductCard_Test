import React from 'react';
import './App.scss';
import { ProductCard } from './components/ProductCard/ProductCard';

const products: Product[] = [{
  name: 'Forte PRO 4 Head Replacement Blade for Pitbull, Palm, and Butterfly Kiss Shavers',
  productUrl: '',
  image: {
    url: 'https://cdn.shopify.com/s/files/1/0255/0156/4962/products/Forte_4x_1.progressive_1_720x.jpg?v=1644400297',
    alt: 'Skull Shaver PRO: Faster. Smoother. Stronger. Shave Faster Skull Shaver PRO blades let you shave faster than our previous designs. Multi directional rotary shaving heads let you shave in...',
  },
  rating: 4,
  reviewCount: 23,
  price: {
    current: '18.99$',
    withSale: '16.99$',
  },
  sale: '6%',
},
{
  name: 'Baron 5 Head Replacement Blade for Pitbull, Palm, and Butterfly Kiss Shavers',
  productUrl: '',
  image: {
    url: 'https://cdn.shopify.com/s/files/1/0255/0156/4962/products/art2439-1_720x.jpg?v=1567489807',
    alt: 'Skull Shaver PRO: Faster. Smoother. Stronger. Shave Faster Skull Shaver PRO blades let you shave faster than our previous designs. Multi directional rotary shaving heads let you shave in...',
  },
  rating: 3,
  reviewCount: 123,
  price: {
    current: '22.99$',
    withSale: '20.99$',
  },
  sale: '10%',
},
{
  name: 'Forte PRO 3 Head Replacement Blade for Pitbull, Palm, and Butterfly Kiss Shavers',
  productUrl: '',
  image: {
    url: 'https://cdn.shopify.com/s/files/1/0255/0156/4962/products/1Forte_720x.png?v=1575479459',
    alt: 'Skull Shaver PRO: Faster. Smoother. Stronger. Shave Faster Skull Shaver PRO blades let you shave faster than our previous designs. Multi directional rotary shaving heads let you shave in...',
  },
  rating: 5,
  reviewCount: 423,
  price: {
    current: '22.99$',
    withSale: '15.99$',
  },
  sale: '25%',
}];

export const App: React.FC = () => {
  return (
    <div className="page">
      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};
