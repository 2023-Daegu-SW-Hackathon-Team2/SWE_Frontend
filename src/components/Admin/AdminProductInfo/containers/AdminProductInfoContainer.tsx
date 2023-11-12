import React, { useCallback, useEffect, useState } from 'react';
import AdminProductInfo from '../AdminProductInfo';
import { EFile, EInput, ItemInfo } from '@typedef/types';
import { getBannerImg, postBanner, postNewBest } from 'src/api/HomeAPI';
import { getAllData, getProductInfo, updateProduct, uploadImage } from 'src/api/ProductAPI';
import { useParams } from 'react-router-dom';
type Props = {};

const AdminProductInfoContainer = (props: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [data, setData] = useState<ItemInfo>();
  const [title, setTitle] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [choose, setChoose] = useState<string[]>([]);
  const [desc, setDesc] = useState<string>("");
  const params: any = useParams().id;

  useEffect(() => {
    getProductInfo(params).then((data) => {
      setData(data[0]);
      setTitle(data[0].title);
      setImg(data[0].img);
      setPrice(data[0].price);
      setCategory(data[0].category);
      setChoose(data[0].choose);
      setDesc(data[0].description);
    });
  }, []);

  const onChangeTitle = useCallback(
    (e: EInput) => {
      setTitle(e.target.value);
    },[],);

  const onChangePrice = useCallback(
    (e: EInput) => {
      setPrice(parseInt(e.target.value));
    },[],);

  const onChangeCategory = useCallback(
    (e: EInput) => {
      setCategory(parseInt(e.target.value));
    },[],);

  const onChangeChoose = useCallback(
    (e: EInput, index: number) => {
      const newChoose = [...choose];
      newChoose[index] = e.target.value;
      setChoose(newChoose);
    },
    [choose],
  );

  const onConfirmUpdateProduct = useCallback(() => {
    const Lists: any = [];
    Lists.push({
      title: title,
      img: img,
      price: price,
      description: desc,
      category: category,
      choose: choose
    });
    updateProduct(params,Lists);
    window.location.reload();
  }, [title, img, price, desc, category, choose]);

  const handleFileChange = (event: EFile) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles(selectedFiles);
      setFileNames(selectedFiles.map((file) => file.name));
    }
  };
  const onUploadClick = useCallback(() => {
    uploadImage(files).then((res)=>{
      setImg(res);
    }).then(()=>{
      window.location.reload();
    })
  }, [files]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const totalData: any = [];
  //     const data = await getAllData();
  //     for (let i = 0; i < data.length; i++) {
  //       totalData.push({
  //         title: data[i].title,
  //         id: data[i].id,
  //       });
  //     }

  //     setDataList(totalData);
  //     console.log(totalData);
  //   };

  //   fetchData();

  //   return () => {};
  // }, []);
  return <AdminProductInfo 
          handleFileChange={handleFileChange}
          fileNames={fileNames}
          onUploadClick={onUploadClick}
          data={data}
          onChangeTitle={onChangeTitle}
          onChangePrice={onChangePrice}
          onChangeCategory={onChangeCategory}
          onChangeChoose={onChangeChoose}
          onConfirmUpdateProduct={onConfirmUpdateProduct}
          />;
};

export default AdminProductInfoContainer;
 