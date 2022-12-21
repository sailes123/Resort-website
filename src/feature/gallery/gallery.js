import React from 'react';
import './gallery.css';
import image1 from './../../assets/gallery1.jpeg';
import image2 from './../../assets/gallery2.jpeg';
import image3 from './../../assets/gallery3.jpeg';
import image4 from './../../assets/gallery4.jpeg';
import image5 from './../../assets/gallery5.jpeg';
import image6 from './../../assets/gallery6.jpeg';

const Gallery = () => {
    const images = [
        {
          id: 1,
          url: image1,
          description: 'Image 1'
        },
        {
          id: 2,
          url: image2,
          description: 'Image 2'
        },
        {
          id: 3,
          url: image3,
          description: 'Image 3'
        },
        {
          id: 4,
          url: image4,
          description: 'Image 1'
        },
        {
          id: 5,
          url: image5,
          description: 'Image 2'
        },
        {
          id: 6,
          url: image6,
          description: 'Image 3'
        }
      ]
  return (
<div className="gallery">
    {images.map(image => (
      <div key={image.id} className="gallery-item">
        <img src={image.url} alt={image.description} />
      </div>
    ))}

  </div>
  )
}

export default Gallery