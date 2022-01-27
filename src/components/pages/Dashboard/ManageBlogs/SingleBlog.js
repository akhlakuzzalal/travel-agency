import { CircularProgress } from '@mui/material';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBlog = ({ blog, setLoad, load }) => {
   const { img, _id, message, placeName } = blog;
   const approveBlog = (stutus, id) => {
      setLoad(true)
      fetch(`http://localhost:5000/blogs/${id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({ stutus: stutus })
      })
         .then(res => res.json())
         .then(data => {
            setLoad(false);
         })
   }

   const deleteBlog = (id) => {
      setLoad(true)
      fetch(`http://localhost:5000/deleteblog/${id}`, {
         method: 'DELETE'
      })
         .then(res => res.json())
         .then(data => {
            setLoad(false);
         })
   }
   return (
      <div className='col-12'>
         <div id='res-manage' className='d-flex justify-content-between align-items-center pe-3 py-2 ps-4 my-2 blog-design'>
            <div id='blog-img' className='d-flex'>
               <img className='border rounded' width={'180px'} height={'120px'} src={img} alt="" />
               <div className='text-start ms-4'>
                  <h3>{placeName}</h3>
                  <p>{message.slice(0, 30)}.....</p>
                  <Link to={`/details/${_id}`} className='btn-more btn btn-success' >Read more</Link>
               </div>
            </div>
            <p>{blog?.stutus}</p>
            <Dropdown className='size-btn'>
               <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {
                     load ? <><CircularProgress color="inherit" /></> : <>Action</>
                  }
               </Dropdown.Toggle>

               <Dropdown.Menu>
                  <Dropdown.Item onClick={() => approveBlog('Approved', _id)}>Approved</Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteBlog(_id)}>Delete</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
         </div>
      </div>
   );
};

export default SingleBlog;