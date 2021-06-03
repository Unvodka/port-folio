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
                value: 50,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "stars",
                stroke: {
                  width: 6,
                  color: "#6A6D6C"
                }
              }
            }
          }}
        />
        <Navbar />
        <Header />
        <Resume />
        <Footer />
      </>
    </div>

  );
}

export default App;
