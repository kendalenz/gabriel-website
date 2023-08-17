const Art = () => {

    return (

      <div className="">
      <div className="flex flex-wrap -mx-4">
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-8 mx-8">
          <img src="src/assets/art2.jpg" alt="Photo 1" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100">
            <p className="text-white text-center">Description for Photo 1</p>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-8 mx-8">
          <img src="src/assets/art1.jpg" alt="Photo 2" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100">
            <p className="text-white text-center">Description for Photo 2</p>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Art;