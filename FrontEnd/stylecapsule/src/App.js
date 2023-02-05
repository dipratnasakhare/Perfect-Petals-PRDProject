import "./App.css";
import { Navbar } from './components/HomePage/Navbar/Navbar';
import { Footer } from "./components/HomePage/Footer/Footer"
import { RoutesOfAllPages } from './components/Routes/Routes';
function App() {
  return (
    <div className="App">
       <Navbar />
       <RoutesOfAllPages />
       <Footer />
    </div>
  );
}

export default App;
