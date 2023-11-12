import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
import { GNBTableTypes } from '@typedef/types';
type Props = {
  tabTable: GNBTableTypes[];
  onTabClick: (path: string) => void;
  dropBoxList: GNBTableTypes[];
  dropBox: boolean;
  onDropBoxClick: () => void;
  logo: string;
};

const Gnb = ({
  tabTable,
  onTabClick,
  dropBox,
  dropBoxList,
  onDropBoxClick,
  logo,
}: Props) => {
  return (
    <div className='gnb'>
      <div className='gnb-logo'>
        <img
          src={logo}
          onClick={() => {
            onTabClick('/');
          }}
        />
      </div>
      <div className='gnb-nav'>
        <div className='gnb-nav-s1'>
          {tabTable.map((tab, index) => {
            if (index == 1) {
              return (
                <div
                  className='tab'
                  key={index}
                  onClick={() => {
                    onTabClick(tab.path);
                  }}>
                  <span>{tab.label}</span>
                </div>
              );
            } else if (index == 0) {
              return (
                <div
                  className='tab'
                  key={index}
                  onClick={() => {
                    onDropBoxClick();
                  }}>
                  <span>{tab.label}</span>
                  <img src={dropBox ? images.up_w : images.down_w} />
                  <div
                    className={dropBox ? 'tab-dropbox-active' : 'tab-dropbox'}>
                    {dropBoxList.map((dropbox, index) => (
                      <div
                        className='droptab'
                        key={index}
                        onClick={() => {
                          onTabClick(dropbox.path);
                        }}>
                        {dropbox.label}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className='gnb-nav-s2'>
          {tabTable.map((tab, index) => {
            if (index > 1) {
              return (
                <div
                  className='tab'
                  key={index}
                  onClick={() => {
                    onTabClick(tab.path);
                  }}>
                  <span>{tab.label}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Gnb;
