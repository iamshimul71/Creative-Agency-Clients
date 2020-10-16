import React from 'react';
import './Services.css'
import { Link } from 'react-router-dom';
import GetAllServiceData from '../AdminDashBoard/GetAllServiceData';
import GetADMINALLService from '../AdminDashBoard/GetADMINALLService';

const Services = (props) => {
    const {_id,service,des,img} = props.service
    return (
        <div className="col-md-4 py-2  px-5">
              
          <Link style={{textDecoration:'none'}} to={`/customer/${_id}`}>
             <div className="ser-box mt-5">
                 <img className="ser-img" src={img} alt=""/>
                  <h6 className="ser-ti">{service}</h6>
                     <p className="ser-des">{des}</p>

             </div>
             </Link>
             
        </div>
    );
};

export default Services;