import React from 'react';
import Banner from '../components/Banner';
import Service from '../Pages/Service';
import StaticSections from '../Pages/StaticSections';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <StaticSections></StaticSections>
        </div>
    );
};

export default HomeLayout;