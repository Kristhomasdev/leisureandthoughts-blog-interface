import Button from 'react-bootstrap/Button';
import "./blogBody.css";
import {useState} from "react";  
import axios from "axios";

let BlogBody = ()=>{

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
    let submitBlog = (e)=>{
        e.preventDefault();
        console.log(Blog);
        axios.post("https://leisureandthoughts-blog.herokuapp.com/blog/addblog",Blog).then(res=> console.log(res.data)).catch(err =>console.log(err));
        setBlog({
            phrase:"",
            title:"",
            body:"",
            src:""
        })

    }




    return(
        <div className="BlogBody">
            <input type="text" name="phrase" placeholder="phrase (Something catchy for card)" className="input" onChange={handleChange} value={Blog.phrase}></input>
            <input type="text" name="title" placeholder="Title" className="input" onChange={handleChange} value={Blog.title}></input>
            <input type="text" name="src" placeholder="Image URL" className="input" onChange={handleChange} value={Blog.src}></input>
            <input type="text" name="body" placeholder="Body" className="input-body" onChange={handleChange} value={Blog.body}></input>
            
            <Button variant="outline-secondary" type="submit" onClick={submitBlog}>Blog +</Button>

        </div>
    )
}
export default BlogBody;