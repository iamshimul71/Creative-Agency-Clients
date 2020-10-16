import React from 'react';
import './CustomerPlace.css'

const ListCustomerOderShow = (props) => {
    const {service_name,Pro_des,price,img} = props.list
    return (
        <div className=" col-md-6 list-item-box p-3 m-3">
            <p className="status-dgn">Pending</p>
            <img src={img} alt=""/>
            <h4>{service_name}</h4>
            <p>{Pro_des}</p>
            <p>{price}</p>
        </div>
    );
};

export default ListCustomerOderShow;