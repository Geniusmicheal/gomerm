import '@css/home.css';
import React from 'react'
import Silder from '@pages/public/Home/Silder';
import AddonBox from '@pages/public/Home/AddonBox';
import NewBookAddon from '@pages/public/Home/NewBookAddon';
import ProductAddon from '@components/public/ProductAddon';
import BestSellingBook from '@pages/public/Home/BestSellingBook';

const Home:React.FC  = () => {

   return <div className="home w-full">
      <Silder/>
      <section>
         <AddonBox/>
         <NewBookAddon/>
      </section>
      <BestSellingBook/>

      <section>
         <ProductAddon className="pt-16" title="New Books"/>
      </section>
      
   </div>
}


export default Home;