import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css';

const handleDragStart = (e) => e.preventDefault();


const Gallery = (props) => {
    
let items = []
for (const value of props.images) {
    items.push(<img src={value} onDragStart={handleDragStart} height='200px' width='200px'/>)
  }
  return (
    <AliceCarousel mouseTracking items={items} disableButtonsControls={true}/>
  );
}

export default Gallery;