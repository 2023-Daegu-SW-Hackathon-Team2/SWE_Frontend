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
  const [files, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [datas, setDatas] = useState<ItemInfo>();
  const [title, setTitle] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [choose, setChoose] = useState<string[]>([]);
  const [desc, setDesc] = useState<string>('');
  const params: any = useParams().id;

  const categoryList = ['bottom', 'top', 'outer', 'shoes', 'acc'];

  useEffect(() => {
    getProductInfo(parseInt(params)).then((data) => {
      console.log(data);
      setDatas(data);
    });
  }, []);

  const handleFileChange = (event: EFile) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles(selectedFiles);
      setFileNames(selectedFiles.map((file) => file.name));
    }
  };
  const onUploadClick = useCallback(() => {
    uploadImage(files).then((res) => {
      setImg(res);
    });
  }, [files]);

  return (
    <div>
      {datas ? (
        <AdminProductInfo
          handleFileChange={handleFileChange}
          fileNames={fileNames}
          onUploadClick={onUploadClick}
          data={datas}
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default AdminProductInfoContainer;
