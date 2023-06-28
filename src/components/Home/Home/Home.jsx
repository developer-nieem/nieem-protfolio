import React from 'react';
import Banner from '../Banner';
import Skills from '../Skills';
import AboutUs from '../AboutUs';
import Projects from '../Projects/Projects';
import ContactUs from '../ContactUs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Skills></Skills>
           <Projects></Projects>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;