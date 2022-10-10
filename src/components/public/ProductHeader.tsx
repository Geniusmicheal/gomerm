import React from 'react';
import '@css/productHeader.css'

const ProductHeader : React.FC<{ title:any, style?:any }>  = ({title, style}) => {
   return <div className="productHeader">
      <h3>{title}</h3>
   </div>
}

export default ProductHeader;

