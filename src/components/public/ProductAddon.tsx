import React from 'react';
import ProductHeader from '@components/public/ProductHeader';

const ProductAddon: React.FC<{ title?:any, className?:any }>  = ({title, className}) => {
   return <div className={className}>
      { title && <ProductHeader title={title}/> }
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

export default ProductAddon;