import React, { useEffect, useState } from 'react';
import Home from '../Home';
import images from 'src/assets/images';
import { HomeItem } from '@typedef/types';
import { getBannerImg } from 'src/api/HomeAPI';
import { getProductInfo } from 'src/api/ProductAPI';
type Props = {
  view: string;
};

const HomeContainer = ({ view }: Props) => {
  const title1 = '신상품';
  const title2 = '베스트';

  const [image, setImages] = useState<string[]>([]);
  const [itemList1, setItemList1] = useState<HomeItem[]>([]);
  const [itemList2, setItemList2] = useState<HomeItem[]>([]);

  useEffect(() => {
    getBannerImg(6).then((data) => {
      setImages(data[0].banners);

      if (data[0].new_item) {
        Promise.all(
          data[0].new_item.map((id: number) => getProductInfo(id)),
        ).then((items) => {
          const newItems = items.map((item) => ({
            id: item[0].id,
            type: 'big',
            image: item[0].img,
            name: item[0].title,
            price: item[0].price,
          }));
          setItemList1(newItems);
        });
      }

      if (data[0].best_item) {
        Promise.all(
          data[0].best_item.map((id: number) => getProductInfo(id)),
        ).then((items) => {
          const newItems = items.map((item) => ({
            id: item[0].id,
            type: 'big',
            image: item[0].img,
            name: item[0].title,
            price: item[0].price,
          }));
          setItemList2(newItems);
        });
      }
    });
  }, []);

  return (
    <Home
      itemList1={itemList1}
      itemList2={itemList2}
      title1={title1}
      title2={title2}
      images={image}
      view={view}
    />
  );
};

export default HomeContainer;
