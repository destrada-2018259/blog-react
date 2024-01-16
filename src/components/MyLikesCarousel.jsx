import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dev from './images/dev.jpg';
import slam from './images/zlam.jpg';
import japan from './images/japan.jpg'



export const MyLikesCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <img
          className="d-block img-carousel"
          src={dev}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tecnología y Desarrollo de software</h3>
          <p>Siempre me he interesado por el funcionamiento de los sistemas de uso cotidiano, <br/> mi curiosidad me hizo tomar la decisión de tomar el camino del desarrollo de software.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-carousel"
          src={japan}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cultura Japonesa</h3>
          <p>Los valores y principios que aplican los japoneses se me hacen muy interesantes, <br /> Así como sus tradiciones y lugares turísticos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-carousel"
          src={slam}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Manga y Deporte</h3>
          <p>
            Mi serie favorita de manga es Slam Dunk, serie que combina dos de mis pasiones, el manga y el Basketball. <br/>Esta historia no solo sirve como entretenimiento sino también como inspiración y motivación.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
