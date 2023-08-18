import art2 from '@/assets/art2.jpg';
import art1 from '@/assets/art1.jpg';

const Art = () => {
  return (
    <div className="flex flex-wrap">
      <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-8 mx-8">
        <div className="relative">
          <img src={art2} alt="Photo 2" className="w-full h-auto rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100 rounded-lg">
          <h4 className="text-white text-center">Title</h4>
          <p className="text-white text-center">Description</p>
        </div>
        </div>
      </div>
      <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-8 mx-8">
        <div className="relative">
          <img src={art1} alt="Photo 1" className="w-full h-auto rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100 rounded-lg">
          <h4 className="text-white text-center">Title</h4>
          <p className="text-white text-center">Description</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
