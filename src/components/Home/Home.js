import React from 'react';
import { Carousel } from 'react-bootstrap';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Destinations from '../Destinations/Destinations';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Travel & Adventures</h2>
      <h4>Where Would You Like To Go?</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_960_720.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2>Travel & Adventures</h2>
      <h4>Where Would You Like To Go?</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2>Travel & Adventures</h2>
      <h4>Where Would You Like To Go?</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel><br/>

<Destinations></Destinations>
<br/>
<About></About>
<br/><br/>
<Contact></Contact>

<Footer></Footer>
        </div>
    );
};

export default Home;