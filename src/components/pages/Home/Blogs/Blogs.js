import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Blog from './Blog/Blog';

const Blogs = () => {
   const [page, setPage] = useState(1);
   const [size, setSize] = useState(10);
   const [pageCount, setPageCount] = useState(1);
   const [blogs, setBlogs] = useState([]);
   useEffect(() => {
      fetch(`http://localhost:5000/data?page=${page}&&size=${size}`)
         .then(res => res.json())
         .then(data => {
            const pageNumber = Math.ceil(data.count / size);
            setPageCount(pageNumber)
            setBlogs(data.data)
         })
   }, [page, size]);

   const handleChange = (event, value) => {
      setPage(value);
   };
   return (
      <div className='container'>
         <h1 style={{ color: '#d08055' }}>Travelers experiences</h1>
         <div className="row pt-4">
            {
               blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
         </div>
         <div className="d-flex justify-content-center pt-5">
            <Stack spacing={2}>
               <Pagination count={pageCount} page={page} onChange={handleChange} />
            </Stack>
            <Dropdown className='size-btn'>
               <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Size
               </Dropdown.Toggle>

               <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSize(5)}>5</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSize(10)}>10</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSize(15)}>15</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
         </div>
      </div>
   );
};

export default Blogs;