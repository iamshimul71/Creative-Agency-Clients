import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import Frame from '../../images/logos/Frame.png'

const Header = () => {
    return (
        <header className="header-sec">
            <div className="container">
                <Navbar></Navbar>

                <div className="row d-flex justify-content-center  align-items-center">
                    <div className="col-md-5">
                         <h1 className="head-title ">Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                         <p className="head-des">Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Assumenda asperiores itaque <br/> dolorem deleniti possimus ad!</p>
                         <button className="btn-hire">Hire Us</button>
                    </div>
                    <div className="col-md-7">
                            <img  className="img-fluid w-75" src={Frame} alt=""/>
                     </div>

                </div>

            </div>
        </header>
    );
};

export default Header;