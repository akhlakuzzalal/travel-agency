import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
   const { name, img, _id, date, message, placeName } = blog;
   return (
      <div className='col-lg-6 col-12'>
         <div id='res-blog' className='d-flex p-4 my-2 blog-design hvr-sweep-to-bottom'>
            <img className='border rounded' width={'300px'} height={'200px'} src={img} alt="" />
            <div className='text-start ms-4'>
               <h3>{placeName}</h3>
               <p><PersonIcon /> {name} <DateRangeIcon /> {date}</p>
               <p>{message.slice(0, 30)}.....</p>
               <Link to={`/details/${_id}`} className='btn-more btn btn-success' >Read more</Link>
            </div>
         </div>
      </div>
   );
};

export default Blog;