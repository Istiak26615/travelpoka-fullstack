import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const {user }=useAuth();
    const[myOrder, setMyOrder]=useState([])
    const [isDelete, setIsDelete] = useState(null);
    useEffect(()=>{
        fetch(`https://frightful-asylum-08457.herokuapp.com/userBooking/${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyOrder(data))
    },[isDelete]);

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://frightful-asylum-08457.herokuapp.com/deleteMyorder/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        if (result.deletedCount) {
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
      });
      };
    return (
        <div>
            <h1>My order</h1>
            <div className="all-bookings">
                <div className="row container text-center justify-content-center">
                     {myOrder.map((myOrders, index)=>(
                         <div className="col-md-3 service justify-content-center">
             
                         <Card style={{ width: '18rem'}} className="fullcard" >
                           <Card.Img className="card-img" variant="top" src={myOrders?.image} />
                           <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                               <Card.Title>{myOrders?.name}</Card.Title>
                               <Card.Text>
                                   <span id="description">
                               <small>{myOrders?.description}</small></span><br/>
                               <p><b>${myOrders?.price}</b></p><br/>
                              
                               <button onClick={()=>handleDelete(myOrders._id)} className="btn btn-danger m-2">Delete</button>
                               
                               
                               </Card.Text>  
                           </Card.Body>
                           
                           </Card>
                           
                       </div>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;