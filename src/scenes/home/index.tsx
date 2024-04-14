import GabrielZapata from '@/assets/gabriel-zapata.jpeg';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Home = () => {

  const animationControl = useAnimation();

  useEffect(() => {
    animationControl.start({ opacity: 1, x: 0 });
  }, []);

  return (
    <div className='mx-20 my-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='md:order-1'>
            <img src={GabrielZapata} alt='Image' id='headshot' className='mx-auto md:mx-0'/>
          </div>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 50 }}
         animate={animationControl}
         transition={{ duration: 0.5, delay: 0.2 }}
         className='md:order-2'
        >
          <div className='md:order-2'>
            <h1 className='text-4xl font-bold mb-4'>About</h1>
            <p className='mb-4'>
            Gabriel Zapata, PhD is a mathemetician and artist living in New York City. He helped develop the foundations of non-commutative, post-quantum group-based cryptography, and designed the generalized Diffie Helman key exchange, promoting the potential use of decision problems in the field while describing the first axioms for algebraic cryptography. 
            </p>
            <p>
            Dr. Zapata is passionate about teaching and is committed to nurturing his students' intellectual and creative capacities and fostering a deep-seated appreciation for mathematics. He uses dynamic teaching methods, interactive coursework, and personalized guidance to equip his students with the critical analytical and problem-solving skills necessary for achieving excellence. 
            </p>
            <br></br>
            <p>
            In his free time, Dr. Zapata explores new forms of expressionism and abstract art using mixed mediums on canvas. His creations represent the world as dynamic, complex, chaotic invariants and infinitely expressive mental forms. 
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;