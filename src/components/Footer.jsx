import logo from "../assets/images/footer/Group.png";
import email from "../assets/images/footer/Frame.png";
import phone from "../assets/images/footer/Frame (1).png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
    className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 p-4 justify-evenly w-full">
        <div className="space-y-3 md:mx-auto">
          <img src={logo} alt="" />
          <div className="flex gap-3">
            <img src={email} alt="" />
            <p className="text-lg">help@frybix.com</p>
          </div>
          <div className="flex gap-3">
            <img src={phone} alt="" />
            <p className="text-lg">+1234 345 456</p>
          </div>
        </div>
        
          <div className="flex flex-col space-y-3 md:mx-auto">
            <h1 className="text-2xl font-bold">Links</h1>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Pricing</a>
            <a href="">Faq</a>
          </div>
        
          <div className="flex flex-col space-y-3 md:mx-auto">
            <h1 className="text-2xl font-bold">Legal</h1>
            <a href="">Terms Of Use</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
          </div>

          <div className="flex flex-col space-y-3 md:mx-auto">
            <h1 className="text-2xl font-bold">Product</h1>
            <a href="">Take Tours</a>
            <a href="">Live Chat</a>
            <a href="">Reviews</a>
          </div>

          <div className="flex flex-col space-y-3 md:mx-auto md:col-span-2 xl:col-span-1">
            <h1 className="text-2xl font-bold">Newsletter</h1>
            <p className="font-semibold text-lg">Stay Up to Date</p>
            <div className="flex">
              <input className="input input-bordered" placeholder="Email"/>
              <button className="btn btn-active btn-neutral -ml-24">Subscribe</button>
            </div>
          </div>
      </div>
      
      <div>
        <hr className="border-t-2" />
        <p className="text-center text-xl p-5 text-gray">Copyright 2024 uifry.com all rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;