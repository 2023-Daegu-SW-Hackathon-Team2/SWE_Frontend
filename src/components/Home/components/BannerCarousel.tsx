import React, { useState } from 'react';
import image from 'src/assets/images';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // 이전 이미지로 넘기는 함수
  const goPrev = () => {
    const index = current - 1;
    if(index >= 0)
        setCurrent(index);
    };

  // 다음 이미지로 넘기는 함수
  const goNext = () => {
    const index = current + 1;
    if(index !== images.length)
        setCurrent(index);
    };

  const style = {
    transform: `translateX(-${current}00%)`,
    transition: 'transform 0.3s' // 부드러운 전환 효과
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
  <div className="home-banner">
    <div className="banner-layout">
        <img className='arrow' src={image.Larrow} onClick={goPrev}></img>
        <div className='frame'>
            <div className='img-layout' style={style}>
                {images.map((image, index) => (
                <div className='img-box' key={index}>
                    <img key={index} src={image} className={index === current ? 'image-active' : 'image'}/>
                </div>
                ))}
            </div>
        </div>
        <img className='arrow' src={image.Rarrow} onClick={goNext}></img>
    </div>
  </div>
  );
};

export default Carousel;
