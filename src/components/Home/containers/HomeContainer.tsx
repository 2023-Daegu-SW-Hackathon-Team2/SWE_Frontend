import React, { useEffect } from 'react';
import Home from '../Home';
import images from 'src/assets/images';
import { HomeItem } from '@typedef/types';
type Props = {};

const HomeContainer = (props: Props) => {
  const itemList1: HomeItem[] = [];
  const itemList2: HomeItem[] = [];
  const title1 = '신상품';
  const title2 = '베스트';
  for (let i = 0; i < 4; i++) {
    const tempItem1: HomeItem = {
      type: 'big',
      image: images.logo_orca_b,
      name: `린넨 오버핏 골지 맨투맨 ${i + 1}`,
      price: 75000,
    };
    const tempItem2: HomeItem = {
      type: 'big',
      image: images.logo_orca_b,
      name: `린넨 머슬핏 골지 맨투맨 ${i + 1}`,
      price: 55000,
    };
    itemList1.push(tempItem1);
    itemList2.push(tempItem2);
  }
  return (
    <Home
      itemList1={itemList1}
      itemList2={itemList2}
      title1={title1}
      title2={title2}
    />
  );
};

export default HomeContainer;
