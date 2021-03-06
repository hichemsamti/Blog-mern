import React from 'react'
import "./sidebar.css"
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidebar() {

    const [cats,setCats] = useState([])

    useEffect(()=>{

       const getCats = async ()=>{

         const res = await axios.get("http://localhost:5000/api/categories")

         setCats(res.data)
       }

       getCats()

    },[])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
               <span className="sidebarTitle">
                   ABOUT ME

               </span>

               <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/13495320_1755298361375799_7760079432494091933_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=UtI4fWX3wQQAX_BEGR8&_nc_ht=scontent.ftun1-2.fna&oh=65ae4786a2da1331a058ace5d37260ba&oe=60DF4790" alt=""/>
               
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus, recusandae non ab doloribus, illo iusto cupiditate in veritatis voluptates repellendus nemo aut expedita sequi velit voluptas hic mollitia incidunt?</p>
            </div>
            <div className="sidebarItem">
               <span className="sidebarTitle">
                   CATEGORIES
               </span>
               <ul className="sidebarList">

                   {cats.map((c)=>{
                    return  <Link to={`/?cat=${c.name}`} className="link">
                     <li className="sidebarListItem">{c.name}</li>
                   
                    </Link> 
                    })} 

               
               


               </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">
                   FOLLOW US
            </span>
            <div className="sidebarSocial">
               
              <i className="sidebarIcon fab fa-facebook-square"></i>
              <i className="sidebarIcon fab fa-twitter-square"></i>
              <i className="sidebarIcon fab fa-pinterest-square"></i>
              <i className="sidebarIcon fab fa-instagram-square"></i>


            </div>



            </div>
        </div>
    )
}
