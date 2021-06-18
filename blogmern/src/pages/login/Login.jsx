import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
import { useRef, useContext} from 'react'
import {Context} from "../../context/Context"
import axios from "axios"

export default function Login() {


  const userRef=useRef()
  const passwordRef=useRef()
  const {dispatch , isFetching} = useContext(Context)


   const handleSubmit = async (e) =>{
     e.preventDefault()
     dispatch({type:"LOGIN_START"})
     try{

       const res = await axios.post("http://localhost:5000/api/auth/login", {
         username: userRef.current.value,
         password: passwordRef.current.value,

       })
       dispatch({type: "LOGIN_SUCCESS", payload:res.data})

      

     }catch(err){

      dispatch({type:"LOGIN_FAILURE" })


     }

   }

    
    console.log(isFetching)
    return (
        <div className="login">

          <span className="loginTitle">Login</span>

             <form  className="loginForm" onSubmit={handleSubmit}>

               <label>Username</label>
               <input className="loginInput" type="text" placeholder="Username" ref={userRef} />
              
              
               <label>Password</label>
               <input className="loginInput" type="password" placeholder="Password" ref={passwordRef}/>
               

               <button className="loginButton"type="submit" disabled={isFetching}>Login</button>
             </form>

             <button className="loginRegisterButton">
                
                <Link className="link" to="/register">Register</Link>

             </button>
              
        </div>
    )
}
