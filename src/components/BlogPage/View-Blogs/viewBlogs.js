import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import "./viewBlogs.css";





let ViewBlogs = ()=>{


    const [blogList,setBlogList] = useState([]);
    useEffect(()=>{
        loadBlogs();
    },[]);
    const navigate = useNavigate(); //Chutiya Function

   
    const deleteBlog =async(id)=>{
      // again async saved my 1:06AM effort 
      // useHistory aur useNavigate faaltu saabit hue
      await axios.delete(`https://leisureandthoughts-blogbackend.herokuapp.com/blog/deleteblog/${id}`).then(res=>console.log(res.data));
      window.location="/blogs";
      
      loadBlogs();

    }
     const loadBlogs =async()=>{
        //Firse u didnt make it async ...... customer table se refer karna pada
        let result = await axios.get("https://leisureandthoughts-blogbackend.herokuapp.com/blog");
        // console.log(result.data);
        setBlogList(result.data);
        console.log(blogList[0]);
    }


    return(
        <div className="card-blog-div">
           {blogList.map(blog=>(
            <Card style={{ width: '70rem' }}>
  <Card.Img variant="top" src={blog.src} className="card-blog-image" fluid/>
  <Card.Body>
    <Card.Title>{blog.phrase}</Card.Title>
    <Card.Text>
      {blog.body}
    </Card.Text>
    <Button variant="warning"  className="card-blog-button"><Link to={`update/${blog._id}`} className="BLink">Update</Link></Button>
    <Button variant="danger">
    <Link to={`deleteblog/${blog._id}`} onClick={()=>{
      deleteBlog(blog._id);
      
      }} className="BLink">Delete</Link>
      
      </Button>
  </Card.Body>
</Card>
           ))}
        </div>

    )
}

export default ViewBlogs;
