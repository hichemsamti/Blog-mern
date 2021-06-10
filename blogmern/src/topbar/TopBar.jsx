import React from 'react'
import "./topbar.css"
import {Link} from "react-router-dom"

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft"><i class="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
              
              <ul className="topList">
                 
                 <li className="topListItem">
                     <Link className="link" to="/" >HOME</Link>  </li>
                 <li className="topListItem">
                     <Link className="link" to="/"> ABOUT </Link> </li>
                 <li className="topListItem">
                     <Link className="link" to="/"> CONTACT </Link> </li>
                 <li className="topListItem">
                     <Link className="link" to="/write"> WRITE</Link> </li>
                 <li className="topListItem">
                     {user && "LOGOUT"}
                    </li>

              </ul>




            </div>
            <div className="topRight">

                {
                    
                    user ? ( <img className="topImg" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/13495320_1755298361375799_7760079432494091933_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=UtI4fWX3wQQAX_BEGR8&_nc_ht=scontent.ftun1-2.fna&oh=65ae4786a2da1331a058ace5d37260ba&oe=60DF4790" alt=""></img>)
                    : (
                     <ul className="topList"> 
                      <li className="topListItem">
                          <Link className="link" to="/login">LOGIN</Link>
                      </li>


                      <li className="topListItem">

                          <Link className="link" to="/register">REGISTER</Link>
                      </li>
                      
                       
                    </ul>
                     ) }


               
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
