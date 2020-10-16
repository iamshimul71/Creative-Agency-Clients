import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faList,faCommentDots,faCloudUploadAlt,faPlusSquare,faArrowDown,faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logos/logo.png'
import { useForm } from 'react-hook-form';

const AddService = () => {
    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data =>{
        fetch('https://glacial-stream-85081.herokuapp.com/AddSerciceAdmin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            
        })
        .then(res=>res.json())
        .then(success=>{
            if(success){
                alert('Service Add Successful')
            }
        })


    }








    return (
        <div>
           

            <div className="row  d-flex justify-content-center ">
           
            <div className="col-md-3  pl-5">
            <Link to="/home">
            <img className="w-50 p-3" src={logo} alt=""/>
                    </Link>
                <ul className="icon-dgn">
                <div className="mt-5">
                           <h4 className="admin pl-1">
                           <FontAwesomeIcon icon={faArrowDown} /> 
                               Admin</h4>
                            <li>
                    <FontAwesomeIcon icon={faList} /> 
                        
                        <Link to="/adminService">
                        <a  className="ml-3" href="#">Admin servicelist</a>
                    </Link>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faPlusSquare} /> 
                    <Link to="/addservice">
                    <a style={{color:'#009444'}} className="ml-3" href="#">Add Service</a>
                    </Link>
                   
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faUser} /> 
                    <Link to="/makeadmin">
                    <a className="ml-3" href="#">Make Admin</a>
                    </Link>
                   
                    </li>
                       </div>
                </ul>
            </div>
            <div className="col-md-9  ">
           <div className="row">
               <div className="col-md-6">
               <h4 style={{fontWeight:'bold'}} className="order py-3">Add Service</h4>
               </div>
               <div className="col-md-6">
    <p style={{fontWeight:'bold'}} className="name mr-5 py-3">{loggedInUser.name}</p>
               </div>

           </div>
            <section className="contact">
             
           
            <div className="section-header text-center text-white ">
           
            </div>

            
            <div className="col-md-9 mx-auto pt-3  customer-info">
                   
            <form action="" onSubmit={handleSubmit(onSubmit)}>
               
               
                <div className="form-group">
                    <h6>Service Title</h6>
                <input name="ser_name" placeholder="Enter Title" className="form-control"  ref={register} />
                </div>
               
                <div className="form-group">
                    <h6>Description</h6>
                    <textarea placeholder="Enter Description" name="des" className="form-control" id="" cols="30" rows="3" ref={register} ></textarea>
                </div>
                
                <div className="form-group ">
                    
                    <input className="btn-dgn" type="submit" />
                </div>
            </form>
               
            </div>


           

    </section>
    
            </div>

           

        </div>
        </div>
    );
};

export default AddService;