import React, { useCallback, useEffect, useState } from 'react';
import GnbModify from '../GnbModify';
import { EFile, EInput } from '@typedef/types';
import { postLogo } from 'src/api/GnbAPI';
import {
  getGnbCategory,
  putGnbCategory,
  postGnbCategory,
  deleteGnbCategory,
} from 'src/api/GnbAPI';
type Props = {};

const GnbModifyContainer = (props: Props) => {
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const [categories, setCategories] = useState<any>([]);

  const [newCategory, setNewCategory] = useState('');
  const fetchData = async () => {
    const totalData: any = [];

    const data = await getGnbCategory();

    setCategories(data);
    console.log(data);
    //  for (let i = 0; i < data.length; i++) {
    //    totalData.push({
    //      title: data[i].title,
    //      id: data[i].id,
    //    });
    //  }

    //  setDataList(totalData);
    //  console.log(totalData);
  };
  const uploadLogoHandler = useCallback(
    (event: EFile) => {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedLogo(file);
        // if (
        //   file.type ===
        //   ('application/png' || 'application/jpeg' || 'application/svg')
        // ) {
        //   console.log('이건 이미지');

        // } else {
        //   alert('올바른 이미지 파일을 선텍하세요.');
        // }
      }
    },
    [selectedLogo],
  );
  const onUploadClick = useCallback(() => {
    postLogo(selectedLogo);
  }, [selectedLogo]);
  const onChangeCategory = useCallback(
    (e: EInput, index: number) => {
      const updatedList = [...categories];

      updatedList[index].category_name = e.target.value;

      setCategories(updatedList);
    },
    [categories],
  );
  const onUpdateClick = useCallback(
    (index: number) => {
      putGnbCategory(categories[index]);
    },
    [categories],
  );
  const onAddChange = useCallback(
    (e: EInput) => {
      setNewCategory(e.target.value);
    },
    [newCategory],
  );

  const onAddClick = useCallback(
    async (newCategory: string) => {
      await postGnbCategory(newCategory);

      fetchData();
      window.location.reload();
    },
    [newCategory],
  );
  const onDeleteClick = useCallback((id: number) => {
    deleteGnbCategory(id);
    window.location.reload();
  }, []);

  console.log(selectedLogo);
  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  console.log(categories);
  return (
    <GnbModify
      selectedLogo={selectedLogo}
      uploadLogoHandler={uploadLogoHandler}
      onUploadClick={onUploadClick}
      categories={categories}
      onChangeCategory={onChangeCategory}
      onUpdateClick={onUpdateClick}
      onAddChange={onAddChange}
      onAddClick={onAddClick}
      onDeleteClick={onDeleteClick}
      newCategory={newCategory}
    />
  );
};

export default GnbModifyContainer;
