import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import Modal from './Modal';

const Newsletter = () => {

  const [modalOpen, setModelOpen] = useState(false);

  const close = () => setModelOpen(false);
  const open = () => setModelOpen(true);

  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:cols-span-2 my-4">
          <h1 className="text-2xl md:text-4xl sm:text-3xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newletter and stay up to date.</p>
        </div>
        <div className="my-4 ml-5">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email" />
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 ml-2 px-3 py-3  text-black'
                onClick={() => (modalOpen ? close() : open())}>
                Notify Me
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
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} type={"newspaper"} />}
              </AnimatePresence>
            </div>
          </div>
          <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy policy.</span> </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
