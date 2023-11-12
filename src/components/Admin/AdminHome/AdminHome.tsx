import React from 'react';
import HomeContainer from '@components/Home/containers/HomeContainer';
import './styles/adminhome.styles.css';
type Props = {
  handleFileChange: any;
  fileNames: any;
  onUploadClick: any;
  dataList: any;
  onChangeNew: any;
  onChangeBest: any;
  onConfirmNewBest: any;
  homeNewList: any;
  homeBestList: any;
};

const AdminHome = ({
  handleFileChange,
  fileNames,
  onUploadClick,
  dataList,
  onChangeNew,
  onChangeBest,
  onConfirmNewBest,
  homeNewList,
  homeBestList,
}: Props) => {
  return (
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
        <div className='adhome-tab-newbest'>
          <div className='newbox'>
            {homeNewList.map((homenew: any, index: number) => (
              <input
                value={homenew}
                onChange={(e) => {
                  onChangeNew(e, index);
                }}></input>
            ))}
          </div>
          <div className='bestbox'>
            {homeBestList.map((homebest: any, index: number) => (
              <input
                value={homebest}
                onChange={(e) => {
                  onChangeBest(e, index);
                }}></input>
            ))}
          </div>
          <button onClick={onConfirmNewBest}>업로드</button>
        </div>
        <div className='adhome-tab-table'>
          {dataList.map((data: any) => (
            <div className='tablebox'>
              <div className='tablebox-title'> {data.title}</div>
              <div className='tablebox-id'> {data.id}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='adhome-divider' />
      <HomeContainer view={'-admin'} />
    </div>
  );
};

export default AdminHome;
