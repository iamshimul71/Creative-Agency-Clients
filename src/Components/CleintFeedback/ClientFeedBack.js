import React from 'react';
import ShowReview from '../Customer-Place/ShowReview';
import './ClientFeedBack.css'
import ClientReview from './ClientReview';

const ClientFeedBack = () => {
    return (
        <div>
             <h3 className="client-title ">Clients <span style={{color:'#7AB259'}}>FeedBack</span></h3>
             <ClientReview></ClientReview>
             <ShowReview></ShowReview>
        </div>
    );
};

export default ClientFeedBack;