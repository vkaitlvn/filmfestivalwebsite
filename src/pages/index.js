
import React, {useState} from 'react';

import HeroSection from '../components/HeroSection';





 
const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
           
            <HeroSection/>
            
        </div>

    );
}

export default Home;
