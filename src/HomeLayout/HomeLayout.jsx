import React from 'react';
import Banner from '../components/Banner';
import Service from '../Pages/Service';
import StaticSections from '../Pages/StaticSections';
import ServiceSix from '../Pages/ServiceSix';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Service></Service> */}
            <ServiceSix></ServiceSix>
            <StaticSections></StaticSections>
        </div>
    );
};

export default HomeLayout;