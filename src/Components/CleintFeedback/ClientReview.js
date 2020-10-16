import React from 'react';
import Review from './Review';
const fakeData =[
    {
        name:'Nash Patrik',
        work:'CEO, Manpol',
        rev:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img:'https://i.ibb.co/kSH7GBT/customer-1.png',
    },
    {
        name:'Nash Patrik',
        work:'CEO, Manpol',
        rev:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img:'https://i.ibb.co/cYvxcCS/customer-2.png',
    },
    {
        name:'Nash Patrik',
        work:'CEO, Manpol',
        rev:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img:'https://i.ibb.co/mzmNfqh/customer-3.png',
    },
]

const ClientReview = () => {
    return (
        <div className="row p-5">
            {
                fakeData.map(client=> <Review review={client}></Review>)
            }
        </div>
    );
};

export default ClientReview;