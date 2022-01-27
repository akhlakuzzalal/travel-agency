import React from 'react';
import './footer.css'
import logoImg from '../../../img/logo.png'

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-12 px-5">
                  <img width={'120px'} height={'90px'} src={logoImg} alt="" />
                  <p className='text-light text-start pt-1'>This is the best website of travel agency blog.. You can post here your opinion</p>
               </div>
               <div className="col-lg-3 col-12 px-5">
                  <h4 className='text-start' style={{ color: '#884f62' }}>CONTACT INFO</h4>
                  <p className='text-light text-start pt-1'>732/21 Second Street, Manchester, King Street, Kingston United Kingdom</p>
                  <p className='text-light text-start pt-1'>+880876387632</p>
                  <p className='text-light text-start pt-1'>uvw@xyz.com</p>
                  <p className='text-light text-start pt-1'>travel-blogs.com</p>
               </div>
               <div className="col-lg-3 col-12 px-5">
                  <h4 className='text-start' style={{ color: '#884f62' }}>RECENT POSTS</h4>
                  <p className='text-light text-start pt-1'>Standard Blog Post With Image</p>
                  <p className='text-light text-start pt-1'>Amazing Fullwidth Post</p>
                  <p className='text-light text-start pt-1'>Link Post Quote Post</p>
                  <p className='text-light text-start pt-1'>Sidebar Post With Slideshow</p>
               </div>
               <div className="col-lg-3 col-12 px-5">
                  <br />
                  <h4 className='text-start' style={{ color: '#884f62' }}>IMPORTANT LINKS</h4>
                  <p className='text-light text-start pt-1'>Google</p>
                  <p className='text-light text-start pt-1'>Education board</p>
                  <p className='text-light text-start pt-1'>10 munite School</p>
                  <p className='text-light text-start pt-1'>Outdoors on bike</p>
               </div>
            </div>
            <p className='pt-3 fw-bold' style={{ color: '#cccccc' }}>All right recived @travel agency</p>
         </div>
      </div>
   );
};

export default Footer;