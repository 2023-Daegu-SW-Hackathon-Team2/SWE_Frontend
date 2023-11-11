import React from 'react';
import Itembox from '../Itembox';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
type Props = {
  id: number;
  type: string;
  image: string;
  name: string;
  price: number;
};

const ItemboxContainer = ({ id, type, image, name, price }: Props) => {
  const navigate = useNavigate();
  const formatCurrency = (value: number) => {
    return Number(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'KRW', // 원화 (₩)
    });
  };
  const onItemClick = useCallback(() => {
    navigate(`/productinfo/${id}`);
  }, []);

  return (
    <Itembox
      id={id}
      type={type}
      image={image}
      name={name}
      price={price}
      formatCurrency={formatCurrency}
      onItemClick={onItemClick}
    />
  );
};

export default ItemboxContainer;
