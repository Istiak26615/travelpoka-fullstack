import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const ManageAllOrder = () => {
  const {user }=useAuth();
  const[manageorder, setManageOrder]=useState([])
    const [isDelete, setIsDelete] = useState(null);
    useEffect(()=>{
        fetch('https://frightful-asylum-08457.herokuapp.com/userBooking')
        .then(res=>res.json())
        .then(data=>setManageOrder(data))
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
      <div>
            <h1>Manage All order</h1>
            <div className="all-bookings">
                <div className="row container text-center justify-content-center">
                     {manageorder.map((manageorders, index)=>(
                         <div className="col-md-3 service justify-content-center">
             
                         <Card style={{ width: '18rem'}} className="fullcard" >
                           <Card.Img className="card-img" variant="top" src={manageorders?.image} />
                           <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                               <Card.Title>{manageorders?.name}</Card.Title>
                               <Card.Text>
                                   <span id="description">
                               <small>{manageorders?.description}</small></span><br/>
                               <p><b>${manageorders?.price}</b></p><br/>
                               <p>Name:{user.displayName}</p>
                               
                               
                                
                               {/* <button className="btn btn-danger m-2">Delete</button> */}
                               <button onClick={()=>handleDelete(manageorders._id)} className="btn btn-danger m-2">Delete</button>
                               
                               
                               </Card.Text>  
                           </Card.Body>
                           
                           </Card>
                           
                       </div>
                     ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default ManageAllOrder;