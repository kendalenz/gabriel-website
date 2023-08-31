import {motion} from 'framer-motion';
import DownloadPDF from '../Papers';

const Mathematics = () => {

  return (
    <div className='mx-20 my-32'>
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
        <p className='mb-4'>
          Dr. Zapata holds a PhD in Mathematics from The Graduate Center, City University of New York. He helped develop the foundations of non-commutative, post-quantum group-based cryptography, and designed the generalized Diffie Helman key exchange, promoting the potential use of decision problems in the field while describing the first axioms for algebraic cryptography. 
        </p>
        <p className='mb-4'>
          His professional journey is defined by a dual commitment to advance in his field through innovative research and to cultivate youth through teaching and mentorship. His research endeavors center around the nuances of non-commutative algebra, advancing the exploration of cryptographic protocols and encryption algorithms. Many of his colleagues have applied his work to create patents, such as using his seminal work on the semidirect product of groups and rewriting systems. He embraces a relentless commitment to lifelong learning, ensuring he remains at the vanguard of the fields he loves.
        </p>
        <p>
          Dr. Zapata's desire to share his knowledge motivated him to pursue teaching. As an educator, he brings a deep dedication to instilling a profound appreciation for mathematics within students. He employs a blend of engaging pedagogical methods, interactive coursework, and personalized mentorship to equip the next generation with the analytical and problem-solving skills essential for excellence. He believes strongly in promoting social mobility among underrepresented groups through facilitating equity, diversity, and inclusion in higher education. 
        </p>
      </motion.div>
      <motion.div
        className='relative mt-16 basis-2/5 md:mt-0'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className='flex flex-col items-start my-8'>
          <div className='flex items-center'>
            <svg 
              className='mr-2'
              width='40'
              fill='#4682B4'
              clipRule='evenodd'
              fillRule='evenodd' 
              strokeLinejoin='round' 
              strokeMiterlimit='2'
              viewBox='0 0 24 24' 
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z' fillRule='nonzero'/>
            </svg>
            <h1 className='text-2xl'>Dissertation</h1>
          </div>
          <div className='mt-2'>
            <a href='https://academicworks.cuny.edu/gc_etds/2030/' target='_blank' className='text-center underline hover:text-grey-500'>"Rewriting Methods in Groups with Applications to Cryptography"</a>
          </div>
        </div>
        <div className='flex flex-col items-start my-8'>
          <div className='flex items-center'>
            <svg 
              className='mr-2'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px' 
              width='40'
              fill='#4682B4'
              viewBox='0 0 24 24'
            >
            <path d='M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z'></path>
            </svg>
              <h1 className='text-2xl'>Papers</h1>
          </div>
          <div className='mt-2'>
            <DownloadPDF />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
  
export default Mathematics;