import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import GetADMINALLService from '../AdminDashBoard/GetADMINALLService';
import Services from '../Services/Services';

const fakeData =[
    {
        service:'Web & Mobile design',
        des:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img:'https://i.ibb.co/9hKtzrR/service1.png',
    },
    {
        service:'Graphic design',
        des:'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img:'https://i.ibb.co/LRV18dT/service2.png',
    },
    {
        service:'Web development',
        des:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img:'https://i.ibb.co/PgtzP5T/service3.png',
    },
]

const AddserviceData = () => {
    const [service,newService] = useState([])
    const HandleAddData = ()=>{
        console.log(fakeData)
        fetch('https://glacial-stream-85081.herokuapp.com/serviceData',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(fakeData)
           
       })

    }

    useEffect(()=>{
            fetch('https://glacial-stream-85081.herokuapp.com/serviceallData')
            .then(res=>res.json())
            .then(data=>newService(data))
    },[])
    return (
        <div  className="row">
           
           
               {
                   service.map(sar=><Services service={sar}></Services>)
               }
          <GetADMINALLService></GetADMINALLService>
        </div>
    );
};

export default AddserviceData;