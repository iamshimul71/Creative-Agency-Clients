import React from 'react';
import logo from '../../images/logos/logo.png'
import './CustomerPlace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faList,faCommentDots,faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';
import CustomerOderList from './CustomerOderList';
import ListCustomerOderShow from './ListCustomerOderShow';

const CustomerServiceList = (props) => {
    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    return (
        <div className="row  d-flex justify-content-center ">
           
            <div className="col-md-3  pl-5">
            <Link to="/home">
            <img className="w-50 p-3" src={logo} alt=""/>
                    </Link>
                <ul className="icon-dgn">
                    <li>
                    <FontAwesomeIcon icon={faShoppingCart} /> 
                    <Link to="/order">
                    <a  className="ml-3" href="#">Order</a>
                    </Link>
                    
                        
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faList} /> 
                    <Link to="/servicelist">
                    <a style={{color:'#009444'}} className="ml-3 " href="#">Service</a>
                    </Link>
                   
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCommentDots} /> 
                    <Link to="/review">
                    <a  className="ml-3 " href="#">Review</a>
                    </Link>
                    
                    </li>
                </ul>
            </div>
            <div className="col-md-9  ">
           <div className="row">
               <div className="col-md-6">
               <h4 style={{fontWeight:'bold'}} className="order py-3">Customer Service List</h4>
               </div>
               <div className="col-md-6">
    <p style={{fontWeight:'bold'}} className="name mr-5 py-3">{loggedInUser.name}</p>
               </div>

           </div>
            <section className="contact">
             
           
            <div className="section-header text-center text-white ">
           
            </div>

            
            <div className="col-md-9 mx-auto  ml-5 customer-info">
                <CustomerOderList></CustomerOderList>
            </div>


           

    </section>
    
            </div>

           

        </div>
    );
};

export default CustomerServiceList;