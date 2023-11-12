import React, { useCallback, useState } from 'react';
import ProductInfo from '../ProductInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductInfo } from 'src/api/ProductAPI';
import { ItemInfo, ViewType } from '@typedef/types';
import images from 'src/assets/images';
import { SelectedItem, BagPost } from '@typedef/types';
import { postBagList } from 'src/api/CartAPI';

const ProductInfoContainer = ({ view }: ViewType) => {
  const navigate = useNavigate();
  const params: any = useParams().id;
  const [dropbox, setDropbox] = useState(false);
  const [bagList, setBagList] = useState<BagPost[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedItem, setSelectedItem] = useState<SelectedItem[]>([]);
  const [productInfo, setProductInfo] = useState<ItemInfo>({
    category: 0,
    choose: [],
    description: '',
    img: [images.logo_orca_b],
    id: parseInt(params),
    price: 0,
    title: '',
    user_id: '',
  });
  const onDropboxClick = useCallback(() => {
    setDropbox((prev) => !prev);
  }, [dropbox]);

  // const productInfo: ItemInfo = {
  //   category: 4,
  //   choose: ['S', 'M', 'L', 'XL', '2XL'],
  //   description: '최민중과 임재윤을 사랑에 빠지게 만든 그 제품',
  //   id: parseInt(params),
  //   price: 8800,
  //   title: '채찍',
  //   user_id: 'whip',
  // };

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductInfo(parseInt(params));
      setProductInfo(data[0]);
      const updatedList = [];
      for (let i = 0; i < data[0].choose.length; i++) {
        const tempItem = {
          label: `${data[0].title} ${data[0].choose[i]}`,
          choose: data[0].choose[i],
          quantity: 0,
        };
        updatedList.push(tempItem);
      }
      setSelectedItem(updatedList);
    };

    fetchData();

    return () => {};
  }, [params]);
  // useEffect(() => {
  //   setAfterGet();

  //   return () => {};
  // }, []);
  const onBagClick = useCallback(async () => {
    for (let i = 0; i < bagList.length; i++) {
      await postBagList(bagList[i]);
    }
    navigate('/cart');
  }, [bagList]);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < selectedItem.length; i++) {
      temp = temp + selectedItem[i].quantity;
    }
    setTotalQuantity(temp);
    return () => {};
  }, [selectedItem]);
  useEffect(() => {
    const updateList: BagPost[] = [];
    for (let i = 0; i < selectedItem.length; i++) {
      if (selectedItem[i].quantity !== 0) {
        updateList.push({
          product_id: parseInt(params),
          quantity: selectedItem[i].quantity,
          created_user_id: '원석',
          choose: selectedItem[i].choose,
        });
      }
    }
    setBagList(updateList);
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
      onBagClick={onBagClick}
      view={view}
    />
  );
};

export default ProductInfoContainer;
