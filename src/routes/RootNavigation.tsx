import HomeContainer from '@components/Home/containers/HomeContainer';
import GnbContainer from '@components/Gnb/containers/GnbContainer';
import ListBoardContainer from '@components/ListBoard/containers/ListBoardContainer';
import CartContainer from '@components/Cart/containers/CartContainer';
import ProductContainer from '@components/Product/containers/ProductContainer';
import ProductInfoContainer from '@components/ProductInfo/containers/ProductInfoContainer';
import AdminHomeContainer from '@components/Admin/AdminHome/containers/AdminHomeContainer';
import AdminGnbContainer from '@components/Admin/AdminGnb/containers/AdminGnbContainer';
import GnbModifyContainer from '@components/Admin/GnbModify/containers/GnbModifyContainer';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import './styles/rootnavigation.style.css';
import FooterContainer from '@components/Footer/containers/FooterContainer';
import AdminProductInfoContainer from '@components/Admin/AdminProductInfo/containers/AdminProductInfoContainer';
import AdminProductContainer from '@components/Admin/AdminProduct/containers/AdminProductContainer';
import AdminAddContainer from '@components/Admin/AdminAdd/containers/AdminAddContainer';

const RootNavigation = () => {
  const location = useLocation();
  return (
    <>
      <GnbContainer location={location.pathname} />
      <AdminGnbContainer location={location.pathname} />
      <Routes location={location}>
        <Route path='/' element={<HomeContainer view={''} />} />
        <Route path='/community' element={<ListBoardContainer />} />
        <Route path='/product/:id' element={<ProductContainer view={''} />} />
        <Route path='/listBoard' element={<ListBoardContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route
          path='/productinfo/:id'
          element={<ProductInfoContainer view={''} />}
        />
        <Route path='/admin/home' element={<AdminHomeContainer />} />
        <Route path='/admin/product/:id' element={<AdminProductContainer />} />
        <Route
          path='/admin/productinfo/:id'
          element={<AdminProductInfoContainer />}
        />
        <Route path='/admin/add' element={<AdminAddContainer />} />
        <Route path='/admin/gnb' element={<GnbModifyContainer />} />
      </Routes>
      <FooterContainer location={location.pathname} />
    </>
  );
};

export default RootNavigation;
