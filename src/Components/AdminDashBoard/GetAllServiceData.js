import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import ShowAllSERViceList from './ShowAllSERViceList';

const GetAllServiceData = () => {
    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    const [serviceList,newServiceList] = useState([])
    useEffect(()=>{
        fetch('https://glacial-stream-85081.herokuapp.com/getorderallData')
        .then(res=>res.json())
        .then(data=>newServiceList(data))
},[])
    return (
        <div className="row">
            {
                serviceList.map(sar=><ShowAllSERViceList servicelist={sar}></ShowAllSERViceList>)
            }
        </div>
    );
};

export default GetAllServiceData;