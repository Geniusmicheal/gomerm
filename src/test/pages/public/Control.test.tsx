import { describe,expect,it, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Control from "@pages/public/Control";



describe('Control',()=>{
   it('on render,control Debugging',()=> {
      render(<Control/>);
      screen.debug();
   });
   // it('on render,control flow', () =>{
   //    render(<Control/>);
   //    const userForm = screen.getByRole('form');
   //    fireEvent.submit(userForm,)
   //    const userInput = screen.getByPlaceholderText(/Email Address/i);
   //    const userPassword = screen.getByPlaceholderText(/password/i);
   //    userPassword
   // })
})

// test(buttonDisable,{
//    // render()
// })


      //  expect(screen.getByRole('heading',{
      //     level:1,
      //  })).toHaveTextContent('hello'); 