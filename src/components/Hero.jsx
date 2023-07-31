import React from 'react'
import Typed from 'react-typed';
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import Modal from './Modal';

const Hero = () => {

  const [modalOpen, setModelOpen] = useState(true);

  const close = () => setModelOpen(false);
  const open = () => setModelOpen(true);



  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 md:pt-12'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text=4xl md:text-7xl sm:text-6xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='text-xl md:text-5xl sm:text-4xl font-bold py-4'>Fast, flexible financing for</p>
          <Typed
            className='text-xl md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2 text-[#df0045]'
            strings={[
              'BTB',
              'D2C',
              'SaaS',
              'B2C'
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for your Business model.</p>


        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'
            onClick={() => (modalOpen ? close() : open())}>
            Get started
          </motion.button>

          <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={true}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            mode='wait'
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
          >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} type={"dropIn"}/>}
          </AnimatePresence>
        </div>


      </div>
    </div>
  )
}

export default Hero


// className='absolute overflow-hidden top-0 left-0 h-full w-full flex items-center justify-center backdrop-blur-sm'

//<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>