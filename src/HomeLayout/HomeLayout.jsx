import React from 'react';
import Banner from '../components/Banner';
import Service from '../Pages/Service';
import StaticSections from '../Pages/StaticSections';
import ServiceSix from '../Pages/ServiceSix';
import Categories from '../Pages/Categories';
import Highlights from '../Pages/Highlights';
import FAQ from '../Pages/FAQ';
import Newsletter from '../Pages/Newsletter';
import CTA from '../Pages/CTA';


const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceSix></ServiceSix>
            <Categories></Categories>
            <Highlights></Highlights>
          
            <StaticSections></StaticSections>
            <FAQ></FAQ>
            <CTA></CTA>
            <Newsletter></Newsletter>
           
        </div>
    );
};

export default HomeLayout;