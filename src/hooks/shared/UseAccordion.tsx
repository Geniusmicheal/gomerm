import { useRef, useState, useEffect } from "react";
// not in use yet
const UseAccordion = () => {
   const _ref = useRef();

   useEffect(() => {
      const onButtonClick = (event:any) => {
         _ref.current
      }
   }, []);
   return [_ref ];
}
export default UseAccordion

