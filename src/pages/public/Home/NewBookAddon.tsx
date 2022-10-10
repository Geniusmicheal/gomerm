import React from 'react';
import ProductHeader from '@components/public/ProductHeader';

const NewBookAddon: React.FC  = () => {
   return <div className="pt-16 newBook">
      <ProductHeader title='New Arrivals'/>
      <div className="bookAddon">
         <div className="card">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/4cbb688f39aaba2e1ff9948b16f69c67-e1510348436417.jpg?auto=format&q=60&fit=max&w=930"/>
         </div>

         <div className="card">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/4cbb688f39aaba2e1ff9948b16f69c67-e1510348436417.jpg?auto=format&q=60&fit=max&w=930"/>
         </div>

         <div className="card">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/4cbb688f39aaba2e1ff9948b16f69c67-e1510348436417.jpg?auto=format&q=60&fit=max&w=930"/>
         </div>

         <div className="card">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/4cbb688f39aaba2e1ff9948b16f69c67-e1510348436417.jpg?auto=format&q=60&fit=max&w=930"/>
         </div>

         <div className="card">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/4cbb688f39aaba2e1ff9948b16f69c67-e1510348436417.jpg?auto=format&q=60&fit=max&w=930"/>
         </div>
      </div>
   </div>
}

export default NewBookAddon;



// :hover img{ transform: scale(1.2); }
//          img{ transition: all 2000ms cubic-bezier(.19,1,.22,1) 0ms; }




