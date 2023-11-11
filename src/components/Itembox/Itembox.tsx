import React from 'react';
import './styles/itembox.styles.css';
import images from 'src/assets/images';
type Props = {
  type: string;
  image: string;
  name: string;
  price: number;
  formatCurrency: (value: number) => string;
};

const Itembox = ({ type, image, name, price, formatCurrency }: Props) => {
  return (
    <div className={`itembox ${type}`}>
      <div className='item-img'>
        <img className='item-img-banner' src={image} />
      </div>
      <div className='item-text'>
        <div className='item-text-divider' />
        <div className='item-text-name'>{name}</div>
        <div className='item-text-price'>{formatCurrency(price)}</div>
      </div>
    </div>
  );
};

export default Itembox;
