import { useEffect, useState } from 'react';
import { ItemInfo } from '@typedef/types';
import { getProductInfo } from 'src/api/ProductAPI';
import { useParams } from 'react-router-dom';
import AdminAdd from '../AdminAdd';
type Props = {};

const AdminAddContainer = (props: Props) => {
  const [datas, setDatas] = useState<ItemInfo>();
  const [img, setImg] = useState<string>('');
  const params: any = useParams().id;

  useEffect(() => {
    getProductInfo(parseInt(params)).then((data) => {
      console.log(data);
      setDatas(data);
    });
  }, []);

  return (
    <div>
      <AdminAdd
        data={datas}
        imgs={img}
      />
    </div>
  );
};

export default AdminAddContainer;
