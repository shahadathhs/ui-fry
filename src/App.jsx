import Banner from "./components/Banner"
import Features from "./components/Features"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="container mx-auto font-clash">
      <Navbar />
      <Banner />
      <Features />
    </div>
  )
}

export default App