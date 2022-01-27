import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Dropdown } from 'react-bootstrap';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';

const Article = ({ article, load, setLoad }) => {
   const { title, image, info, field, _id, catagory, cost, location } = article;
   const [profile, setProfile] = useState({});
   const navigate = useNavigate();
   const { user } = useAuth();

   useEffect(() => {
      fetch(`https://bike-website-server.herokuapp.com/users/${user?.email}`)
         .then(res => res.json())
         .then(data => setProfile(data))
   }, [user])

   const deleteArticle = (id) => {
      setLoad(true)
      fetch(`http://localhost:5000/deletearticle/${id}`, {
         method: 'DELETE'
      })
         .then(res => res.json())
         .then(data => console.log(data))
   }

   return (
      <div className='col-12'>
         <div className='p-4 my-2'>
            <img className='border rounded' width={'100%'} height={'400vh'} src={image} alt="" />
            <div className='text-start ms-4 pt-4 article-d'>
               <h6 className='catagory mt-4'>{catagory}</h6>
               <div className='d-flex justify-content-between'>
                  <div>
                     <h3 className='mt-3'>{title}</h3>
                     <p><LocationOnIcon /> {location}</p>
                     <p><InfoIcon /> {info}</p>
                     <p><MonetizationOnIcon /> {cost}</p>
                  </div>
                  {
                     profile?.role === 'admin' && <Dropdown className='size-btn'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                           <LinearScaleIcon />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item onClick={() => navigate(`dashboard/editarticle/${_id}`)}>Edit</Dropdown.Item>
                           <Dropdown.Item onClick={() => deleteArticle(_id)} >Delete</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  }
               </div>
               <p>{field}</p>
            </div>
         </div>
      </div>
   );
};

export default Article;