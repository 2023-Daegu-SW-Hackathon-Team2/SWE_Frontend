import React, { useCallback, useState } from 'react';
import ProductInfo from '../ProductInfo';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductInfo } from 'src/api/ProductAPI';
import { ItemInfo } from '@typedef/types';
import { SelectedItem } from '@typedef/types';
type Props = {};

const ProductInfoContainer = (props: Props) => {
  const params: any = useParams().id;
  const [dropbox, setDropbox] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedItem, setSelectedItem] = useState<SelectedItem[]>([]);
  const onDropboxClick = useCallback(() => {
    setDropbox((prev) => !prev);
  }, [dropbox]);

  const productInfo: ItemInfo = {
    category: 4,
    choose: ['S', 'M', 'L', 'XL', '2XL'],
    description: '최민중과 임재윤을 사랑에 빠지게 만든 그 제품',
    id: parseInt(params),
    price: 8800,
    title: '채찍',
    user_id: 'whip',
  };

  const formatCurrency = (value: number) => {
    return Number(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'KRW', // 원화 (₩)
    });
  };
  const onAddClick = useCallback(
    (index: number) => {
      const updatedList = [...selectedItem];
      updatedList[index].quantity = updatedList[index].quantity + 1;
      setSelectedItem(updatedList);
    },
    [selectedItem],
  );
  const onSubClick = useCallback(
    (index: number) => {
      if (selectedItem[index].quantity > 0) {
        const updatedList = [...selectedItem];
        updatedList[index].quantity = updatedList[index].quantity - 1;
        setSelectedItem(updatedList);
      }
    },
    [selectedItem],
  );
  const onDeleteClick = useCallback(
    (index: number) => {
      const updatedList = [...selectedItem];
      updatedList[index].quantity = 0;
      setSelectedItem(updatedList);
    },
    [selectedItem],
  );

  // const onAddClick = useCallback(
  //   (index:number) => {

  //   },
  //   [],
  // )

  useEffect(() => {
    getProductInfo(40).then((data) => {
      console.log(data);
    });

    return () => {};
  }, []);
  useEffect(() => {
    const updatedList = [];
    for (let i = 0; i < productInfo.choose.length; i++) {
      const tempItem = {
        label: `${productInfo.title} ${productInfo.choose[i]}`,
        quantity: 0,
      };
      updatedList.push(tempItem);
    }
    setSelectedItem(updatedList);
    return () => {};
  }, []);
  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < selectedItem.length; i++) {
      temp = temp + selectedItem[i].quantity;
    }
    setTotalQuantity(temp);
    return () => {};
  }, [selectedItem]);

  return (
    <ProductInfo
      productInfo={productInfo}
      dropbox={dropbox}
      onDropboxClick={onDropboxClick}
      formatCurrency={formatCurrency}
      selectedItem={selectedItem}
      onAddClick={onAddClick}
      onSubClick={onSubClick}
      onDeleteClick={onDeleteClick}
      totalQuantity={totalQuantity}
    />
  );
};

export default ProductInfoContainer;
