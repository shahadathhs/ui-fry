import notification from "../assets/images/advantages/Group 35899.png";
import star from "../assets/images/advantages/Star 1.png";
import iphone from "../assets/images/advantages/iPhone-13-Pro-Front (4).png";
import threeCircle from "../assets/images/advantages/Group 35898.png";
import circle from "../assets/images/advantages/Ellipse 1.png";
import hold from "../assets/images/advantages/On Hold.png";
import rightStar from "../assets/images/advantages/star-05.png";
import iphone2 from "../assets/images/advantages/iPhone-13-Pro-Front (5).png";
import card from "../assets/images/advantages/Group (1).png";

const Advantages = () => {
  return (
    <section className="p-4" id="advantages">
      {/* part 1 */}
      <div  data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
      className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-5 mt-0 md:mt-20 mx-auto"> 
          <div>
            <h1 className="text-xl font-bold text-[#FF5555] uppercase">advantages</h1>
            <h2 className="capitalize text-3xl font-extrabold">why choose Uifry?</h2>
          </div>
          <div className="flex items-center gap-3">
            <img src={notification} className="h-9" alt="" />
            <h3 className="capitalize text-xl font-bold">clever notifications</h3>
          </div>
          <p className="max-w-sm text-gray-400">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. 
              In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et 
              blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, 
              gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse 
              aliquam.
          </p>
        </div>
        
        <div>
          <div className="relative">
            <img src={star} className="absolute top-0 right-0 h-7" alt="" />
          </div>

          <div className="relative">
            <img src={hold} 
            className="absolute z-40 top-[150px] left-[120px] w-40
            md:top-[200px] md:left-[150px] md:w-44
            lg:left-[200px] lg:w-48" alt=""
            />
            
            <img src={iphone} className="absolute z-30 top-5 left-14 md:left-16 lg:left-28 h-[400px] md:h-[500px]" alt="" />
            <img src={threeCircle} className="absolute z-20 h-[380px] md:h-[480px]" alt="" />
            <img src={circle} className="absolute z-10 h-[300px] md:h-[400px]" alt="" />
          </div>
        </div>
      </div>
      {/* part 2 */}
      <div data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
      className="grid grid-cols-1 md:grid-cols-2 mt-96 md:mt-0">
        <div>
          <div className="relative">
            <img src={star} className="absolute top-0 right-0 h-7" alt="" />
          </div>

          <div className="relative">
            <img src={card} 
            className="absolute z-40 top-[120px] left-[100px] w-40
            md:top-[150px] md:left-[120px] md:w-44
            lg:left-[170px] lg:w-48" alt=""
            />
            
            <img src={iphone2} className="absolute z-30 top-5 left-14 md:left-16 lg:left-28 h-[400px] md:h-[500px]" alt="" />
            <img src={threeCircle} className="absolute z-20 h-[380px] md:h-[480px]" alt="" />
            <img src={circle} className="absolute z-10 h-[300px] md:h-[400px]" alt="" />
          </div>
        </div>
        
        <div className="space-y-5 mt-96 md:mt-20 pt-5 mx-auto"> 
          <div className="flex items-center gap-3">
            <img src={rightStar} className="h-9" alt="" />
            <h3 className="capitalize text-xl font-bold">fully customizable</h3>
          </div>
          <p className="max-w-sm text-gray-400">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. 
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et 
            blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, 
            gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
          </p>
          <img src={star} className="pt-16 pl-64" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Advantages;