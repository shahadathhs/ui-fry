import { IoLogoApple } from "react-icons/io";
import circle from "../assets/images/download/Group 1000002356.png";
import star from "../assets/images/download/Star 1.png";
import i1 from "../assets/images/download/1.png";
import i2 from "../assets/images/download/2.png";
import i3 from "../assets/images/download/3.png";
import whiteStar from "../assets/images/download/Star 7.png";

const Download = () => {
  return (
    <section className="p-2 md:p-4 mt-8">
      <div className="relative">
        <img src={circle} className="w-[250px] absolute  -top-24 -left-24" alt="" />
        <img src={star} className="absolute  -top-14 right-0 lg:-right-10" alt="" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 bg-black 
        rounded-lg text-white relative h-[600px] md:h-[450px] md:items-center">
          <div className="max-w-md md:max-w-lg mx-auto space-y-3 p-8 md:p-16">
            <h1 className="capitalize text-3xl font-extrabold">ready to get started?</h1>
            <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
            <button className="btn">Download <IoLogoApple /></button>
            <img src={whiteStar} className="absolute md:left-24 lg:left-96 top-60 md:top-[350px] lg:top-56 w-11" alt="" />
            <img src={whiteStar} className="absolute left-56 md:left-96 lg:left-[600px] top-40 md:top-28 w-7" alt="" />
          </div>
          
          <div>
            <img src={i1} className="absolute z-30  right-20 md:right-28 top-72 md:top-20 h-[270px] md:h-[360px]" alt="" />
            <img src={i2} className="absolute z-20 right-0 top-64 md:top-4 h-[300px] md:h-[420px]" alt="" />
            <img src={i3} className="absolute z-10 right-0 top-64 md:top-4 h-[270px] md:h-[380px]" alt="" />
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Download;