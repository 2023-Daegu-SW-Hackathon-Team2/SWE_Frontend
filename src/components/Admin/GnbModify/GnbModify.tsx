import React from 'react';
import images from 'src/assets/images';
import './styles/gnbmodify.styles.css';
type Props = {
  selectedLogo: any;
  uploadLogoHandler: any;
};

const GnbModify = ({ selectedLogo, uploadLogoHandler }: Props) => {
  return (
    <div className='gnbmod'>
      <div className='gnbmod-logo'>
        <label htmlFor='mainInput'>
          <img src={images.plus_button} alt='Upload' />
          <div className='text'>User Logo Image</div>
          {selectedLogo ? <p>{selectedLogo.name}</p> : ''}
          <input
            type='file'
            id='mainInput'
            onChange={uploadLogoHandler}
            style={{ display: 'none' }}
          />
        </label>
      </div>
      <div className='gnbmod-tab'></div>
    </div>
  );
};

export default GnbModify;
