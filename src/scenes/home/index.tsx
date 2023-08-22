import archer from '@/assets/archer.png';

const Home = () => {

  return (
    <div className="mx-20 my-32">
      {/* <div className="flex justify-center items-center"> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:order-1">
          <img src={archer} alt="Image" id="headshot" className="mx-auto md:mx-0"/>
        </div>
        <div className="md:order-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod augue ut imperdiet mollis. Integer eu lacinia quam, id scelerisque eros. In mollis, magna ut varius efficitur, quam mi posuere mauris, eget malesuada risus nulla molestie libero. Vivamus varius, libero nec condimentum commodo, est leo consectetur magna, eget mattis massa dolor vitae odio. Etiam nibh ex, convallis scelerisque ipsum vel, aliquet lacinia magna. In tincidunt iaculis mi ac varius. Nam eleifend dui ex, ut dictum purus sodales ut. Nam ornare mattis nisi nec sagittis. Praesent tempor maximus nunc eget placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque auctor mi vitae vehicula varius. Donec feugiat risus finibus lorem ornare, sit amet tincidunt tortor cursus. Nam vitae lobortis erat, vel porta mauris. Nam magna nunc, sodales id maximus at, euismod ut nisl. Maecenas ac est faucibus, dictum metus vel, molestie dui. Nunc eu aliquam metus, in placerat lorem.
        </div>
      </div>
      </div>
    // </div>
  );
};

export default Home;
