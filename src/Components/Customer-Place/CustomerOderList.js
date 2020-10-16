import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import CustomerServiceList from './CustomerServiceList';
import ListCustomerOderShow from './ListCustomerOderShow';

const CustomerOderList = () => {

    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    const [serviceList,newServiceList] = useState([])

    useEffect(()=>{
       fetch('https://glacial-stream-85081.herokuapp.com/serviceListEmail?email='+loggedInUser.email)
       .then(res=>res.json())
       .then(data=>newServiceList(data))

    },[])

    return (
        <div className="row">
            {
                serviceList.map(ser=> <ListCustomerOderShow list={ser}></ListCustomerOderShow>)
            }
        </div>
    );
};

export default CustomerOderList;