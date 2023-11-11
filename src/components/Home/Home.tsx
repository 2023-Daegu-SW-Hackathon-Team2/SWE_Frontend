import React from 'react';
import './styles/home.styles.css';
import images from 'src/assets/images';
import ItemboxContainer from '@components/Itembox/containers/ItemboxContainer';
type Props = {};

const Home = (props: Props) => {
  return (
    <div className='home'>
      <ItemboxContainer
        type={'small'}
        image={images.logo_orca_b}
        name={'린넨 오버핏 골지 맨투맨 블랙'}
        price={75000}
      />
    </div>
  );
};

export default Home;
