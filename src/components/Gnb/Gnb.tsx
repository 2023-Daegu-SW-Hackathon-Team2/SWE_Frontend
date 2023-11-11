import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
import { GNBTableTypes } from '@typedef/types';
type Props = {
  tabTable: GNBTableTypes[];
  onTabClick: (path: string) => void;
};

const Gnb = ({ tabTable, onTabClick }: Props) => {
  return (
    <div className='gnb'>
      <div className='gnb-logo'>
        <img src={images.logo_b} />
      </div>
      <div className='gnb-nav'>
        <div className='gnb-nav-s1'>
          {tabTable.map((tab, index) => {
            if (index < 2) {
              return (
                <div
                  className='tab'
                  key={index}
                  onClick={() => {
                    onTabClick(tab.path);
                  }}>
                  {tab.label}
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
                  {tab.label}
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
