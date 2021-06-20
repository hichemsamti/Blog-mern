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
    const [title,setTitle]= useState('')
    const [desc,setDesc]= useState('')
    const [updateMode,setUpdateMode]=useState(false)

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
            setTitle(res.data.title)
            setDesc(res.data.desc)

        }

        getPost()


    },[path])


    const handleUpdate= async() =>{

        try{

           await axios.put('http://localhost:5000/api/posts'+ post._id,{data:{username:user.username,title,desc}})
            window.location.reload()
        }catch(err){
            console.log(err)
        }



    }
    return (
        <div className="singlePost">
          
          <div className="singlePostWrapper">

              {post.photo && (<img src={PF+post.photo}  alt="" className="singlePostImg"/>)}
              
              {updateMode ? <input type="text" value={title} className='singlePostTitleInput' autoFocus  onChange={e=>setTitle(e.target.value)}  /> : (<h1 className="singlePostTitle"> {post.title}

                     {post.username === user?.username && ( <div className="singlePostEdit">

                     <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>

                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>

                    </div>)
  
                    }


                   </h1>)
                }
              

              <div className="singlePostInfo">

                
                 
                 <Link to={`/?user=${post.username}`} className="link">
                 <span className="singlePostAuthor">Author: 
                 
                 <b>{post.username}</b></span>

                 </Link>
                 
                 
                 <span className="singlePostDate">{new Date(post.createdAt).toDateString()} </span>

              </div>
              {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={e=>setDesc(e.target.value)} /> :( <p className="singlePostDesc" >{post.desc}</p>) }
              
             <button className="singlePostButton" onClick={handleUpdate}>Update</button>

          </div>
        </div>
    )
}
