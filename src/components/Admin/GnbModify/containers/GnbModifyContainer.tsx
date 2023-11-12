import React, { useCallback, useState } from 'react';
import GnbModify from '../GnbModify';
import { EFile } from '@typedef/types';
type Props = {};

const GnbModifyContainer = (props: Props) => {
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const uploadLogoHandler = useCallback(
    (event: EFile) => {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedLogo(file);
        // if (
        //   file.type ===
        //   ('application/png' || 'application/jpeg' || 'application/svg')
        // ) {
        //   console.log('이건 이미지');

        // } else {
        //   alert('올바른 이미지 파일을 선텍하세요.');
        // }
      }
    },
    [selectedLogo],
  );
  console.log(selectedLogo);
  return (
    <GnbModify
      selectedLogo={selectedLogo}
      uploadLogoHandler={uploadLogoHandler}
    />
  );
};

export default GnbModifyContainer;
