import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
              <div className="headerTitles">

                  <span className="headerTitleSm">React & Node</span>
                  <span  className="headerTitleLg">Blog</span>
              </div>

              <img className="headerImg" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/13495320_1755298361375799_7760079432494091933_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=UtI4fWX3wQQAX_BEGR8&_nc_ht=scontent.ftun1-2.fna&oh=65ae4786a2da1331a058ace5d37260ba&oe=60DF4790" alt=""/>
        </div>
    )
}
