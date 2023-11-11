import React from 'react';
import { HomeItem } from '@typedef/types';
import ItemboxContainer from '@components/Itembox/containers/ItemboxContainer';
type Props = {
  itemList: HomeItem[];
  title: string;
};

const HomeItems = ({ itemList, title }: Props) => {
  return (
    <div className='home-items'>
      <div className='home-items-head'>{title}</div>
      <div className='home-items-body'>
        {itemList.map((item, index) => (
          <ItemboxContainer
            id={item.id}
            type={item.type}
            image={item.image}
            name={item.name}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeItems;
