import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="row footer-dgn d-flex justify-content-center mt-4 ">
            <div className="col-md-5 mt-5 pl-5">
                <h4 className="footer-title ">Let Us Handle Your <br/> Project Professionally </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt unde voluptas provident, eveniet nesciunt.</p>
            </div>
            <div className="col-md-7 py-4">
            <section className="contact">
       
            <div className="section-header text-center text-white mb-5">
                 
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your name / Company names *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group ">
                        <button type="button" className="btn-dgn"> Send </button>
                    </div>
                    
                </form>
            </div>
        
    </section>
    
            </div>

            <p className="text-center">Copy right Orange labs 2020</p>

        </div>
    );
};

export default Footer;