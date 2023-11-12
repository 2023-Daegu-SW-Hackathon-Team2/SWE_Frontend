import React from 'react';
import images from 'src/assets/images';
import './styles/gnbmodify.styles.css';
type Props = {
  selectedLogo: any;
  uploadLogoHandler: any;
  onUploadClick: any;
  categories: any;
  onChangeCategory: any;
  onUpdateClick: any;
  onAddChange: any;
  onAddClick: any;
  onDeleteClick: any;
  newCategory: any;
};

const GnbModify = ({
  selectedLogo,
  uploadLogoHandler,
  onUploadClick,
  categories,
  onChangeCategory,
  onUpdateClick,
  onAddChange,
  onAddClick,
  onDeleteClick,
  newCategory,
}: Props) => {
  return (
    <div className='gnbmod'>
      <div className='gnbmod-logo'>
        <label htmlFor='mainInput'>
          <img src={images.plus_button} alt='Upload' />
          <div className='text'>User Logo Image</div>
          {selectedLogo ? <p>{selectedLogo.name}</p> : ''}
          <input
            type='file'
            id='mainInput'
            onChange={uploadLogoHandler}
            style={{ display: 'none' }}
          />
        </label>
        <button onClick={onUploadClick}>업로드</button>
      </div>
      <div className='gnbmod-tab'>
        {categories.map((category: any, index: number) => (
          <div className='gnbmod-tab-box'>
            <input
              value={category.category_name}
              onChange={(e) => {
                onChangeCategory(e, index);
              }}></input>
            <button
              onClick={() => {
                onUpdateClick(index);
              }}>
              수정
            </button>
            <button
              onClick={() => {
                onDeleteClick(category.id);
              }}>
              삭제
            </button>
          </div>
        ))}
      </div>
      <div className='gnbmod-divider'></div>
      <div className='gnbmod-add'>
        <input
          value={newCategory}
          onChange={(e) => {
            onAddChange(e);
          }}></input>
        <button
          onClick={() => {
            onAddClick(newCategory);
          }}>
          추가
        </button>
      </div>
    </div>
  );
};

export default GnbModify;
