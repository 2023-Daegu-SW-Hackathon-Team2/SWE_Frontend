import HomeContainer from '@components/Home/containers/HomeContainer';
import GnbContainer from '@components/Gnb/containers/GnbContainer';
import ListBoardContainer from '@components/ListBoard/containers/ListBoardContainer';
import CartContainer from '@components/Cart/containers/CartContainer';
import ProductContainer from '@components/Product/containers/ProductContainer';
import ProductInfoContainer from '@components/ProductInfo/containers/ProductInfoContainer';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import './styles/rootnavigation.style.css';
import FooterContainer from '@components/Footer/containers/FooterContainer';

const RootNavigation = () => {
  const location = useLocation();
  return (
    <>
      <GnbContainer />
      <Routes location={location}>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/community' element={<ListBoardContainer />} />
        <Route path='/product/:id' element={<ProductContainer />} />
        <Route path='/listBoard' element={<ListBoardContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/productinfo/:id' element={<ProductInfoContainer />} />
      </Routes>
      <FooterContainer />
    </>
  );
};

export default RootNavigation;
