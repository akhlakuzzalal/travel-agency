import React, { useEffect, useState } from 'react';
import Article from './Article';

const Articles = () => {
   const [load, setLoad] = useState(false);
   const [articles, setArticle] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/articles')
         .then(res => res.json())
         .then(data => {
            setArticle(data)
            setLoad(false)
         })
   }, [load]);

   return (
      <div className='container'>
         <h1 style={{ color: '#d08055' }}>Blog Article</h1>
         <p>{load && 'please wait'}</p>
         <div className="row pt-4">
            {
               articles.map(article => <Article load={load} setLoad={setLoad} key={article._id} article={article}></Article>)
            }
         </div>
      </div>
   );
};

export default Articles;