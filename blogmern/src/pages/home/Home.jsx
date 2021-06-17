import React from 'react'
import "./home.css"
import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import {useState,useEffect} from "react"
import axios from "axios"
import { useLocation } from 'react-router-dom'

export default function Home() {

    const [posts,setPosts] = useState([])
    const {search} =useLocation()
    console.log(search)

    useEffect(()=>{
        const fetchPosts = async () =>{

          const res = await axios.get("http://localhost:5000/api/posts"+search)

          setPosts(res.data)


        }
        fetchPosts()
    },[search])
    return (

        <>
        <Header/>
        <div className="home">

            
            <Posts posts={posts}/>
            <Sidebar/>
            
        </div>

        </>
    )
}
