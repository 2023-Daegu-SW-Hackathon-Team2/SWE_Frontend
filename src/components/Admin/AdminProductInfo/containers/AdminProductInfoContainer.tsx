import React, { useCallback, useEffect, useState } from 'react';
import AdminProductInfo from '../AdminProductInfo';
import { EFile, EInput, ItemInfo, ShoPT } from '@typedef/types';
import { getBannerImg, postBanner, postNewBest } from 'src/api/HomeAPI';
import { getProductInfo, updateProduct, uploadImage } from 'src/api/ProductAPI';
import { useParams } from 'react-router-dom';
import { postGpt } from 'src/api/ShoPTAPI';
import { deleteGnbCategory, putGnbCategory } from 'src/api/GnbAPI';
type Props = {};

const AdminProductInfoContainer = (props: Props) => {
  const [datas, setDatas] = useState<ItemInfo>();
  const [img, setImg] = useState<string>('');
  const params: any = useParams().id;

  const categoryList = ['bottom', 'top', 'outer', 'shoes', 'acc'];

  useEffect(() => {
    getProductInfo(parseInt(params)).then((data) => {
      console.log(data);
      setDatas(data);
    });
  }, []);


  return (
    <div>
      {datas ? (
        <AdminProductInfo
          data={datas}
          imgs={img}
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default AdminProductInfoContainer;
