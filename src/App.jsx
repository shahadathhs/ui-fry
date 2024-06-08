import Advantages from "./components/Advantages"
import Banner from "./components/Banner"
import Download from "./components/Download"
import Faq from "./components/Faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Testimonial from "./components/Testimonial"

function App() {

  return (
    <div className="container mx-auto font-clash">
      <Navbar />
      <Banner />
      <Features />
      <div className="mt-[800px] md:mt-[500px]">
        <Advantages />
      </div>
      <Testimonial />
      <Faq />
      <Download />
      <Footer />
    </div>
  )
}

export default App