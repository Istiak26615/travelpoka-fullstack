import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="row footer p-5">
                <div className="col-md-4 footer-img">
                 <img src="https://imgdb.net/storage/uploads/b28b8932a10b244cfcd33ec5ad3bc2322e3c882c4409a6eccd494f0f3c13a2f8.png" akt=""/>
                </div>
            <div className="col-md-4">
            <p>About</p><br/>
            <p>Read blog</p><br/>
            <p>Signup to get notice</p><br/>
            <p>Emergency </p><br/>
            </div>
            <div className="col-md-4">
            <h2 className="footer">Have any Question?</h2>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <br/>
                  <input
                    className="footer-input mt-2"
                    type="text"
                    placeholder="Enter Question"
                  /><br/>
                  <button type="button" className="btn btn-light m-5">Submit</button>
            </div>
        </div>
        </div>
    );
};

export default Footer;