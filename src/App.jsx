import './App.css'
import Aboutus from './components/AboutUs/Aboutus'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div style={{ maxWidth: '1440px', marginLeft: 'auto', marginRight: 'auto'}}>
    <Navbar/>
    <div style={{maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto'}}>
    <Banner/>
    <Categories/>
    <Aboutus/>
    <Footer/>
    </div>
    </div>
  )
}

export default App
