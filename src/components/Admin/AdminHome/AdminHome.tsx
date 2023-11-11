import React from 'react';
import HomeContainer from '@components/Home/containers/HomeContainer';
import './styles/adminhome.styles.css';
type Props = {};

const AdminHome = (props: Props) => {
  return (
    <div className='adhome'>
      <div className='adhome-preview'>
        <HomeContainer view={'-admin'} />
      </div>
    </div>
  );
};

export default AdminHome;
