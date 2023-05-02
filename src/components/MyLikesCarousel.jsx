import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import japanese from './images/japanese-culture.jpg';
import onepunch from './images/onepunch.png';
import blas from './images/blas.jpg';



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
          src={japanese}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cultura de Japón</h3>
          <p>Desde el año 2020 comencé a investigar y me dí cuenta de lo mucho que me gusta la cultura del país del sol naciente.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-carousel"
          src={onepunch}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Anime</h3>
          <p>Las series de anime son mi principal fuente de entretenimiento. <br /> Esto debido a sus historias tan únicas y emocionantes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-carousel"
          src={blas}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Videojuegos</h3>
          <p>
            Me gustan los videojuegos multijugador así como también los juegos indie.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
