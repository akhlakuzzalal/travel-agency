import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function EditArticle() {
   const navigate = useNavigate();
   const { id } = useParams();
   const [article, setArticle] = useState({});
   const { register, handleSubmit, reset } = useForm();
   const [load, setLoad] = useState(false);

   useEffect(() => {
      fetch(`http://localhost:5000/article/${id}`)
         .then(res => res.json())
         .then(data => setArticle(data))
   }, [])

   const onSubmit = data => {
      fetch(`http://localhost:5000/updatearticle/${id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(dta => {
            console.log(dta)
            setLoad(true);

         })

      navigate('/');
   };

   if (load) {
      setTimeout(() => {
         setLoad(false)
      }, 5000);
   }

   console.log(article)

   return (
      <>
         <h1>Edit Article</h1>
         <form style={{ position: 'relative' }} className="article-from" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue={article.image} {...register("image")} type='url' placeholder="image link" required />
            <input defaultValue={article.title} {...register("title")} type='text' placeholder="Title" required />
            <input defaultValue={article.info} {...register("info")} type='text' placeholder="Traveler info" required />
            <textarea defaultValue={article.field} {...register("field")} cols="30" rows="10"></textarea>
            <input defaultValue={article.catagory} {...register("catagory")} type='text' placeholder="Catagory" required />
            <input defaultValue={article.cost} {...register("cost")} type='number' placeholder="Cost" required />
            <input defaultValue={article.location} {...register("location")} type='text' placeholder="Location" required />

            <input id="btn-post" value={'Update'} type="submit" />
            {
               load && <Alert style={{ position: 'absolute', right: '25%', bottom: '-100px' }} className='w-50' severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is a success alert — <strong>check it out!</strong>
               </Alert>
            }
         </form>
      </>
   );
}