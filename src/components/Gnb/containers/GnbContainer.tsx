import React, { useCallback, useEffect, useState } from 'react';
import Gnb from '../Gnb';
import { GNBTableTypes } from '@typedef/types';
import { useNavigate } from 'react-router-dom';
import { getCategory } from 'src/api/GnbAPI';
type Props = {
  location: string;
};

const GnbContainer = ({ location }: Props) => {
  const navigate = useNavigate();
  const [dropBox, setDropBox] = useState(false);
  const [dropBoxList, setDropBoxList] = useState<GNBTableTypes[]>([]);
  const onDropBoxClick = useCallback(() => {
    setDropBox((prev) => !prev);
  }, [dropBox]);

  useEffect(() => {
    getCategory(7).then((data) => {
      const newItemList = data.map((item:any) => ({
        label:item.category_name,
        path: `/product/${item.id}`
      }));
      setDropBoxList(newItemList);
    });
  }, []);

  const tabTable: GNBTableTypes[] = [
    {
      label: 'Product',
      path: '/product',
    },
    {
      label: 'Community',
      path: '/community',
    },
    {
      label: 'Login',
      path: '/login',
    },
    {
      label: 'Cart',
      path: '/cart',
    },
    {
      label: 'My page',
      path: '/mypage',
    },
  ];
  // const dropBoxList: GNBTableTypes[] = [
  //   {
  //     label: '상의',
  //     path: '/product/0',
  //   },
  //   {
  //     label: '하의',
  //     path: '/product/1',
  //   },
  //   {
  //     label: '아우터',
  //     path: '/product/2',
  //   },
  //   {
  //     label: '신발',
  //     path: '/product/3',
  //   },
  //   {
  //     label: '악세사리',
  //     path: '/product/4',
  //   },
  // ];
  const onTabCLick = useCallback((path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  }, []);

  return !location.includes('admin') ? (
    <Gnb
      tabTable={tabTable}
      onTabClick={onTabCLick}
      dropBoxList={dropBoxList}
      dropBox={dropBox}
      onDropBoxClick={onDropBoxClick}
    />
  ) : (
    <></>
  );
};

export default GnbContainer;
