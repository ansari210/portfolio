// ThumbnailGenerator.js
import React from 'react';
import { ImgPro } from 'react-imgpro';

const ThumbnailGenerator = ({ originalImage, thumbnailSize, altText }) => {
  return (
    <ImgPro
      width={thumbnailSize}
      height={thumbnailSize}
      imgSrc={originalImage}
      alt={altText}
      filters={[]}
    />
  );
};

export default ThumbnailGenerator;
