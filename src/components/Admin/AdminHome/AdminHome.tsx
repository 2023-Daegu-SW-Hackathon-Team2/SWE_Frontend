import React from 'react';
import HomeContainer from '@components/Home/containers/HomeContainer';
import './styles/adminhome.styles.css';
type Props = {};

const AdminHome = (props: Props) => {
  return (
    <div className='adhome'>
      <HomeContainer view={'-admin'} />
    </div>
  );
};

export default AdminHome;
