// import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1/Navbar1';
import Navbar from './components/Nav bar/Navbar';
import LandingPage from './components/Home/Home';
import About from './components/About/About';
import Contact from "./components/Contact/Contact";
import Explore from './components/Explore/explore';
// import Gallery from './components/Gallery/gallery';
import Footer from './components/Footer/footer';
import Visited from './components/Visited/visited';



function App() {
  return (
  <div className="App">
  <>
    <Navbar1/>
    <Navbar/>
    <LandingPage/>
    <About/>
    <Contact/>
    <h1 style = {{textAlign: 'center'}}>Learn About Us</h1>
    <h3 style = {{textAlign: 'center'}}>get to know us today</h3>
    <Explore />
    <h1 style = {{textAlign: 'center'}}>Our Gallery</h1>
    <h2 style = {{textAlign: 'center'}}>Let's share memories</h2>
    <Visited />
    {/* <Gallery /> */}
    <Footer />
    
  
    
    
  </>
  </div>
  
  );
}

export default App;