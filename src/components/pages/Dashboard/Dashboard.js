import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hook/useAuth';

const DashBoard = () => {
   const { user } = useAuth()
   const [account, setAccount] = useState()

   useEffect(() => {
      fetch(`https://bike-website-server.herokuapp.com/users/${user.email}`)
         .then(res => res.json())
         .then(data => setAccount(data))
   }, [user?.email])

   return (
      <div id='res-dash' style={{ marginTop: '69px' }} className="container">
         <div id='dashboard' style={{ padding: '80px 0' }} className="row">
            <div id='dash-menu' className="col-md-3 col-2">
               <div className="left-menu text-start">
                  <ul className="deshboard-menu">
                     {account?.role === 'admin' && (
                        <span>
                           {" "}
                           <li>
                              <Link to="allblogs">
                                 <span className="dash-icon" title="Dashboard"></span>{" "}
                                 <span className="desh-text">All Blogs</span>
                              </Link>
                           </li>
                           <li>
                              <Link to="makeadmin">
                                 <span className="dash-icon" title="Dashboard"></span>{" "}
                                 <span className="desh-text">Make Admin</span>
                              </Link>
                           </li>
                           <li>
                              <Link to="writearticle">
                                 <span className="dash-icon" title="Dashboard"></span>{" "}
                                 <span className="desh-text">Write Article</span>
                              </Link>
                           </li>
                        </span>
                     )}
                  </ul>
               </div>
            </div>
            <div id='dash-item' className="col-md-9 col-10">
               <Outlet />
            </div>
         </div>
      </div >
   );
};

export default DashBoard;