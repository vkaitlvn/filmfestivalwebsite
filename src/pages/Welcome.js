
import React, {useState} from 'react';

import Welcome from '../components/Welcome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import InfoSection1 from '../components/InfoSection1';





 
const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
           <Navbar/>
            <Welcome/>
            {/* <InfoSection1/> */}
            <Footer/>
            
        </div>

    );
}

export default Home;
