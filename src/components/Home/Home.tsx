import React from 'react';
import Carousel from './components/BannerCarousel';
import './styles/home.styles.css';
import { HomeItem } from '@typedef/types';
import HomeItemsContainer from './containers/HomeItemsContainer';

type Props = {
  itemList1: HomeItem[];
  itemList2: HomeItem[];
  title1: string;
  title2: string;
};

const Home = ({ itemList1, itemList2, title1, title2 }: Props) => {

  const images = [
		"https://picsum.photos/1200/600?random=1",
		"https://picsum.photos/1200/600?random=2",
		"https://picsum.photos/1200/600?random=3"
	  ];

  return (
    <div className='home'>
      <Carousel images={images} />
      <HomeItemsContainer itemList={itemList1} title={title1} />
      <HomeItemsContainer itemList={itemList2} title={title2} />
    </div>
  );
};

export default Home;
