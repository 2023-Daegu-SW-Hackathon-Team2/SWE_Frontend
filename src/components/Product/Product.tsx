import React from 'react';
import images from 'src/assets/images';
import { HomeItem } from '@typedef/types';
import ItemboxContainer from '@components/Itembox/containers/ItemboxContainer';
import './styles/product.styles.css';
type Props = {
  itemList: HomeItem[];
  productType: string;
};

const Product = ({ itemList, productType }: Props) => {
  return (
    <div className='product'>
      <div className='product-header'>{productType}</div>
      <div className='product-body'>
        {itemList.map((item, index) => (
          <ItemboxContainer
            key={index}
            id={item.id}
            type={item.type}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
