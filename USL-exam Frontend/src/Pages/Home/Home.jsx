import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Style from "./Home.module.css"
import Destinations from '../../Components/Locations/Destinations';
import Footer from '../../Components/Footer/Footer';
import BusCarousel from '../../Components/Buses/BusCarousel';
import { motion } from 'framer-motion';

const Home = () => {

  return(
    <motion.div
    
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth , transition:{ duration: 0.1 }}}
    >
    <Navbar/>
    <Hero/>
        <br/>
        <h2 className={Style.heading}> Discover NEW Landscapes </h2>
        <p className={Style.paragraph}> Transverse scenic routes</p>

        <Destinations/>

        <br/>
        <br/>
        <br/>

        <h2 className={Style.heading}> Our Buses </h2>
        <BusCarousel/>
        <br/>
        <br/>
        <br/>
        <Footer/>
     </motion.div>
  )
}
export default Home; 