import React from 'react';
import HomeItems from '../components/HomeItems';
import { HomeItem } from '@typedef/types';
type Props = {
  itemList: HomeItem[];
  title: string;
};

const HomeItemsContainer = ({ itemList, title }: Props) => {
  return <HomeItems itemList={itemList} title={title} />;
};

export default HomeItemsContainer;
