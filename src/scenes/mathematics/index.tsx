const Mathematics = () => {

  return (
    <div className='mx-20 my-32'>
      Dr. Zapata holds a PhD in Mathematics from The Graduate Center, City University of New York. Euismod lacinia at quis risus sed vulputate. Nunc non blandit massa enim nec. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Diam sollicitudin tempor id eu nisl nunc. Aliquam sem et tortor consequat id. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Sagittis vitae et leo duis ut. In egestas erat imperdiet sed euismod nisi porta. Molestie at elementum eu facilisis sed odio morbi quis commodo.
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
          <a href='https://academicworks.cuny.edu/gc_etds/2030/' className='text-center underline hover:text-grey-500'>"Rewriting Methods in Groups with Applications to Cryptography"</a>
        </div>
      </div>
    </div>
  );
};
  
export default Mathematics;