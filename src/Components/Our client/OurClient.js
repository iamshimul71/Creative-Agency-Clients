import React from 'react';
import slack from '../../images/logos/slack.png'
import google from '../../images/logos/google.png'
import uber from '../../images/logos/uber.png'
import airbnb from '../../images/logos/airbnb.png'
import netflix from '../../images/logos/netflix.png'

const OurClient = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center mb-5">
           
            <div className="col-md-2">
               <img className="w-50" src={slack} alt=""/>
            </div>
            <div className="col-md-2">
            <img className="w-50" src={google} alt=""/>
            </div>
            <div className="col-md-2">
            <img className="w-50" src={uber} alt=""/>
            </div>
            <div className="col-md-2">
            <img className="w-50" src={airbnb} alt=""/>
            </div>
            <div className="col-md-2">
            <img className="w-50" src={netflix} alt=""/>
            </div>

           
            
        </div>
    );
};

export default OurClient;