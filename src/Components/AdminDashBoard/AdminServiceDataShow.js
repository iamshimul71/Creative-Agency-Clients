import React from 'react';
import '../Services/Services.css'

const AdminServiceDataShow = (props) => {
    return (

        <div className="col-md-4 py-2  px-5">
           <div className="ser-box adminser">
                 
                  <h6 className="ser-ti">{props.serviceList.ser_name}</h6>
                    <p className="ser-des">{props.serviceList.des}</p>
                    
           </div>
        </div>
        
    );
};

export default AdminServiceDataShow;