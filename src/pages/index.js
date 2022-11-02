import * as React from "react"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import {motion} from 'framer-motion'
import {animationOne, transition} from '../animations'


const IndexPage = () => (
  <motion.div 
    initial='out' 
    animate='in' 
    xit='out' 
    variants={animationOne}
    transition={transition}
  >
    <Layout>
      <Seo title="Home" />
      <HeroSection/>
      <Image />
    </Layout>
  </motion.div>
  
)


export default IndexPage
