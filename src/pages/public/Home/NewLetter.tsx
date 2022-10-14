import React from 'react';

const NewLetter:React.FC  = () => {
   return <div className="newLetter">
      <section className="flex">
         <div className="flex" m-auto>
            <h3>Subscribe our Newsletter</h3>
            <span>Get <b className="text-white">25 persent Off</b> first purchase!</span>
         </div>
         <form action="" method="post" className="flex">
            <input type="text" placeholder="Your email address"/>
            <input type="submit" value="Subscribe"/>
         </form>
      </section>
   </div>
}

export default NewLetter;