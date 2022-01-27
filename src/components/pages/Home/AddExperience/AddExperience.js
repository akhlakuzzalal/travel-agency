import { Alert, AlertTitle, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from '../../../../hook/useAuth'

export default function App() {
   const { register, handleSubmit, reset } = useForm();
   const { user } = useAuth();

   const [load, setLoad] = useState(false);
   const [rate, setRate] = useState(0);
   const [profile, setProfile] = useState({});


   const url = `https://bike-website-server.herokuapp.com/users/${user?.email}`
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setProfile(data)
         })
   }, [url]);

   const onSubmit = data => {
      fetch(`https://travel-agency-server01.herokuapp.com/blogpost`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({ ...data, rating: rate, name: profile?.name, userPic: profile?.img })
      })
         .then(res => res.json())
         .then(dta => {
            console.log(dta)
            if (dta.insertedId) {
               reset();
               setLoad(true);
            }
         })
   };

   if (load) {
      setTimeout(() => {
         setLoad(false)
      }, 5000);
   }


   return (
      <div style={{ marginTop: '65px' }} className="container">
         <h1 className="py-2" style={{ color: '#d08055' }}>Write Blog</h1>
         <form className="expreience-from" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-danger">Please isert all filed accurately. Otherwise your blog wont approved</p>
            <input defaultValue={profile?.img} style={{ display: 'none' }} {...register("userPic")} />
            <input {...register("placeName")} placeholder="Place Name" required />
            <input {...register("date")} placeholder="Date" required />
            <input {...register("time")} placeholder="time" required />
            <input {...register("expence")} placeholder="expence" />
            <input {...register("location")} placeholder="Location" />
            <input {...register("img")} placeholder="image" required />
            <div className="rating">
               <Rating
                  name="simple-controlled"
                  value={rate}
                  onChange={(event, newValue) => {
                     setRate(newValue);
                  }} />
            </div>
            <input style={{ display: 'none' }} {...register("stutus")} />
            <textarea {...register("message")} placeholder="message" />

            <input id="experience-btn" type="submit" />
            {
               load && <Alert style={{ position: 'fixed', right: '25%', top: '10%' }} className='w-50' severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is a success alert — <strong>check it out!</strong>
               </Alert>
            }
         </form>
      </div>
   );
}