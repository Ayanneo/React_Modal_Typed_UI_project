import React from 'react'
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import Typed from 'react-typed';
import {
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa'

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const flip = {
    hidden: {
        transform: "scale(0) rotateX(-360deg)",
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    visible: {
        transform: " scale(1) rotateX(0deg)",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        transform: "scale(0) rotateX(360deg)",
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const newspaper = {
    hidden: {
        transform: "scale(0) rotate(720deg)",
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    visible: {
        transform: " scale(1) rotate(0deg)",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        transform: "scale(0) rotate(-720deg)",
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};



const Modal = ({ handleClose, text, type }) => {

    return (
        <Backdrop onClick={handleClose}>
            {type === "dropIn" && (
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className='w-[clamp(50%,700px,90%)]  sm:h-[55%] md:h-[65%] flex flex-col items-center m-auto px-8 py-8 rounded-xl bg-gradient-to-b from-[#9a9a9a] via-[#c0c0c0] to-[#e6e6e6] '
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-slate-600 w-full text-left '>Hello<span className="text-[#000300] font-bold">__</span></h1>
                        <div className='flex justify-start items-center text-left w-full'>
                            <p className='text-xl md:text-5xl sm:text-4xl font-bold py-4 text-slate-600'>I'am a </p>
                            <Typed
                                className='text-xl md:text-5xl sm:text-4xl font-medium md:pl-4 pl-2 text-[#000300]'
                                strings={[
                                    'Tech Enthusiast',
                                    'API Developer',
                                    'React Developer',
                                    'ML Engineer'
                                ]}
                                typeSpeed={56}
                                backSpeed={56}
                                loop />
                        </div>
                        <h1 className=' text-sm md:text-xl sm:text-md py-4 text-slate-600 text-left'>My name is <span className="text-[#df0045]">Ayan Namdeo</span> & This is my working React Project for Demonstaration. Check out my other projects on Github or contact me on Linkedin.</h1>
                    </div>
                    <div className='flex justify-center items-center w-full '>
                        <ModalButton onClick={handleClose} label="Close" />

                        <div className='text-gray-500 flex '>
                            <a href="https://github.com/Ayanneo" target="_blank">
                                <FaGithubSquare size={30} className='hover:scale-110' />
                            </a>
                            <a href="https://www.linkedin.com/in/ayan-namdeo-84a349286" target="_blank">
                                <FaLinkedin size={30} className='hover:scale-110' />
                            </a>
                        </div>

                    </div>


                </motion.div>
            )}

            {type === "flip" && (
                <motion.div
                onClick={(e) => e.stopPropagation()}
                className='w-[clamp(50%,700px,90%)]  sm:h-[55%] md:h-[65%] flex flex-col items-center m-auto px-8 py-8 rounded-xl bg-gradient-to-b from-[#9a9a9a] via-[#c0c0c0] to-[#e6e6e6] '
                variants={flip}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className='flex flex-col justify-center items-center'>
                    <h1 className=' text-slate-600 w-full text-left '>Hello<span className="text-[#000300] font-bold">__</span></h1>
                    <div className='flex justify-start items-center text-left w-full'>
                        <p className='text-xl md:text-5xl sm:text-4xl font-bold py-4 text-slate-600'>I'am a </p>
                        <Typed
                            className='text-xl md:text-5xl sm:text-4xl font-medium md:pl-4 pl-2 text-[#000300]'
                            strings={[
                                'Tech Enthusiast',
                                'API Developer',
                                'React Developer',
                                'ML Engineer'
                            ]}
                            typeSpeed={56}
                            backSpeed={56}
                            loop />
                    </div>
                    <h1 className=' text-sm md:text-xl sm:text-md  py-4 text-slate-600text-left'>My name is <span className="text-[#df0045]">Ayan Namdeo</span> & This is my working React Project for Demonstaration. Check out my other projects on Github or contact me on Linkedin.</h1>
                </div>
                <div className='flex justify-center items-center w-full '>
                    <ModalButton onClick={handleClose} label="Close" />

                    <div className='text-gray-500 flex '>
                        <a href="https://github.com/Ayanneo" target="_blank">
                            <FaGithubSquare size={30} className='hover:scale-110' />
                        </a>
                        <a href="https://www.linkedin.com/in/ayan-namdeo-84a349286" target="_blank">
                            <FaLinkedin size={30} className='hover:scale-110' />
                        </a>
                    </div>

                </div>


            </motion.div>
            )}

            {type === "newspaper" && (
                <motion.div
                onClick={(e) => e.stopPropagation()}
                className='w-[clamp(50%,700px,90%)]  sm:h-[55%] md:h-[65%] flex flex-col items-center m-auto px-8 py-8 rounded-xl bg-gradient-to-b from-[#9a9a9a] via-[#c0c0c0] to-[#e6e6e6] '
                variants={newspaper}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className='flex flex-col justify-center items-center'>
                    <h1 className=' text-slate-600 w-full text-left '>Hello<span className="text-[#000300] font-bold">__</span></h1>
                    <div className='flex justify-start items-center text-left w-full'>
                        <p className='text-xl md:text-5xl sm:text-4xl font-bold py-4 text-slate-600'>I'am a </p>
                        <Typed
                            className='text-xl md:text-5xl sm:text-4xl font-medium md:pl-4 pl-2 text-[#000300]'
                            strings={[
                                'Tech Enthusiast',
                                'API Developer',
                                'React Developer',
                                'ML Engineer'
                            ]}
                            typeSpeed={56}
                            backSpeed={56}
                            loop />
                    </div>
                    <h1 className=' text-sm md:text-xl sm:text-md  py-4 text-slate-600 text-left'>My name is <span className="text-[#df0045]">Ayan Namdeo</span> & This is my working React Project for Demonstaration. Check out my other projects on Github or contact me on Linkedin.</h1>
                </div>
                <div className='flex justify-center items-center w-full '>
                    <ModalButton onClick={handleClose} label="Close" />

                    <div className='text-gray-500 flex '>
                        <a href="https://github.com/Ayanneo" target="_blank">
                            <FaGithubSquare size={30} className='hover:scale-110' />
                        </a>
                        <a href="https://www.linkedin.com/in/ayan-namdeo-84a349286" target="_blank">
                            <FaLinkedin size={30} className='hover:scale-110' />
                        </a>
                    </div>

                </div>


            </motion.div>
            )}

        </Backdrop>
    );
}

const ModalButton = ({ onClick, label }) => (
    <motion.button
        className='text-slate-300 w-[60px] rounded-md font-medium my-6  mx-auto py-0.5 bg-black'
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        {label}
    </motion.button>
);

export default Modal
