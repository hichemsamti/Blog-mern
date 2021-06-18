import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
import { useRef, useContext} from 'react'
import {Context} from "../../context/Context"

export default function Login() {


  const userRef=useRef()
  const passwordRef=useRef()
  const {dispatch , isFetching} = useContext(Context)


   const handleSubmit = (e) =>{
     e.preventDefault()

   }


    return (
        <div className="login">

          <span className="loginTitle">Login</span>

             <form  className="loginForm" onSubmit={handleSubmit}>

               <label>Username</label>
               <input className="loginInput" type="text" placeholder="Username" ref={userRef} />
              
              
               <label>Password</label>
               <input className="loginInput" type="password" placeholder="Password" ref={passwordRef}/>
               

               <button className="loginButton"type="submit">Login</button>
             </form>

             <button className="loginRegisterButton">
                
                <Link className="link" to="/register">Register</Link>

             </button>
              
        </div>
    )
}
