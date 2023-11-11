import React, { useCallback } from 'react';
import Gnb from '../Gnb';
import { GNBTableTypes } from '@typedef/types';
import { useNavigate } from 'react-router-dom';
type Props = {};

const GnbContainer = (props: Props) => {
  const navigate = useNavigate();
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
      label: 'Join',
      path: '/join',
    },
    {
      label: 'My page',
      path: '/mypage',
    },
  ];
  const onTabCLick = useCallback((path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  }, []);

  return <Gnb tabTable={tabTable} onTabClick={onTabCLick} />;
};

export default GnbContainer;
