import React from 'react';
import ProductInfo from '../ProductInfo';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductInfo } from 'src/api/ProductAPI';
type Props = {};

const ProductInfoContainer = (props: Props) => {
  const params = useParams().id;

  // useEffect(() => {
  //   getProductInfo(0).then((data) => {
  //     console.log(data);
  //   });

  //   return () => {};
  // }, []);
  return <ProductInfo />;
};

export default ProductInfoContainer;
