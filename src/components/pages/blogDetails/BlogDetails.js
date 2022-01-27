import { Avatar, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';

const BlogDetails = () => {
   const { id } = useParams();
   const [blog, setBlog] = useState({})
   const { name, date, time, expence, img, message, placeName, rating } = blog
   useEffect(() => {
      fetch(`https://travel-agency-server01.herokuapp.com/details/${id}`)
         .then(res => res.json())
         .then(data => setBlog(data[0]))
   }, [id]);
   return (
      <div style={{ marginTop: '70px' }} className='container'>
         <img style={{ borderRadius: '20px' }} className='blog-img' src={img} alt="" />
         <div className='mx-5'>
            <div className='blog-detail'>
               <h1>{placeName}</h1>
               <div className='d-flex align-items-center my-4'>
                  <Avatar alt="Remy Sharp" src={blog.userPic || "/static/images/avatar/2.jpg"} />
                  <div className='ms-3'>
                     <p className='lh-1 m-0 py-1'>{name}</p>
                     <p className='lh-1 m-0 py-1'><DateRangeIcon /> {date} -- <AccessTimeIcon /> {time}</p>
                  </div>
               </div>
               <Rating name="read-only" value={parseFloat(rating)} readOnly />
               <h5>{expence}</h5>
               <p>{message}</p>
            </div>
         </div>
      </div>
   );
};

export default BlogDetails;