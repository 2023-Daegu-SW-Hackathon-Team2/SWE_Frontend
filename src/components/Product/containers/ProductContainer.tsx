import React from 'react';
import Product from '../Product';
import { HomeItem } from '@typedef/types';
import images from 'src/assets/images';
import { useParams } from 'react-router-dom';
type Props = {};

const ProductContainer = (props: Props) => {
  const params = useParams().id;
  console.log(params);
  const itemList: HomeItem[] = [];
  const productType = `상품 카테고리 ${params}`;
  for (let i = 0; i < 20; i++) {
    const tempItem: HomeItem = {
      type: 'small',
      image: images.logo_orca_b,
      name: `린넨 오버핏 골지 옷종류${params} ${i + 1}`,
      price: 75000,
    };

    itemList.push(tempItem);
  }
  console.log(itemList);

  return <Product itemList={itemList} productType={productType} />;
};

export default ProductContainer;
