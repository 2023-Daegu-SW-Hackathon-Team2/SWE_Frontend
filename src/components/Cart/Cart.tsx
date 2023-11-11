import React, {useEffect, useState} from 'react';
import './styles/cart.styles.css';
import images from 'src/assets/images';
import { ItemList } from '@typedef/types';

type Props = {
  itemList: ItemList[];
};

const formatCurrency = (value: number) => {
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'KRW', // 원화 (₩)
  });
};

const Cart = ({itemList}:Props) => {
  // const exampleData = [
  //   { 
  //     image: images.nike_air,
  //     name: '상품 1', 
  //     detail: '이 상품은 민중이가 가지고 싶은 신발입니다!',
  //     num: 1, 
  //     price: 10000, 
  //     deliver: 2500 
  //   },
  //   { 
  //     image: images.nike_air,
  //     name: '상품 2', 
  //     detail: '이 상품은 민중이가 가지고 싶은 신발입니다!',
  //     num: 2, 
  //     price: 10000, 
  //     deliver: 2500 
  //   },
  //   { 
  //     image: images.nike_air,
  //     name: '상품 3', 
  //     detail: '이 상품은 민중이가 가지고 싶은 신발입니다!',
  //     num: 3, 
  //     price: 10000, 
  //     deliver: 2500 
  //   },
  //   { 
  //     image: images.nike_air,
  //     name: '상품 4', 
  //     detail: '이 상품은 민중이가 가지고 싶은 신발입니다!',
  //     num: 4, 
  //     price: 10000, 
  //     deliver: 2500 
  //   },
  // ];

  const [data, setData] = useState<ItemList[]>([]);
  const [tot, setTot] = useState(0);
  // setData(itemList);

  // for(let i = 0; i<data.length; i++){
  //   total += (data[i].price*data[i].quantity)
  // }
  // setTot(total);

  useEffect(() => {
    setData(itemList);
  
    let total = 0;
    for (let i = 0; i < itemList.length; i++) {
      total += itemList[i].price * itemList[i].quantity;
    }
    setTot(total);
  }, [itemList]); // itemList가 변경될 때마다 이 로직을 실행합니다.
  

  return (
    <div className={`cart`}>
      <div className='cart-container'>
        <div className= 'cart-head'>
          <div className='cart-head-info'>상품 정보</div>
          <div className='cart-head-num'>수량</div>
          <div className='cart-head-deliver'>옵션</div>
          <div className='cart-head-price'>가격</div>
        </div>
        <div className='cart-item'>
          {data.map((item, index) => (
            <div key={index} className='cart-row'>
              <div className='cart-row-img'>
                <img className='cart-row-img-file' src={item.image} alt={item.name} />
              </div>
              <div className='cart-row-info'>
                <div className='cart-row-info-name'>{item.name}</div>  
                <div className='cart-row-detail'>{item.detail}</div>  
              </div>
              <div className='cart-row-num'>
                {/* <button className='cart-row-num-button'> */}
                  {/* <img className='cart-row-num-image' src={images.minus_button}></img> */}
                {/* </button> */}
                <div className='cart-row-num-text'>{item.quantity}</div>
                {/* <button className='cart-row-num-button'> */}
                  {/* <img className='cart-row-num-image' src={images.plus_button}></img> */}
                {/* </button> */}
          
              </div>
              <div className='cart-row-deliver'>{`${item.choose}`}</div>
              <div className='cart-row-price'>{`${item.price}원`}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='total-container'>
        <div className='product-total'>
          <div className='product-total-name'>상품 합계</div>
          <div className='product-total-money'>{formatCurrency(tot)}</div>
        </div>
        <div className='product-total'>
          <div className='product-total-name'>배송비</div>
          <div className='product-total-money'>{formatCurrency(2500)}</div>
        </div>
        <div className='product-money'>
          <div className='product-money-name'>총합</div>
          <div className='product-money-money'>{formatCurrency(tot+2500)}</div>
        </div>

      </div>
      <div className='buy'>
        <button className='buy-button'>
          구매하기
        </button>
      </div>
      
    </div>
  );
};

export default Cart;
