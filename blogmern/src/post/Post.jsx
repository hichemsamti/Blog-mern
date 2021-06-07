import React from 'react'
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/13495320_1755298361375799_7760079432494091933_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=UtI4fWX3wQQAX_BEGR8&_nc_ht=scontent.ftun1-2.fna&oh=65ae4786a2da1331a058ace5d37260ba&oe=60DF4790" alt=""/>
            <div className="postInfo">

                <div className="postCats">

                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia pariatur doloribus dolore porro! </span>
                <hr/>
                <span className="postDate"> 1 hour ago</span>
            </div>
            <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis, nesciunt et praesentium dolores, hic at labore non maiores cum totam, laborum possimus laudantium nisi minus voluptatum ea aut corrupti?fqsdfqdggdqgqdgqdgqqdfqjffq jqfqjqsf uqfqsjfqjfqjfqjs qscqjsjdqjqfqsjfqjsqsjfqjqsjfqfjq qsfdjfjqfqjsfqj</p>
        </div>
    )
}
