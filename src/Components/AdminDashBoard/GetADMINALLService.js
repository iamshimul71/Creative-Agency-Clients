import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminServiceDataShow from './AdminServiceDataShow';

const GetADMINALLService = () => {
    const [service,newServiceList] = useState([])
    useEffect(()=>{
        fetch('https://glacial-stream-85081.herokuapp.com/AdminServiceDaTA')
        .then(res=>res.json())
        .then(data=>newServiceList(data))
 
     },[])
    return (
        <div className="row p-5">
            {
                service.map(ser=><AdminServiceDataShow serviceList={ser}></AdminServiceDataShow>)
            }
        </div>
    );
};

export default GetADMINALLService;