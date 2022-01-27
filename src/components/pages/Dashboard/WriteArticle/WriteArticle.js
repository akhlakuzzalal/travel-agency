import { Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
   const { register, handleSubmit, reset } = useForm();
   const [load, setLoad] = useState(false);
   const onSubmit = data => {
      fetch(`http://localhost:5000/articlepost`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
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
      <div >
         <div>
            <h1>Write Article</h1>
            <form style={{ position: 'relative' }} className="article-from" onSubmit={handleSubmit(onSubmit)}>
               {/* register your input into the hook by invoking the "register" function */}
               <input {...register("image")} type='url' placeholder="image link" required />
               <input {...register("title")} type='text' placeholder="Title" required />
               <input {...register("info")} type='text' placeholder="Traveler info" required />
               <textarea {...register("field")} cols="30" rows="10"></textarea>
               <input {...register("catagory")} type='text' placeholder="Catagory" required />
               <input {...register("cost")} type='number' placeholder="Cost" required />
               <input {...register("location")} type='text' placeholder="Location" required />

               <input disabled={load ? true : false} id="btn-post" value={'Post'} type="submit" />
               {
                  load && <Alert style={{ position: 'absolute', right: '25%', bottom: '-100px' }} className='w-50' severity="success">
                     <AlertTitle>Success</AlertTitle>
                     This is a success alert — <strong>check it out!</strong>
                  </Alert>
               }
            </form>
         </div>
      </div>
   );
}