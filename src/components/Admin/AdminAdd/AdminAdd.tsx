import React, { useCallback, useEffect, useState } from 'react';
import './styles/adminadd.styles.css';
import ProductInfoContainer from '@components/ProductInfo/containers/ProductInfoContainer';
import { EInput, ShoPT } from '@typedef/types';
import { updateProduct } from 'src/api/ProductAPI';
import { useParams } from 'react-router-dom';
import { postGpt } from 'src/api/ShoPTAPI';
type Props = {
  handleFileChange: any;
  fileNames: any;
  onUploadClick: any;
  data: any;
};

const AdminAdd = ({
  handleFileChange,
  fileNames,
  onUploadClick,
  data,
}: Props) => {
  const [title, setTitle] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [choose, setChoose] = useState<string[]>([]);
  const [desc, setDesc] = useState<string>('');
  const [good, setGood] = useState<string>('');
  const [option, setOption] = useState<string>('');
  const [shopt, setShopt] = useState<string[]>([]);
  const categoryList = ['bottom', 'top', 'outer', 'shoes', 'acc'];
  const params: any = useParams().id;
  console.log(data);

  const onChangeTitle = useCallback(
    (e: EInput) => {
      setTitle(e.target.value);
      console.log(e.target.value);
    },
    [title],
  );

  const onChangePrice = useCallback(
    (e: EInput) => {
      setPrice(parseInt(e.target.value));
    },
    [price],
  );

  const onChangeCategory = useCallback(
    (e: EInput) => {
      setCategory(parseInt(e.target.value));
    },
    [category],
  );

  const onChangeDesc = useCallback(
    (e: EInput) => {
      setDesc(e.target.value);
    },
    [desc],
  );

  const onChangeGood = useCallback(
    (e: EInput) => {
      setGood(e.target.value);
    },
    [good],
  );

  const onChangeAdd = useCallback(
    (e: EInput) => {
      setOption(e.target.value);
      console.log(option);
    },
    [option],
  );

  const onChooseChange = useCallback(
    (e: EInput, index: number) => {
      const newChoose = [...choose];
      newChoose[index] = e.target.value;
      setChoose(newChoose);
      console.log(newChoose);
      console.log(e);
    },
    [choose],
  );

  const onConfirmUpdateProduct = useCallback(() => {
    const Lists: any = [];
    Lists.push({
      title: title,
      img: img,
      price: price,
      description: desc,
      category: category,
      choose: choose,
    });
    updateProduct(params, Lists).then(() => {
      window.location.reload();
    });
  }, [title, img, price, desc, category, choose]);

  const onDeleteClick = useCallback(
    (deloption: string) => {
      const newChoose = [];
      for (let i = 0; i < choose.length; i++) {
        if (choose[i] !== deloption) {
          newChoose.push(choose[i]);
        }
      }
      setChoose(newChoose);
      console.log(choose);
    },
    [option, choose],
  );

  const onAddClick = useCallback(() => {
    const newChoose = [...choose];
    newChoose.push(option);
    setChoose(newChoose);
    console.log(choose);
  }, [option, choose]);

  const shotptClick = useCallback(() => {
    console.log(title, price, categoryList[category], good);
    const shopt: ShoPT = {
      Product_Name: title,
      Product_Price: price,
      Product_Description: categoryList[category],
      Product_Benefits: good,
    };

    postGpt(shopt).then((res) => {
      console.log(res);
      setShopt(res);
    });
  }, [title, price, category, good]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='adProductinfo'>
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
              <input
                className='title'
                type='text'
                value={title}
                onChange={(e) => {
                  onChangeTitle(e);
                }}
              />
            </div>
            <div className='flex'>
              <div className='input'>
                <div>가격</div>
                <input
                  type='text'
                  value={price}
                  onChange={(e) => {
                    onChangePrice(e);
                  }}
                />
              </div>
              <div className='input'>
                <div>카테고리</div>
                <input
                  type='text'
                  value={categoryList[category]}
                  onChange={(e) => {
                    onChangeCategory(e);
                  }}
                />
              </div>
            </div>
            <div className='input'>
              <div>상세설명</div>
              <input
                className='title'
                value={desc}
                type='text'
                onChange={(e) => {
                  onChangeDesc(e);
                }}
              />
            </div>
          </div>
          <div className='Box'>
            <div className='chooseBox'>
              {choose.map((choose: any, index: number) => (
                <div key={index} className='chooseBox-box'>
                  <input
                    value={choose}
                    onChange={(e) => {
                      onChooseChange(e, index);
                    }}></input>
                  <button
                    onClick={() => {
                      onDeleteClick(choose);
                    }}>
                    삭제
                  </button>
                </div>
              ))}
            </div>
            <div className='chooseBox-divider'></div>
            <div className='chooseBox-add'>
              <input
                value={option}
                onChange={(e) => {
                  onChangeAdd(e);
                }}></input>
              <button
                onClick={() => {
                  onAddClick();
                }}>
                추가
              </button>
            </div>
          </div>
          <div className='Box'>
            <div className='shoptBox'>
              <div className='shoptBox-keyword'>
                키워드 입력{' '}
                <input
                  onChange={(e) => {
                    onChangeGood(e);
                  }}></input>
              </div>
              <button
                className='shopt'
                onClick={() => {
                  shotptClick();
                }}>
                캐치프레이즈 생성
              </button>
            </div>
          </div>
          <div>{shopt}</div>
          <button
            className='submit'
            onClick={() => {
              onConfirmUpdateProduct();
            }}>
            상품 정보 수정하기
          </button>
        </div>
      </div>
      <div className='adproductinfo-divider'></div>
    </div>
  );
};

export default AdminAdd;
