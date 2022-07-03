import Button from 'react-bootstrap/Button';

import {useState,useEffect} from "react";  
import axios from "axios";
import {useParams} from "react-router-dom";
import "./edit-Blogs.css";
import Header from "../header/header";

let EditBody = ()=>{
    const {id}= useParams();

    const [Blog,setBlog]= useState({
        phrase:"",
        title:"",
        body:"",
        src:""
    })
    let handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setBlog({...Blog,[name]:value});
        console.log(Blog);



    }
    const loadBlogs = async()=>{
        let result = await axios.get(`https://leisureandthoughts-blogbackend.herokuapp.com/blog/${id}`);
        console.log(result.data);
        setBlog({
            phrase:result.data.phrase,
            title:result.data.title,
            body:result.data.body,
            src:result.data.src
        });

    }
    let submitBlog = async(e)=>{
        e.preventDefault();
        console.log(Blog);
        await axios.put(`https://leisureandthoughts-blogbackend.herokuapp.com/blog/update/${id}`,Blog).then(res=> console.log(res.data)).catch(err =>console.log(err));
        setBlog({
            phrase:"",
            title:"",
            body:"",
            src:""
        })
        window.location="/blogs";

    }

    useEffect(()=>{
        loadBlogs();
    },[])



    return(
        <>
        <Header/>
        <div className="BlogBody">
            <input type="text" name="phrase" placeholder="phrase (Something catchy for card)" className="input" onChange={handleChange} value={Blog.phrase}></input>
            <input type="text" name="title" placeholder="Title" className="input" onChange={handleChange} value={Blog.title}></input>
            <input type="text" name="src" placeholder="Image URL" className="input" onChange={handleChange} value={Blog.src}></input>
            <input type="text" name="body" placeholder="Body" className="input-body" onChange={handleChange} value={Blog.body}></input>
            
            <Button variant="outline-secondary" type="submit" onClick={submitBlog}>Edit !</Button>

        </div>
        </>
    )
}
export default EditBody;