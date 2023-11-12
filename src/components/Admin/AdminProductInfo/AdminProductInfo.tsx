import React from 'react';
import './styles/adminproductinfo.styles.css';
import ProductInfoContainer from '@components/ProductInfo/containers/ProductInfoContainer';
type Props = {
  handleFileChange: any;
  fileNames: any;
  onUploadClick: any;
  data : any;
  onChangeTitle : any;
  onChangePrice :any;
  onChangeCategory :any;
  onChangeChoose:any;
  onConfirmUpdateProduct:any;
};

const AdminProductInfo = ({
  handleFileChange,
  fileNames,
  onUploadClick,
  data,
  onChangeTitle,
  onChangePrice,
  onChangeCategory,
  onChangeChoose,
  onConfirmUpdateProduct,
}: Props) => {
  return (
    <div className='adproductinfo'>
      <div className='adhome'>
        <div className='adhome-tab'>
          <div className='adhome-tab-banner'>
            <input type='file' multiple onChange={handleFileChange} />
            <div>선택된 파일: {fileNames.join(', ')}</div>
            <button
              onClick={() => {
                onUploadClick();
              }}>
              업로드
            </button>
          </div>
          <div className='adhome-tab-input'>
            <div className='input'>
              <input type="text" onChange={(e) => {onChangeTitle(e);}} />
            </div>
            <div className='input'>
              <input type="text" onChange={(e) => {onChangePrice(e);}} />
              <input type="text" onChange={(e) => {onChangeCategory(e);}} />
            </div>
            <button onClick={onConfirmUpdateProduct}>업로드</button>
          </div>
        </div>
      </div>
      <div className='adproductinfo-divider'></div>
      <ProductInfoContainer view={'-admin'} />
    </div>
  );
};

export default AdminProductInfo;
