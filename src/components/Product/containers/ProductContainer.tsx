import React, { useEffect, useState } from 'react';
import Product from '../Product';
import { HomeItem } from '@typedef/types';
import images from 'src/assets/images';
import { useParams } from 'react-router-dom';
import { getCategoryInfo, getCategoryTitle } from 'src/api/ProductAPI';
import HomeItems from '@components/Home/components/HomeItems';
type Props = {};

const ProductContainer = (props: Props) => {
  const params: any = useParams().id;
  const [itemList, setItemList] = useState<HomeItem[]>([])
  const [productType, setProductType] = useState("");
  useEffect(() => {
    getCategoryInfo(params).then((data) => {
      const newItemList = data.map((item:any) => ({
        id: item.id,
        type:'small',
        image: item.img,
        name: item.title,
        price: item.price,
      }));
      setItemList(newItemList);
    });
  }, [params]);
  useEffect(() => {
    getCategoryTitle(params).then((data) => {
      console.log(data)
      setProductType(data.category_name)
    });
  }, [params]);

  return <Product itemList={itemList} productType={productType} />;
};

export default ProductContainer;
