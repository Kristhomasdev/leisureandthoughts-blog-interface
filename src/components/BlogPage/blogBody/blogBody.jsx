import Button from 'react-bootstrap/Button';
import "./blogBody.css";
import {useState} from "react";  
import axios from "axios";

let BlogBody = ()=>{

    const [Blog,setBlog]= useState({
        title:"",
        body:""
    })
    let handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setBlog({...Blog,[name]:value})



    }
    let submitBlog = (e)=>{
        e.preventDefault();
        console.log(Blog);
        axios.post("https://leisureandthoughts-blog.herokuapp.com/blog/addblog",Blog).then(res=> console.log(res.data)).catch(err =>console.log(err));
        setBlog({
            title:"",
            body:""
        })

    }




    return(
        <div className="BlogBody">
            <input type="text" name="title" placeholder="Title" className="input-title" onChange={handleChange} value={Blog.title}></input>
            <input type="text" name="body" placeholder="Body" className="input-body" onChange={handleChange} value={Blog.body}></input>
            <Button variant="outline-secondary" type="submit" onClick={submitBlog}>Blog +</Button>

        </div>
    )
}
export default BlogBody;