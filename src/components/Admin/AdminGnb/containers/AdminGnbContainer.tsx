import React, { useCallback, useState } from 'react';
import AdminGnb from '../AdminGnb';
import { useNavigate } from 'react-router-dom';
import { GNBTableTypes } from '@typedef/types';
type Props = { location: string };

const AdminGnbContainer = ({ location }: Props) => {
  const navigate = useNavigate();
  const tabTable: GNBTableTypes[] = [
    {
      label: 'GNB',
      path: '/admin/gnb',
    },
    {
      label: 'Home',
      path: '/admin/home',
    },
    {
      label: 'Products',
      path: '/admin/product/0',
    },
    {
      label: 'Add',
      path: '/admin/add',
    }
  ];
  const [selectedTab, setSelectedTab] = useState<string>('/admin');
  const onTabClicked = useCallback(
    (path: string) => {
      setSelectedTab(path);
      navigate(path);
      window.scrollTo(0, 0);
    },
    [selectedTab, location],
  );
  return location.includes('admin') ? (
    <AdminGnb
      tabTable={tabTable}
      onTabClicked={onTabClicked}
      location={location}
    />
  ) : (
    <></>
  );
};

export default AdminGnbContainer;
