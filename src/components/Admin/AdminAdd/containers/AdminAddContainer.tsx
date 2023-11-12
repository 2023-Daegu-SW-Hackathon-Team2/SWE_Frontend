import { useCallback, useEffect, useState } from 'react';
import { EFile, ItemInfo } from '@typedef/types';
import { getProductInfo, uploadImage } from 'src/api/ProductAPI';
import { useParams } from 'react-router-dom';
import AdminAdd from '../AdminAdd';
type Props = {};

const AdminAddContainer = (props: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [datas, setDatas] = useState<ItemInfo>();
  const [img, setImg] = useState<string>('');
  const params: any = useParams().id;

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
      <AdminAdd
        handleFileChange={handleFileChange}
        fileNames={fileNames}
        onUploadClick={onUploadClick}
        data={datas}
      />
    </div>
  );
};

export default AdminAddContainer;
