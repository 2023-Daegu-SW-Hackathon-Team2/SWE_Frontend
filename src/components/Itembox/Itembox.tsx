import React from 'react';
import './styles/itembox.styles.css';
import images from 'src/assets/images';
import { VoidFunc } from '@typedef/types';
type Props = {
  id: number;
  type: string;
  image: string;
  name: string;
  price: number;
  formatCurrency: (value: number) => string;
  onItemClick: VoidFunc;
};

const Itembox = ({
  id,
  type,
  image,
  name,
  price,
  formatCurrency,
  onItemClick,
}: Props) => {
  return (
    <div className={`itembox ${type}`} onClick={onItemClick}>
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
