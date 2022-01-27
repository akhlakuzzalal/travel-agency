import React from 'react';
import Articles from './Article/Articles';
import Blogs from './Blogs/Blogs';
import Slider from './Carousel/Slider';
import './home.css';

const Home = () => {
   return (
      <div>
         <Slider></Slider>
         <Blogs></Blogs>
         <Articles></Articles>
      </div>
   );
};

export default Home;