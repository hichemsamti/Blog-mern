import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
          
          <div className="singlePostWrapper">
              <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/13495320_1755298361375799_7760079432494091933_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=UtI4fWX3wQQAX_BEGR8&_nc_ht=scontent.ftun1-2.fna&oh=65ae4786a2da1331a058ace5d37260ba&oe=60DF4790" alt="" className="singlePostImg"/>
              
              <h1 className="singlePostTitle">hiiiiiiiiiiiii
              
              <div className="singlePostEdit">

              <i className="singlePostIcon far fa-edit"></i>

              <i className="singlePostIcon far fa-trash-alt"></i>

              </div>
              
              </h1>

              <div className="singlePostInfo">

                 <span className="singlePostAuthor">Author: <b>Hichem</b></span>
                 <span className="singlePostDate">1 hour ago </span>

              </div>

              <p className="singlePostDesc" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis unde quibusdam perferendis dolorem, facere corporis quos a asperiores voluptate iure sequi aperiam et consequuntur dolor consecte Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ullam aspernatur voluptates impedit eos? Aliquam, impedit praesentium exercitationem iure, corporis aut placeat totam ullam inventore illum velit enim culpa consequuntur.</p>


          </div>
        </div>
    )
}
