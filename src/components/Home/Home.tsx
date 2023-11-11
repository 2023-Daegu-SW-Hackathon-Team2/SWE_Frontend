import React from 'react';
import './styles/home.styles.css';
import images from 'src/assets/images';
import { HomeItem } from '@typedef/types';
import HomeItemsContainer from './containers/HomeItemsContainer';
import ItemboxContainer from '@components/Itembox/containers/ItemboxContainer';
type Props = {
  itemList1: HomeItem[];
  itemList2: HomeItem[];
  title1: string;
  title2: string;
};

const Home = ({ itemList1, itemList2, title1, title2 }: Props) => {
  return (
    <div className='home'>
      <HomeItemsContainer itemList={itemList1} title={title1} />
      <HomeItemsContainer itemList={itemList2} title={title2} />
    </div>
  );
};

export default Home;
