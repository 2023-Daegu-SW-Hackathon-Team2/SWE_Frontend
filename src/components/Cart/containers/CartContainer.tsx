import React, { useEffect, useState } from 'react';
import Cart from '../Cart';
import { useParams } from 'react-router-dom';
import { getCartInfo } from 'src/api/CartAPI';
import { ItemList } from '@typedef/types';
import { getProductInfo } from 'src/api/ProductAPI';

const CartContainer = () => {
  const [itemList, setItemList] = useState<ItemList[]>([])
  useEffect(() => {
    getCartInfo().then((data) => {
      Promise.all(data.map((item:any) => getProductInfo(item.product_id)))
        .then(items => {
          const newItems = items.map((item, index) => ({
            image: item[0].img,
            name: item[0].title,
            detail: item[0].description,
            price: item[0].price,
            quantity: data[index].quantity,
            choose: data[index].choose
          }));
          console.log(newItems);
          setItemList(newItems);
        });
    });
  }, []);

  return (
    <Cart itemList={itemList}/>
  );
};

export default CartContainer;
