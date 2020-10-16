import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">
      <img className="w-50" src={logo} alt=""/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto nav-design">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-secondry" href="#">Our portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      <li class="nav-item login-dgn">
      <Link to="/customer">
      <a class="nav-link" href="">Login</a>
                    </Link>
        
      </li>
     
      
    </ul>
    
  </div>
</nav>
    );
};

export default Navbar;