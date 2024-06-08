import threeCircle from "../assets/images/testimonials/Group 35898.png";
import circle from "../assets/images/testimonials/Ellipse 1.png";
import profile1 from "../assets/images/testimonials/Ellipse 42.png";
import profile2 from "../assets/images/testimonials/Ellipse 43.png";
import profile3 from "../assets/images/testimonials/Ellipse 44.png";
import profile4 from "../assets/images/testimonials/Ellipse 45.png";
import profile5 from "../assets/images/testimonials/Ellipse 41.png";
import png from "../assets/images/testimonials/“.png";
import star from "../assets/images/testimonials/Star 1.png";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/Testimonials.json")
    .then(res => res.json())
    .then(data => {
      setTestimonials(data)
    })
  },[])
  //console.log(testimonials)


  return (
    <section className="p-4">
      <div className="max-w-sm mx-auto text-center space-y-3">
        <h2 className="uppercase text-xl font-bold">testimonial</h2>
        <h3 className="capitalize text-3xl font-extrabold">what our users <br /> say about us?</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          {/* top left */}
          <img src={profile1} className="absolute z-30 h-44 top-5 lg:top-10 lg:left-10" alt="" />
          {/* top right */}
          <img src={profile2} className="absolute z-30 h-44 top-5 md:top-10 xl:top-14 right-0" alt="" />
          {/* bottom right */}
          <img src={profile3} className="absolute z-30 h-44 top-52 lg:top-[320px] xl:top-[400px] right-0" alt="" />
          {/* bottom left */}
          <img src={profile4} className="absolute z-30 h-44 top-52 lg:top-72 xl:top-[420px] left-5 lg:left-14 xl:left-20" alt="" />
          {/* center */}
          <img src={profile5} className="absolute z-30 h-52 lg:h-64 xl:h-72 top-24 xl:top-56 left-20 md:left-24 lg:left-32 xl:left-44" alt="" />
          <img src={png} className="absolute z-30 bg-[#FF5555] p-4 lg:p-8 rounded-full top-24 xl:top-56 left-20 md:left-24 lg:left-32 xl:left-44" alt="" />
          
          <img src={star} className="absolute top-96" alt="" />

          <img src={threeCircle} className="absolute z-20" alt="" />
          <img src={circle} className="absolute z-10 xl:top-44" alt="" />
        </div>
        
        <div className="h-[500px] p-9 mt-96 md:mt-0">
          <div className="carousel w-full h-full">
            {
              testimonials.map(testimonial => 
                <div id={testimonial.id} key={testimonial.id} 
                className="carousel-item w-full flex-col pt-24 md:pt-10 mt-4">
                  <h1 className="capitalize text-3xl font-extrabold max-w-sm">{testimonial.reviewTitle}</h1>
                  <br />
                  <p className="text-lg text-gray-500  max-w-sm">{testimonial.review}</p>
                  <br />
                  <p className="uppercase text-xl font-extrabold">{testimonial.name}</p>
                </div> 
              )
            }
          </div> 
          
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1"><img src={profile1} className="w-20" alt="" /></a> 
            <a href="#item2"><img src={profile2} className="w-24" alt="" /></a> 
            <a href="#item3"><img src={profile3} className="w-20" alt="" /></a> 
            <a href="#item4"><img src={profile4} className="w-20" alt="" /></a>
            <a href="#item5"><img src={profile5} className="w-14" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;