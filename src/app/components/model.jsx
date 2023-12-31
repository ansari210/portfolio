// components/ImageGallery.js
import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageGallery = ({ images }) => {
  const imageItems = images?.map((image) => ({
    original: image.image,
    thumbnail: image.image,
    thumbnailWidth: 100,
    thumbnailHeight: 100, 
    description: image.description, // Add a description if needed
  }));

  return <Gallery items={imageItems} />;
};

export default ImageGallery;
