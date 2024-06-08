import threeCircle from "../assets/images/features/Group 35898.png";
import leftCircle from "../assets/images/features/Group 35930.png";
import iphone from "../assets/images/features/iPhone-13-Pro-Front (3).png";
import star from "../assets/images/features/Star 1.png";
import rightStar from "../assets/images/features/star-05.png";
import icon from "../assets/images/features/Icon.png";
import cube from "../assets/images/features/cube-04.png";
import rightCircle from "../assets/images/features/Group 35897.png";

const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 relative" id="feature">
      {/* left || top */}
      <div className="mt-8 md:mt-0">
        <div className="relative">
          <img src={star} className="absolute top-0 -left-10 h-7" alt="" />
        </div>

        <div className="relative">
          <img src={iphone} className="absolute z-30 top-5 left-14 md:left-16 lg:left-28 h-[400px] md:h-[500px]" alt="" />
          <img src={threeCircle} className="absolute z-20 h-[380px] md:h-[480px]" alt="" />
          <img src={leftCircle} className="absolute z-10 h-[300px] md:h-[400px]" alt="" />
        </div>
      </div>

      {/* right || below */}
      <div>
        <img src={rightCircle} className="absolute top-96 md:top-0 right-0" alt="" />
      </div>
      <div className="space-y-4 lg:space-y-8 p-4 absolute top-96 md:top-0 md:right-0 lg:right-16 max-w-sm lg:max-w-md">
        {/* heading */}
        <div>
          <h2 className="text-xl font-bold text-[#FF5555]">Features</h2>
          <p className="capitalize text-3xl font-extrabold">uifry premium</p>
        </div>
        {/* features */}
        <div className="max-w-md space-y-2">
          <div className="flex items-center gap-3">
            <img src={rightStar} alt="" />
            <h3 className="capitalize text-xl">budgeting intervals</h3>
          </div>
          <p className="text-gray-400">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem.
          </p>
        </div>
        <div className="max-w-md space-y-2">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" />
            <h3 className="capitalize text-xl">budgeting intervals</h3>
          </div>
          <p className="text-gray-400">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem.
          </p>
        </div>
        <div className="max-w-md space-y-2">
          <div className="flex items-center gap-3">
            <img src={cube} alt="" />
            <h3 className="capitalize text-xl">budgeting intervals</h3>
          </div>
          <p className="text-gray-400">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;