import React, { useEffect, useState } from 'react';
import './styles/adminproduct.styles.css';
import ProductContainer from '@components/Product/containers/ProductContainer';
import { getCategory } from 'src/api/GnbAPI';
import { Navigate, useNavigate, useParams,  } from 'react-router-dom';
import { deleteProduct, getCategoryInfo } from 'src/api/ProductAPI';
import images from 'src/assets/images';
type Props = {};

type category = {
  id:number;
  label:string;
}

type item = {
  id:number;
  title:string;
  img:string;
}

const AdminProduct = (props: Props) => {

  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const params: any = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    getCategory(7).then((data) => {
      const newItemList = data.map((item:any) => ({
        label: item.category_name,
        id: item.id
      }));
      setCategory(newItemList);
      
    });
  }, [params]);

  useEffect(() => {
    getCategoryInfo(params).then((data) => {
      console.log(data)
      const newProductsList = data.map((item:item, index:number) =>({
        id:item.id,
        title: item.title,
        img: item.img
      }));
      setProducts(newProductsList);
    });
  },[]);

  console.log(category);

  return (
    <div className='adproduct'>
      <div className='adproduct-tab'>
        <div className='adproduct-tab-nav'>
        {category.map((item:category, index) => (
          <div key={index} className='adproduct-tab-button'>
          <a key={index} href={`/admin/product/${item.id}`}>{item.label}</a>
          </div>
        ))}
        </div>
        <div className='list-board'>
          <div className='list-container'>
            <div className= 'list-head'>
              <div className='list-head-num'>번호</div>
              <div className='list-head-title'>상품명</div>
              <div className='list-head-image'>이미지</div>
              <div className='list-head-del'>삭제하기</div>
            </div>
            <div className='list-item'>
            {products.map((item:item, index) => (
              <div key={index} className='list-row' onClick={()=>{navigate(`/admin/productinfo/${item.id}`)}}>
                <div className='list-row-num'>{item.id}</div>
                <div className='list-row-title'>{item.title}</div>
                <div className='list-row-image'>
                  <img src={item.img}></img>
                  </div>
                <div className='list-row-del'>
                  <img src={images.delete} onClick={()=>{deleteProduct(item.id); window.location.reload();}}></img>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <div className='adproduct-divider'></div>
      {params ? <ProductContainer view={'-admin'} />:<div></div>}
    </div>
  );
};

export default AdminProduct;
