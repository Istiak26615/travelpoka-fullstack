import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    const[blog, setBlog]=useState([])
    useEffect(()=>{
        fetch('https://frightful-asylum-08457.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[]);
    return (
        <div className="row text-center justify-content-center pot">
            <h1>Blogs</h1>
           {blog.map((blogs, index)=>(
                         <div className="col-md-5 service justify-content-center">
             
                         <Card style={{ width: '30rem'}} className="fullcard" >
                           
                           <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                               <Card.Title>{blogs?.name}</Card.Title>
                               <Card.Text>
                                   <span id="description">
                               <small>{blogs?.description}</small></span><br/>
                               
                               </Card.Text>  
                           </Card.Body>
                           
                           </Card>
                           
                       </div>
                     ))}
        </div>
    );
};

export default Blogs;