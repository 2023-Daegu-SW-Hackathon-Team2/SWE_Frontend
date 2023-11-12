import React, { useEffect, useState } from 'react';
import Carousel from './components/BannerCarousel';
import './styles/home.styles.css';
import { HomeItem } from '@typedef/types';
import HomeItemsContainer from './containers/HomeItemsContainer';
import { getBannerImg } from 'src/api/HomeAPI';

type Props = {
  itemList1: HomeItem[];
  itemList2: HomeItem[];
  title1: string;
  title2: string;
  images: string[];
  view: string;
};

const Home = ({
  itemList1,
  itemList2,
  title1,
  title2,
  images,
  view,
}: Props) => {
  return (
    <div className={`home${view}`}>
      <Carousel images={images} />
      {itemList1.length !== 0 ? (
        <HomeItemsContainer itemList={itemList1} title={title1} />
      ) : (
        <div></div>
      )}
      {itemList2.length !== 0 ? (
        <HomeItemsContainer itemList={itemList2} title={title2} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
