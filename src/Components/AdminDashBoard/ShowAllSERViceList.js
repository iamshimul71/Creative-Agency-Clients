import React from 'react';
import './Admin.css'

const ShowAllSERViceList = (props) => {
    const {name,email,service_name,Pro_des,} = props.servicelist
    return (
        
        <table class="table table-hover tab-dgn">
  
  <tbody>
        <tr>
          
              <td>{name}</td>
             <td>{email}</td>
             <td>{service_name}</td>
             <td>{Pro_des}</td>
             <td style={{color:'#FF8181'}}>Pendding</td>
             
        </tr>
        
      </tbody>
</table>


        
    );
};

export default ShowAllSERViceList;