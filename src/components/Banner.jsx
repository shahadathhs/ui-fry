import { MdSlowMotionVideo } from "react-icons/md";
import leftCircle from "../assets/images/banner/Group 35896.png";
import { FaArrowRightLong } from "react-icons/fa6";
import leftBelowImage from "../assets/images/banner/Group 35924.png";
import star from "../assets/images/banner/Star 1.png";
import threeCircle from  "../assets/images/banner/Group 35887.png";
import rightCircle from "../assets/images/banner/Ellipse 2.png";
import iphone1 from "../assets/images/banner/iPhone-13-Pro-Front.png";
import iphone2 from "../assets/images/banner/iPhone-13-Pro-Front (1).png";
import iphone3 from "../assets/images/banner/iPhone-13-Pro-Front (2).png";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 p-4">
      {/* left || top */}
      <div>
        <div className="relative">
          <img src={star} className="absolute top-0 -left-10 h-7" alt="" />
        </div>

        <div className="relative">
          <img src={leftCircle} className="h-72 md:h-80 ml-0 md:ml-10 lg:ml-14" alt="" />
          <div className="absolute bottom-0 md:bottom-5 space-y-4">
            <h3 className="capitalize font-extrabold text-3xl md:text-4xl lg:text-5xl">make the best <br /> financial decisions</h3>
            <br />
            <p className="max-w-lg text-xl">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet 
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
        
        <div className="space-x-2 py-3">
          <button className="btn btn-active btn-neutral">Get Started <FaArrowRightLong /></button>
          <button className="btn btn-outline border-0"><MdSlowMotionVideo /> Watch Video</button>
        </div>
        
        <div className="relative">
          <img src={leftBelowImage} alt="" />
          <div className="absolute top-6 left-6">
            <img src={star} alt="" />
          </div>
        </div>
      </div>

      {/* right || below */}
      <div>
        <div>
          <div className="relative">
            <img src={iphone1} className="absolute z-30 top-0 left-0 h-[400px] md:h-auto" alt="iPhone 1" />
            
            <img src={iphone2} 
            className="absolute z-20 top-4 md:top-8 lg:top-16 h-[400px]  md:h-auto
            left-8 lg:left-16" alt="iPhone 2" />
            
            <img src={iphone3} 
            className="absolute z-10 top-8 md:top-16 lg:top-32 h-[400px] md:h-[490px] lg:h-[650px] xl:h-auto
            left-16 lg:left-32" alt="iPhone 3" />
          </div>
        </div>

        <div>
          <div className="relative">
            <img src={threeCircle} alt="Three Circles" />
            <img src={rightCircle} className="absolute top-1/2 h-[200px] md:h-[250px] lg:h-[400px] right-0" alt="Right Circle" />
          </div>
        </div>

        <div className="relative">
          <img src={star} className="absolute right-4 bottom-48 h-7" alt="" />
          <img src={star} className="absolute left-4 bottom-5 h-9" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;