import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <Resume />
        <Footer />
      </>
    </div>

  );
}

export default App;
