import React from 'react';
import AdminGnb from '../AdminGnb';
type Props = { location: string };

const AdminGnbContainer = ({ location }: Props) => {
  return location.includes('admin') ? <AdminGnb /> : <></>;
};

export default AdminGnbContainer;
