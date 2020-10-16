import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';
import FinallReviewShow from './FinallReviewShow';

const ShowReview = () => {

    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    const [reviewList,newReviewList] = useState([])

    useEffect(()=>{
       fetch('https://glacial-stream-85081.herokuapp.com/OrderListEmail?email='+loggedInUser.email)
       .then(res=>res.json())
       .then(data=>newReviewList(data))

    },[])
    return (
        <div className="row p-5">
            {
                reviewList.map(review=><FinallReviewShow review={review}></FinallReviewShow>)
            }
        </div>
    );
};

export default ShowReview;