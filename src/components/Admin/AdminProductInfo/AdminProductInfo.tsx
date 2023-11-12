import React from 'react';
import './styles/adminproductinfo.styles.css';
import ProductInfoContainer from '@components/ProductInfo/containers/ProductInfoContainer';
type Props = {};

const AdminProductInfo = (props: Props) => {
  return (
    <div className='adproductinfo'>
        <ProductInfoContainer view={'-admin'} />
    </div>
  );
};

export default AdminProductInfo;
