import React from 'react';
import './styles/productinfo.styles.css';
import images from 'src/assets/images';
import { ItemInfo, VoidFunc, SelectedItem } from '@typedef/types';
type Props = {
  productInfo: ItemInfo;
  dropbox: boolean;
  onDropboxClick: VoidFunc;
  formatCurrency: (value: number) => string;
  selectedItem: SelectedItem[];
  onAddClick: (index: number) => void;
  onSubClick: (index: number) => void;
  onDeleteClick: (index: number) => void;
  totalQuantity: number;
};

const ProductInfo = ({
  productInfo,
  dropbox,
  onDropboxClick,
  formatCurrency,
  selectedItem,
  onAddClick,
  onSubClick,
  onDeleteClick,
  totalQuantity,
}: Props) => {
  return (
    <div className='pInfo'>
      <div className='pInfo-info'>
        <img src={images.logo_orca_b} />
        <div className='pInfo-info-text'>
          <div className='pInfo-info-text-name'>{productInfo.title}</div>
          <div className='pInfo-info-text-price'>
            {formatCurrency(productInfo.price)}
          </div>
          <div className='pInfo-info-text-ship'>배송비 2,500원</div>
          <div className='pInfo-info-text-choose' onClick={onDropboxClick}>
            <span>선택하세요</span>
            <img src={dropbox ? images.up_w : images.down_w} />
            <div className={dropbox ? 'cDropbox-active' : 'cDropbox'}>
              {productInfo.choose.map((choice, index) => (
                <div
                  className='droptab'
                  key={index}
                  onClick={() => {
                    onAddClick(index);
                  }}>
                  {choice}
                </div>
              ))}
            </div>
          </div>
          <div className='pInfo-info-text-selected'>
            {selectedItem.map((item, index) => {
              if (item.quantity !== 0) {
                return (
                  <div className='sItem' key={index}>
                    <div className='sItem-label'>{item.label}</div>
                    <img
                      className='sItem-delete'
                      src={images.delete}
                      onClick={() => {
                        onDeleteClick(index);
                      }}></img>
                    <div className='sItem-adjust'>
                      <img
                        className='sItem-adjust-sub'
                        src={images.minus_button}
                        onClick={() => {
                          onSubClick(index);
                        }}
                      />
                      <span className='sItem-adjust-quantity'>
                        {item.quantity}
                      </span>
                      <img
                        className='sItem-adjust-add'
                        src={images.plus_button}
                        onClick={() => {
                          onAddClick(index);
                        }}
                      />
                    </div>
                    <div className='sItem-price'>
                      {formatCurrency(productInfo.price * item.quantity)}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className='pInfo-price'>
        <div className='pInfo-price-qtext'>주문 수량</div>
        <div className='pInfo-price-qnumber'>{`${totalQuantity}개`}</div>
        <div className='pInfo-price-ttext'>총 상품 금액</div>
        <div className='pInfo-price-tnumber'>
          {formatCurrency(productInfo.price * totalQuantity)}
        </div>
      </div>
      <div className='pInfo-purchase'>
        <button className='buy'>구매하기</button>
        <button className='bag'>장바구니에 담기</button>
      </div>
      <div className='pInfo-divider' />
      <div className='pInfo-dimg'>
        <div className='pInfo-dimg-header'>{productInfo.description}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
