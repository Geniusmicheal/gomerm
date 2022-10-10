import React from 'react'

const indicatorBtn = (event:any)=>{
   const targetSvg = event.target.closest('svg');
   const silder = event.target.closest('.silder-indicators').nextElementSibling;
   if(!targetSvg) return;
   let silderScrollState = silder.scrollLeft;
   console.log(silderScrollState)
   silderScrollState = (targetSvg['nextSibling'] ? silderScrollState - silder['clientWidth'] : silderScrollState + silder['clientWidth']);
   silder.scrollTo({left: silderScrollState , behavior: 'smooth' })
   console.log(silder, silderScrollState, screen.width, screen.availWidth, screen.pixelDepth );
};

const Silder:React.FC  = () => {

   return <div className="silder-container relative">
      <div className="silder-indicators" onClick={indicatorBtn}>
         <svg fill="none" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" > 
            <circle cx="17" cy="17" r="16.5" stroke="#fff"/>
            <path d="m27.8184 17.0011-17.7728 10.8169 6.1818-10.8169-6.1818-10.81946z" fill="#fff"/>
         </svg>
         <svg fill="none" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="16.5" stroke="#fff"/>
            <path d="m27.8184 17.0011-17.7728 10.8169 6.1818-10.8169-6.1818-10.81946z" fill="#fff"/>
         </svg>
      </div>
      <div className="silder">
         <img src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/slider-image-7.jpg" alt=""  loading="lazy"/>
         <img src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/slider-image-6.jpg" alt=""  loading="lazy"/>
         <img src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/slider-image-7.jpg" alt=""  loading="lazy"/>

      </div>
   </div>;
}

export default Silder;