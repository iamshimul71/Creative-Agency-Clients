import React from 'react';
import '../CleintFeedback/ClientFeedBack.css'

const FinallReviewShow = (props) => {
    const {name,company,review} = props.review
    return (
        <div className="col-md-4">
           <div className="rev-box">
                 
                  <h6>{name}</h6>
                    <p>{company}</p>
                    <p>{review}</p>
           </div>
        </div>
    );
};

export default FinallReviewShow;