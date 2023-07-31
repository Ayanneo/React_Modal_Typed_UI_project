import React from 'react'
import Laptop from '../assets/laptop.jpg';
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import Modal from './Modal';

const Analytics = () => {

  const [modalOpen, setModelOpen] = useState(false);

  const close = () => setModelOpen(false);
  const open = () => setModelOpen(true);

  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla quibusdam quam in quidem temporibus eligendi, dignissimos laborum expedita odit fuga aliquid veritatis reiciendis aspernatur rem, atque consequatur ex ratione!</p>
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
              initial={false}
              // Only render one component at a time.
              // The exiting component will finish its exit
              // animation before entering component is rendered
              mode='wait'
              // Fires when all exiting nodes have completed animating out
              onExitComplete={() => null}
            >
              {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} type={"flip"} />}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Analytics