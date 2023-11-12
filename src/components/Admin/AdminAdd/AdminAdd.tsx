import React, { useEffect, useState } from 'react';
import './styles/adminadd.styles.css';

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
  onDeleteClick:any;
  onAddClick:any;
  onChangeOptions:any;
  newOption:any;
  onChooseChange:any;
};

const AdminAdd = ({
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
  data,
  onDeleteClick,
  onAddClick,
  onChangeOptions,
  newOption,
  onChooseChange
}: Props) => {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState<number>(0);
    const [choose, setChoose] = useState<string[]>([]);
    const [desc, setDesc] = useState<string>("");
    const categoryList = ["bottom", "top", "outer", "shoes", "acc"];
    console.log(data);

    useEffect(() => {
          console.log(data);
          setTitle("");
          setPrice(0);
          setCategory(0);
          setChoose([]);
          setDesc("");
      }, []);

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
                <input className="title" type="text" value={title} onChange={(e) => {onChangeTitle(e);}} />
            </div>
            <div className='flex'>
                <div className='input'>
                    <div>가격</div>
                    <input type="text" value={price} onChange={(e) => {onChangePrice(e);}} />
                </div>
                <div className='input'>
                    <div>카테고리</div>
                    <input type="text" value={categoryList[category]}  onChange={(e) => {onChangeCategory(e);}} />
                </div>
            </div>
            <div className='input'>
                    <div>상세설명</div>
                    <input className="title" value={desc} type="text" onChange={(e) => {onChangeDesc(e);}} />
                </div>
            </div>
            <div className='Box'>
                <div className='chooseBox'>
                    {choose.map((choose:any, index:number) => (
                        <div key={index} className='chooseBox-box'>
                        <input value={choose} onChange={(e)=>{onChooseChange(e,index)}}></input>
                        <button onClick={() => {onDeleteClick(choose);}}>삭제</button>
                    </div>
                    ))}
                </div>
                <div className='chooseBox-divider'></div>
                <div className='chooseBox-add'>
                    <input value={newOption} onChange={(e)=>{onChangeOptions(e);}}></input>
                    <button onClick={()=>{onAddClick(newOption)}}>추가</button>
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
            <button className='submit' onClick={()=>{onConfirmUpdateProduct()}}>상품 정보 수정하기</button>
        </div>
      </div>
    </div>
  );
};

export default AdminAdd;

