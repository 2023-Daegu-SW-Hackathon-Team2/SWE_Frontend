import React from 'react';
import Itembox from '../Itembox';
type Props = {
  type: string;
  image: string;
  name: string;
  price: number;
};

const ItemboxContainer = ({ type, image, name, price }: Props) => {
  const formatCurrency = (value: number) => {
    return Number(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'KRW', // 원화 (₩)
    });
  };
  return (
    <Itembox
      type={type}
      image={image}
      name={name}
      price={price}
      formatCurrency={formatCurrency}
    />
  );
};

export default ItemboxContainer;
