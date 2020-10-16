import React from 'react';
import './ClientFeedBack.css'

const Review = (props) => {
    const {name,work,rev,img} = props.review
    return (
        <div className="col-md-4">
           <div className="rev-box">
                  <img className="rev-img" src={img} alt=""/>
                  <h6>{name}</h6>
                    <p>{work}</p>
                    <p>{rev}</p>
           </div>
        </div>
    );
};

export default Review;