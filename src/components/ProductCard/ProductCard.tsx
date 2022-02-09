import React from 'react';
import './ProductCard.scss';

type Props = {
  product: Product,
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    productUrl,
    image,
    rating,
    reviewCount,
    price,
    sale,
  } = product;

  return (
    <div
      className="card page__card"
    >
      <div className="card__sale">{`-${sale}`}</div>
      <img
        src={image.url}
        className="card__image"
        alt={image.alt}
      />
      <a href={productUrl} className="card__title">{name}</a>

      <div className="card__rating">
        <div className={`stars stars--${rating}`}>
          <div className="stars__star"></div>
          <div className="stars__star"></div>
          <div className="stars__star"></div>
          <div className="stars__star"></div>
          <div className="stars__star"></div>
        </div>
        <div className="card__item">{`${reviewCount} Reviews`}</div>
      </div>

      <div className="card__price">
        <span className="card__value-current">{price.current}</span>
        <span className="card__value-sale">{price.withSale}</span>
      </div>
    </div>
  );
};
