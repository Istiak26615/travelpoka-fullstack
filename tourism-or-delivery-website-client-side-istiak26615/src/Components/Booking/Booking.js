import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css'

const Booking = (props) => {
    const{_id,id,name, description,image,price}=props.service
    return (
        <div className="col-md-3 service justify-content-center">
             
              <Card style={{ width: '18rem'}} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={image} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span id="description">
                    <small>{description}</small></span><br/>
                    <p><b>${price}</b></p><br/>
                    <Link to={`/userBooking/${_id}`} className="detailsLink">
                    <button className="btn btn-primary">Click here to book</button>
                    </Link>
                    </Card.Text>  
                </Card.Body>
                
                </Card>
                
            </div>
    );
};

export default Booking;