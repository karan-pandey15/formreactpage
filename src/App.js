import React, { useState } from "react";
import "./App.css"

const App = ()=>{
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    
    const registerDetails = async (e)=>{
        e.preventDefault();

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,password
            })
        })
        const data = await res.json();
    
    
        if(res.status === 501 || !data){
           window.alert("Invalid Credentials...");
        }
          else{
              window.alert("signin SuccessFull.....")
          }
    }
    return(
        <>
           <div className="bgcolor" >
              <div className="innerContainer" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.nJBw_yrOO8-fJFhzrPNytQHaHa&pid=Api&P=0" alt="img" />
              </div>  

       <div className="formContainer" >
       <form className='formstyle' >
          <header>
               <span className='txt1' >ALREADY MEMBERS</span>
               <span className='txt2' >Need Help ?</span>
          </header>

          <form className='inputContainer' action="/register" method="POST">
          <input type="text"  name="name" id="name" className='inputone' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
          <br />
          <input type="password" name="password" id="password" className='inputtwo' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
          </form>

          <button className='btn' onClick={registerDetails} >SIGN IN</button>
       </form> 
          
           <div className="formdiv" >
           <li className="formli" >Don't have an account yet ?</li>
           <li className="formli2" >Create an account</li>
           </div>
       </div>
           </div>
        </>
    )
}

export default App;