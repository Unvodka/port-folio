import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/index";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Particles from "react-particles-js"
import { buildQueries } from '@testing-library/dom';


function App() {
  return (
    <div className="App">
      <>
        <Home />
        <Particles 
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "square",
                stroke: {
                  width: 6,
                  color: "#555857"
                }
              }
            }
          }}
        />
        <Navbar />
        <Header />
        <div className="experiences"><h2>EXPERIENCES</h2></div>
        <Resume />
        <Footer />
      </>
    </div>

  );
}

export default App;
