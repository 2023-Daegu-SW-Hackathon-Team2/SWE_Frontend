import React, { useCallback, useState } from 'react';
import Footer from '../Footer';
import { CompanyData } from '@typedef/types';
type Props = {};

const FooterContainer = (props: Props) => {

    const data:CompanyData = {
        companyName:'',
        address:'',
        ceoName:'string',
        companyId:'',
        phone:'',
        email:'',
        sellerId:'',
        protectName:'',
      };
  return (
    <Footer companyName='상호명' address='주소' ceoName='홍 길 동' companyId='123-11-123123'
    phone='010-1234-1234' email='abcd1234@abcd.com' sellerId='0000-xxxx-00000' protectName='홍 길 동'  />
  );
};

export default FooterContainer;
