import React from 'react'
import "./write.css"
import { useState, useContext } from 'react'
import axios from "axios"
import {Context} from "../../context/Context"

export default function Write() {

   const [title,setTitle] = useState("")
   const [desc,setDesc] = useState("")
   const [file,setFile]= useState(null)
   const {user} =useContext(Context)
   
   
   const handleSubmit = async (e) =>{
       e.preventDefault()
       const newPost = {
          
           title,
           desc,
           username:user.username

       }
       if(file){

          const data = FormData()
          const filename= Date.now() + file.name
          
          data.append("name", filename)
          data.append("file",file)
          newPost.photo = filename;

          try{

            await axios.post("http://localhost:5000/api/upload",data)





          }catch(err){

             console.log(err)

          }

       }

         try{

            const res =await axios.post("http://localhost:5000/api/posts",newPost)
            window.location.replace("/post/" + res.data._id)
         }catch(err){
            
            console.log(err)

         }
   }



    return (
        <div className="write">
            <img className="writeImg" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/13495320_1755298361375799_7760079432494091933_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=UtI4fWX3wQQAX_BEGR8&_nc_ht=scontent.ftun1-2.fna&oh=65ae4786a2da1331a058ace5d37260ba&oe=60DF4790" alt=""/>
          <form className="writeForm" onSubmit={handleSubmit}>
 
              <div className="writeFormGroup">
                 <label htmlFor='fileInput'>
                 <i className="writeIcon far fa-plus-square"></i>
                 </label>
                 <input type="file" id="fileInput" style={{display:"none"}}/>
                 <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />

              </div>
              <div className="writeFormGroup">
                  <textarea  placeholder="Tell your story" type="text" className="writeInput writeText"></textarea>


              </div>

              <button className="writeSubmit" type="submit">Publish</button>

          </form>
        </div>
    )
}
