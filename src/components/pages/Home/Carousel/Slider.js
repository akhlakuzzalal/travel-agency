import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {
   return (
      <Carousel fade>
         <Carousel.Item style={{ height: '100vh' }}>
            <img
               className="d-block w-100 h-100"
               src="https://media.cntraveler.com/photos/5edfc029b16364ea435ca862/4:3/w_2664,h_1998,c_limit/Roadtrip-2020-GettyImages-1151192650.jpg"
               alt="First slide"
            />
            <Carousel.Caption>
               <h1 className='caro-name'>Desert</h1>
               <p className='text-start'>A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to the processes of denudation.</p>
               <Link to='writeblog' className='start-write text-decoration-none text-dark'>Start Writing</Link>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{ height: '100vh' }}>
            <img
               className="d-block w-100 h-100"
               src="https://www.sampleposts.com/wp-content/uploads/2020/10/travel-quotes.jpg"
               alt="Second slide"
            />

            <Carousel.Caption>
               <h1 className='caro-name'>Beauty Of Nature</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               <Link to='writeblog' className='start-write text-decoration-none text-dark'>Start Writing</Link>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{ height: '100vh' }}>
            <img
               className="d-block w-100 h-100"
               src="https://i.pinimg.com/originals/8a/b5/b8/8ab5b868aea3cafe717931972a461ce4.jpg"
               alt="Third slide"
            />

            <Carousel.Caption>
               <h1 className='caro-name'>Forest</h1>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               <Link to='writeblog' className='start-write text-decoration-none text-dark'>Start Writing</Link>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
};

export default Slider;