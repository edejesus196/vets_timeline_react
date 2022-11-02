import * as React from "react"
import { motion } from 'framer-motion'
import {animationTwo} from '../animations'
import Timeline from "../components/timeline"
import '../../src/components/timeline/timeline.css'


const TimelinePage = () => (
  <motion.div
    initial = 'out'
    animate = 'in'
    exit = 'out'
    variants={animationTwo}
  >
    <Timeline/>
  </motion.div>
  
)

export default TimelinePage