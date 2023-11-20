
import { motion, useAnimation } from 'framer-motion';
import AbstractExpressionism1 from '@/assets/abstract-expressionism-1.jpg';
import AbstractExpressionism2 from '@/assets/abstract-expresssionism-2.jpg';
import AbstractExpressionism3 from '@/assets/abstract-expressionism-3.jpg';
import { useEffect } from 'react';

const Art = () => {

  const controls1 = useAnimation();

  useEffect(() => {
    controls1.start('visible');
  }, [controls1]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className='my-32 mx-2 md:mx-20'>
      <motion.div
        initial='hidden'
        animate={controls1}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className='mb-4'>
          Dr. Zapata explores new forms of expressionism and abstract art using mixed mediums on canvas. His creations represent the world as dynamic, complex, chaotic invariants and infinitely expressive mental forms. He seeks to engage viewers in a dialogue with the ineffable.
        </p> 
        <p className='mb-4'>
          He studied draftsmanship, painting, and sculpting at the Art Students League of New York. 
        </p>
      </motion.div>
      <h1 className='text-2xl xs:text-center sm:text-center md:text-left'>Neo-Idealism</h1>
      <div className='flex flex-wrap justify-start'>
        <motion.div 
          className='flex flex-wrap sm:justify-center md:justify-start mt-5'
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          variants={container}
        >
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-8 mx-8'>
            <div className='relative z-10'>
              <img src={AbstractExpressionism1} alt='Untitled Abstract Expressionism 1' className='w-full h-auto rounded-lg max-w-full'/>
              <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100 rounded-lg'>
                <h4 className='text-white text-center'>Untitled 1</h4>
                {/* <p className='text-white text-center'>Description</p> */}
              </div>
            </div>
          </div>
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-8 mx-8 z-0'>
            <div className='relative z-0'>
              <img src={AbstractExpressionism2} alt='Untitled Abstract Expressionism 2' className='w-full h-auto rounded-lg max-w-full z-0'/>
              <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100 rounded-lg'>
                <h4 className='text-white text-center'>Untitled 2</h4>
                {/* <p className='text-white text-center'>Neo-abstract Idealism</p> */}
              </div>
            </div>
          </div>
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-8 mx-8 z-0'>
            <div className='relative z-0'>
              <img src={AbstractExpressionism3} alt='Untitled Abstract Expressionism 3' className='w-full h-auto rounded-lg max-w-full z-0'/>
              <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100 rounded-lg'>
                <h4 className='text-white text-center'>Untitled 3</h4>
                {/* <p className='text-white text-center'>Neo-abstract Idealism</p> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Art;