import React from 'react';
import Banner from '../Banner';
import Skills from '../Skills';
import AboutUs from '../AboutUs';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Skills></Skills>
           <Projects></Projects>
        </div>
    );
};

export default Home;