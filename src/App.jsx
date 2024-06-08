import Advantages from "./components/Advantages"
import Banner from "./components/Banner"
import Features from "./components/Features"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="container mx-auto font-clash">
      <Navbar />
      <Banner />
      <Features />
      <div className="mt-[800px] md:mt-[500px]">
        <Advantages />
      </div>
    </div>
  )
}

export default App