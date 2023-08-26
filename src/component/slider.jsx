import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css'; 
// import ExampleCarouselImage from './ExampleCarouselImage.png';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src="https://images.pexels.com/photos/2406395/pexels-photo-2406395.jpeg?cs=srgb&dl=pexels-avery-nielsenwebb-2406395.jpg&fm=jpg" alt="First slide" className='carousel-image'/>
        <Carousel.Caption>
          <h3>Graceful Cascade of Nature: The Waterfall</h3>
          <p>A waterfall, a masterpiece of nature's craftsmanship, is a sight that captures the heart and soul. As water descends from heights unknown, it dances with grace and power, sculpting the earth's rugged contours. The symphony of its cascading waters is a soothing melody that resonates with the soul, offering a moment of tranquility in a busy world. The delicate mist that accompanies its plunge refreshes the air, while the verdant surroundings provide a canvas of lush beauty. A waterfall is a reminder of nature's artistry, where time stands still, and we are invited to witness its eternal dance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1rUmBqEV7NMu81NocdNWq5njNtPq-tVHog&usqp=CAU" alt="First slide" className='carousel-image' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg" alt="First slide" className='carousel-image'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default ControlledCarousel;