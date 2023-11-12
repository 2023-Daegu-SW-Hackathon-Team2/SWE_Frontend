import React from 'react';
import './styles/adminproductinfo.styles.css';
import ProductInfoContainer from '@components/ProductInfo/containers/ProductInfoContainer';
type Props = {
  handleFileChange: any;
  fileNames: any;
  onUploadClick: any;
  onChangeTitle : any;
  onChangePrice :any;
  onChangeCategory :any;
  onChangeDesc: any;
  onConfirmUpdateProduct:any;
  onChangeGood:any;
  shoptClick:any;
  data:any;
};

const AdminProductInfo = ({
  handleFileChange,
  fileNames,
  onUploadClick,
  onChangeTitle,
  onChangePrice,
  onChangeCategory,
  onChangeDesc,
  onConfirmUpdateProduct,
  onChangeGood,
  shoptClick,
  data
}: Props) => {
    const categoryList = ["bottom", "top", "outer", "shoes", "acc"];
    console.log(data);
  return (
    <div className='adproductinfo'>
      <div className='adproductinfo-tab'>
        <div className='adproductinfo-tab-banner'>
            <div className='Box-banner'>
                <input type='file' multiple onChange={handleFileChange} />
                <div>선택된 파일: {fileNames.join(', ')}</div>
                <button
                    onClick={() => {
                    onUploadClick();
                    }}>
                    이미지 업로드
                </button>
            </div>
        </div>
        <div className='adproductinfo-tab-input'>
            <div className='Box'>
            <div className='input'>
                <div>상품명</div>
                <input className="title" type="text" value={data.title} onChange={(e) => {onChangeTitle(e);}} />
            </div>
            <div className='flex'>
                <div className='input'>
                    <div>가격</div>
                    <input type="text" value={data.price} onChange={(e) => {onChangePrice(e);}} />
                </div>
                <div className='input'>
                    <div>카테고리</div>
                    <input type="text" value={categoryList[data.category]}  onChange={(e) => {onChangeCategory(e);}} />
                </div>
            </div>
            <div className='input'>
                    <div>상세설명</div>
                    <input className="title" value={data.description} type="text" onChange={(e) => {onChangeDesc(e);}} />
                </div>
            </div>
            <div className='Box'>
                <div className='chooseBox'>
                    {data.choose.map((choose:any, index:number) => (
                        <div key={index} className='chooseBox-box'>
                        <input value={choose}></input>
                        <button>수정</button><button>삭제</button>
                    </div>
                    ))}
                </div>
                <div className='chooseBox-divider'></div>
                <div className='chooseBox-add'>
                    <input></input>
                    <button>추가</button>
                </div>
            </div>
            <div className='Box'>
                <div className='shoptBox'>
                    <div className='shoptBox-keyword'>
                        키워드 입력 <input onChange={(e)=>{onChangeGood();}}></input>
                    </div>
                    <button onClick={() => {shoptClick();}}>상세페이지 추천 문구 생성하기</button>
                </div>
            </div>
            <button className='submit' onClick={onConfirmUpdateProduct}>상품 정보 수정하기</button>
        </div>
      </div>
      <div className='adproductinfo-divider'></div>
      <ProductInfoContainer view={'-admin'} />
    </div>
  );
};

export default AdminProductInfo;

