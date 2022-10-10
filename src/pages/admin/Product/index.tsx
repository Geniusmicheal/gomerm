import { getRecordQuery } from "@utils/curdHandler";
import { useState } from "react";

const dataProduct:any = {};

const Product:React.FC  = () => {
   const [allProduct, setAllProduct] = useState(dataProduct);

   getRecordQuery('product').then(snapshot =>{
      snapshot.forEach(doc=>dataProduct[doc.id]=doc.data());
      setAllProduct(dataProduct)
   })

   return <div className="card">
      <div className="card-header">card-header</div>
      <div className="card-body overflow-x-auto !p-0">
         <table>
            <thead> <tr>
               <th></th>
               <th>Title</th>
               <th>Date</th>
               <th></th>
            </tr> </thead>
            <tbody>
               { Object.entries(allProduct).map(SingleProduct =>{
                  const { banner, title, timestamp }:any=  SingleProduct[1]
                  return(
                     <tr key={SingleProduct[0]}>
                        <td>
                           <img src={ banner } className="rounded-full h-[40px] m-auto" loading="lazy"/>
                        </td>
                        <td> {title }</td>
                        <td> { timestamp['seconds']}</td>
                        <td></td>
                     </tr>
                  )
               })}
            </tbody> 
         </table>
      </div>
   </div>
}
export default Product;
