import React from 'react';
import ProductHeader from '@components/public/ProductHeader';

const BestSellingBook: React.FC  = () => {
   return <div className="pt-1 bestSellingBook">
      <section>
         <ProductHeader title='New Arrivals'/>
         <div className="flex  flex-wrap lg:flex-nowrap">
            <div>
               <h2>A God Who Hates Women</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
            </div>
            <img src="https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/07/banner1-3-1.jpg"/>
            
         </div>
      </section>

   </div>
}
export default BestSellingBook;