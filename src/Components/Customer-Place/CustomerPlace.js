import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import { Button,Form,FormGroup } from 'react-bootstrap';
import logo from '../../images/logos/logo.png'
import './CustomerPlace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faList,faCommentDots,faCloudUploadAlt,faPlusSquare,faArrowDown,faUser } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';




const CustomerPlace = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data =>{
        fetch('https://glacial-stream-85081.herokuapp.com/AddOrder',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            
        })
        .then(res=>res.json())
        .then(success=>{
            if(success){
                alert('Your Order Successfully Done, Thank You')
            }
        })


    }




    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    const [isAdmin,setNewAdmin] = useState(false)
    const {id} = useParams()
    const [customer,setNewCustomer] = useState({})

    useEffect(()=>{
        fetch(`https://glacial-stream-85081.herokuapp.com/servicesingleData/${id}`)
        .then(res=>res.json())
        .then(data=>setNewCustomer(data))
    },[])

    useEffect(()=>{

        fetch('https://glacial-stream-85081.herokuapp.com/isAdmin',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({email: loggedInUser.email})
           
       })
       .then(res=>res.json())
       .then(data=>setNewAdmin(data))

    },[])




    return (
        
        <div className="row  d-flex justify-content-center ">
           
            <div className="col-md-3  pl-5">
            <Link to="/home">
            <img className="w-50 p-3" src={logo} alt=""/>
                    </Link>
           
                <ul className="icon-dgn">
                    <li>
                    <FontAwesomeIcon icon={faShoppingCart} /> 
                        <a style={{color:'#009444'}} className="ml-3" href="#">Order</a>
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
                    <a className="ml-3 " href="#">Review</a>
                    </Link>
                   
                    </li>

                   { 
                   isAdmin &&
                       <div className="mt-5">
                           <h4 className="admin pl-1">
                           <FontAwesomeIcon icon={faArrowDown} /> 
                               Admin</h4>
                            <li>
                    <FontAwesomeIcon icon={faList} /> 
                        
                        <Link to="/adminService">
                        <a style={{color:'orange'}} className="ml-3" href="#">Admin DashBoard</a>
                    </Link>
                    </li>
                    
                   
                       </div>
                   }




                </ul>
            </div>
            <div className="col-md-9  ">
           <div className="row">
               <div className="col-md-6">
               <h4 style={{fontWeight:'bold'}} className="order py-3">Order</h4>
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
                    
                    <input name="name" className="form-control" value={loggedInUser.name} ref={register} />
                    </div>
                    <div className="form-group">
                    <input name="email" className="form-control" value={loggedInUser.email} ref={register} />
                    </div>
                    <div className="form-group">
                    <input name="service_name" className="form-control" value={customer.service} ref={register} />
                    </div>
                    <div className="form-group">
                        <textarea name="Pro_des" className="form-control" id="" cols="30" rows="3" ref={register} placeholder="Project Details"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                        <input type="text" name="price" className="form-control" ref={register} placeholder="Price"/>
                    </div>
                        </div>
                        <div className="col-md-6 ">
                        <div className="form-group upload w-75">
                        <span><FontAwesomeIcon icon={faCloudUploadAlt} /> Uploaded Project File</span>
                    </div>
                        </div>

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

export default CustomerPlace;