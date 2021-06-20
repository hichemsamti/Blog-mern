import React from 'react'
import "./singlePost.css"
import {useLocation} from "react-router"
import {useEffect,useState,useContext} from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'



export default function SinglePost() {
    const location = useLocation()
    const path=location.pathname.split("/")[2]
    const [post,setPost] = useState({})
    const PF= "http://localhost:5000/images/"
    const {user}= useContext(Context)

    const handleDelete = async ()=>{

        try{

        await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{data : {username:user.username}})
        window.location.replace("/")

        }catch(err){
            console.log(err)
        }

    }


    console.log(post)


    useEffect(()=>{

        const getPost =  async ()=>{

            const res = await axios.get("http://localhost:5000/api/posts/"+ path)
            console.log(res)
            setPost(res.data)

        }

        getPost()


    },[path])
    return (
        <div className="singlePost">
          
          <div className="singlePostWrapper">

              {post.photo && (<img src={PF+post.photo}  alt="" className="singlePostImg"/>)}
              
              
              <h1 className="singlePostTitle"> {post.title}

              {post.username === user?.username && ( <div className="singlePostEdit">

                 <i className="singlePostIcon far fa-edit"></i>

                 <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>

                </div>)
                
               }
              
              
              </h1>

              <div className="singlePostInfo">

                
                 
                 <Link to={`/?user=${post.username}`} className="link">
                 <span className="singlePostAuthor">Author: 
                 
                 <b>{post.username}</b></span>

                 </Link>
                 
                 
                 <span className="singlePostDate">{new Date(post.createdAt).toDateString()} </span>

              </div>

              <p className="singlePostDesc" >{post.desc}</p>


          </div>
        </div>
    )
}
