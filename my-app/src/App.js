// import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact/Contact";
import Explore from './components/Explore/explore';
import Gallery from './components/Gallery/gallery';
import Footer from './components/Footer/footer';
import About from './components/About/About';

function App() {
  return (
  <div className="App">
  <>
    
    <h1 style = {{textAlign: 'center'}}>Learn About Us</h1>
    <h3 style = {{textAlign: 'center'}}>get to know us today</h3>
    <Explore />
    <h1 style = {{textAlign: 'center'}}>Our Gallery</h1>
    <h2 style = {{textAlign: 'center'}}>Let's share memories</h2>
    <Gallery/>
    <Footer />
    <Contact/>
    <About/>
    
  </>
  </div>
  
  );
}

export default App;