import React from 'react';
import AddserviceData from '../AddServiceData/AddserviceData';
import CarosoulePart from '../CarosulePart/CarosoulePart';
import ClientFeedBack from '../CleintFeedback/ClientFeedBack';

import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OurClient from '../Our client/OurClient';
import Services from '../Services/Services';
import ServiceTitle from '../ServicesTitle/ServiceTitle';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurClient></OurClient>
            <ServiceTitle></ServiceTitle>
            <AddserviceData></AddserviceData>
            <CarosoulePart></CarosoulePart>
            <ClientFeedBack></ClientFeedBack>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;