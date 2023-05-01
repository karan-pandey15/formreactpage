import React from 'react'

export default function Form() {
  return (
    <>
       <form className='formstyle' >
          <header>
               <span className='txt1' >ALREADY MEMBERS</span>
               <span className='txt2' >Need Help ?</span>
          </header>

          <form className='inputContainer' >
          <input type="text"  name="" id="" className='inputone' placeholder='Enter your name' />
          <br />
          <input type="text" name="" id="" className='inputtwo' placeholder='Enter your password' />
          </form>

          <button className='btn' >SIGN IN</button>
       </form> 
       
    </>
  )
}
