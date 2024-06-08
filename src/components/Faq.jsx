import { useEffect, useState } from "react";
import star from "../assets/images/faq/Star 1.png"

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/Faq.json")
    .then(res => res.json())
    .then(data => {
      setFaqs(data)
    })
  },[])
  //console.log(faqs)

  return (
    <section className="mt-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="pt-16 space-y-5 max-w-md mx-auto">
          <h2 className="text-xl font-bold text-[#FF5555]">FAQ</h2>
          <h1 className="capitalize text-3xl font-extrabold">Frequently asked  questions</h1>
        </div>
        <div className="pt-[100px] mx-auto">
          <img src={star} alt="" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {
          faqs.map((faq, index) =>
            <div key={index} className="max-w-md mx-auto p-4 space-y-3 rounded-lg bg-[#FF5555] text-white">
              <h1 className="font-bold capitalize text-xl">{faq.question}</h1>
              <p>{faq.answer}</p>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Faq;