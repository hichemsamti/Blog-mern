import React from 'react'
import "./setting.css"
import Sidebar from "../../sidebar/Sidebar"

export default function Setting() {
    return (
        <div className="settings">
           <div className="settingsWrapper">
               <div className="settingsTitle">
                 
                 <span className="settingsUpdateTitle">Update Your Account </span>
                 <span className="settingsDeleteTitle">Delete Your Account </span>


               </div>
               <form  className="settingsForm">

                  <label >Profile Picture</label>
                  <div className="settingsPP">
                     
                      <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/13495320_1755298361375799_7760079432494091933_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=UtI4fWX3wQQAX_BEGR8&_nc_ht=scontent.ftun1-2.fna&oh=65ae4786a2da1331a058ace5d37260ba&oe=60DF4790" alt="" />
                      <br/>
                      <label htmlFor="fileInput">
                      <i className="settingsPPIcon far fa-user-circle"></i>
                      </label>
                      <input type="file" id="fileInput" style={{display:"none"}} />
                  </div>
                  <label>Username</label>
                  <input type="text" placeholder="Hichem" />
                  <label>Email</label>
                  <input type="email" placeholder="hichem@gmail.com" />
                  <label>Password</label>
                  <input type="password"  />
                  <button className="settingsSubmit">Update</button>


               </form>
           </div>
               
           <Sidebar/>
        </div>
    )
}
