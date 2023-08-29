import React, {useState} from "react";

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>(''); 
  
  return (
    <div className='my-24'>
      <form  
        action='https://formspree.io/f/xwkdpzdn'
        method='POST'
      >
        <section className= 'body-font relative'>
          <div className='container px-5 py-6 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                Contact Me
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                Questions or comments? Please submit the below form, and I will get back to you as soon as possible.
              </p>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <div className='flex flex-wrap -m-2'>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label htmlFor='name' className='leading-7 text-sm text-gray-600'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='email'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}                      className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      htmlFor='message'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                    ></textarea>
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <button className='flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-grey-500 rounded text-lg'>
                    Submit
                  </button>
                </div>
                <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
                  <span className="inline-flex">
                    <a href='https://www.linkedin.com/in/gabriel-zapata-phd-3abb57139/' target='_blank' className='ml-4 text-gray-500'>
                      <svg
                        fill='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>   
      </form>   
    </div>
  );
};
  
  export default Contact;