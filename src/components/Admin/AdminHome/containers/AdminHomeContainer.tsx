import React, { useCallback, useEffect, useState } from 'react';
import { EFile } from '@typedef/types';
import AdminHome from '../AdminHome';
import { postBanner } from 'src/api/HomeAPI';
import { getAllData } from 'src/api/ProductAPI';
import { getCategoryInfo, getProductInfo } from 'src/api/ProductAPI';
import { EInput } from '@typedef/types';
import { postNewBest } from 'src/api/HomeAPI';
import { getBannerImg } from 'src/api/HomeAPI';
type Props = {};

const AdminHomeContainer = (props: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [dataList, setDataList] = useState([]);
  const [homeNewList, setHomeNewList] = useState(['', '', '', '']);
  const [homeBestList, setHomeBestList] = useState(['', '', '', '']);
  const onChangeNew = useCallback(
    (e: EInput, index: number) => {
      const updatedList = [...homeNewList];
      updatedList[index] = e.target.value;
      setHomeNewList(updatedList);
      console.log(homeNewList);
    },
    [homeNewList],
  );
  const onChangeBest = useCallback(
    (e: EInput, index: number) => {
      const updatedList = [...homeBestList];
      updatedList[index] = e.target.value;
      setHomeBestList(updatedList);
    },
    [homeBestList],
  );
  const onConfirmNewBest = useCallback(() => {
    const Lists: any = [];
    Lists.push({
      new_item: homeNewList,
      best_item: homeBestList,
    });
    postNewBest(Lists);
    window.location.reload();
    alert('수정되었습니다.');
  }, [homeNewList, homeBestList]);

  const handleFileChange = (event: EFile) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles(selectedFiles);
      setFileNames(selectedFiles.map((file) => file.name));
    }
  };
  const onUploadClick = useCallback(() => {
    console.log(files);
    postBanner(files);
    window.location.reload();
    alert('수정되었습니다.');
  }, [files]);
  useEffect(() => {
    const fetchData = async () => {
      const totalData: any = [];
      const data = await getAllData();
      for (let i = 0; i < data.length; i++) {
        totalData.push({
          title: data[i].title,
          id: data[i].id,
        });
      }

      setDataList(totalData);
      console.log(totalData);
    };

    fetchData();

    return () => {};
  }, []);
  useEffect(() => {
    getBannerImg(6).then((data) => {
      setHomeNewList(data[0].new_item);
      setHomeBestList(data[0].best_item);
    });
  }, []);
  return (
    <AdminHome
      handleFileChange={handleFileChange}
      fileNames={fileNames}
      onUploadClick={onUploadClick}
      dataList={dataList}
      onChangeNew={onChangeNew}
      onChangeBest={onChangeBest}
      onConfirmNewBest={onConfirmNewBest}
      homeNewList={homeNewList}
      homeBestList={homeBestList}
    />
  );
};

export default AdminHomeContainer;
