import { GNBTableTypes } from '@typedef/types';
import React from 'react';
import './styles/admingnb.styles.css';

type Props = {
  tabTable: GNBTableTypes[];
  onTabClicked: (path: string) => void;
  location: string;
};

const AdminGnb = ({ tabTable, onTabClicked, location }: Props) => {
  return (
    <div className='adgnb'>
      <div className='adgnb-tabs'>
        {tabTable.map((tab, idx) => {
          return (
            <div
              key={idx}
              className='adgnb-tabs-item'
              onClick={() => {
                onTabClicked(tab.path);
              }}
              style={{
                backgroundColor:
                  location === tab.path ||
                  (tab.path !== '/admin' && location.includes(tab.path))
                    ? '#3c3c3c'
                    : '#000000',
              }}>
              <div className='label'>{tab.label}</div>
            </div>
          );
        })}
        <button
          className='logout'
          onClick={() => {
            //navigate('/');
          }}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default AdminGnb;
