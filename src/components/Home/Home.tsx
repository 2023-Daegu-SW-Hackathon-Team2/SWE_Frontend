import React from 'react';
import Carousel from './components/BannerCarousel';
import './styles/home.styles.css'

type Props = {};

const Home = (props: Props) => {
	const images = [
		"https://picsum.photos/1200/600?random=1",
		"https://picsum.photos/1200/600?random=2",
		"https://picsum.photos/1200/600?random=3"
	  ];
	  
	return <div className='home'>
	  <Carousel images={images} />
	</div>;
};

export default Home;
