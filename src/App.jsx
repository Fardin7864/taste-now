import './App.css'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div style={{ maxWidth: '1440px', marginLeft: 'auto', marginRight: 'auto'}}>
    <Navbar/>
    <div style={{maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '200px'}}>
    <Banner/>
    <Categories/>
    </div>
    </div>
  )
}

export default App
