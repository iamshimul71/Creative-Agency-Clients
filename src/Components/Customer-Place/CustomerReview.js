import React from 'react';
import { Link } from 'react-router-dom';
import './CustomerPlace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faList,faCommentDots,faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { userContext } from '../../App';
import logo from '../../images/logos/logo.png'
import { useState } from 'react';
import ShowReview from './ShowReview';

const CustomerReview = () => {
    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    const [customer,setNewCustomer] = useState([])
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = data =>{
        fetch('https://glacial-stream-85081.herokuapp.com/AddReview',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            
        })
        .then(res=>res.json())
        .then(success=>{
            if(success){
                alert('Your Review Successfully Done, Thank You')
            }
        })


    }
    

    return (
        <div className="row  d-flex justify-content-center ">
           
        <div className="col-md-3  pl-5">
        <Link to="/home">
        <img className="w-50 p-3" src={logo} alt=""/>
                </Link>
       
            <ul className="icon-dgn">
                <li>
                <FontAwesomeIcon icon={faShoppingCart} /> 
                    <a  className="ml-3" href="#">Order</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faList} /> 
                <Link to="/servicelist">
                <a className="ml-3 " href="#">Service</a>
                </Link>
               
                </li>
                <li>
                <FontAwesomeIcon icon={faCommentDots} /> 
                <Link to="/review">
                <a style={{color:'#009444'}} className="ml-3 " href="#">Review</a>
                </Link>
               
                </li>
            </ul>
        </div>
        <div className="col-md-9  ">
       <div className="row">
           <div className="col-md-6">
           <h4 style={{fontWeight:'bold'}} className="order py-3">Review</h4>
           </div>
           <div className="col-md-6">
<p style={{fontWeight:'bold'}} className="name mr-5 py-3">{loggedInUser.name}</p>
           </div>

       </div>
        <section className="contact">
         
       
        <div className="section-header text-center text-white ">
       
        </div>

        
        <div className="col-md-9 mx-auto pt-5 customer-info">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                
                <input name="name" placeholder="Your Name" className="form-control"  ref={register} />
                </div>
                <div className="form-group">
                
                <input name="email" value={loggedInUser.email} className="form-control"  ref={register} />
                </div>
                <div className="form-group">
                <input name="company" placeholder="Company's Name / Designation" className="form-control"  ref={register} />
                </div>
               
                <div className="form-group">
                    <textarea placeholder="Description" name="review" className="form-control" id="" cols="30" rows="3" ref={register} placeholder="Project Details"></textarea>
                </div>
                
                <div className="form-group ">
                    
                    <input className="btn-dgn" type="submit" />
                </div>
            </form>
              
        </div>


       

 
  
  

       
    

</section>

        </div>

        

    </div>
    );
};

export default CustomerReview;