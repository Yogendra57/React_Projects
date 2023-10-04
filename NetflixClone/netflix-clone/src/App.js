import NetflixImage from "./NetflixImage";
// import PrimeImage from "./NetflixImage";
import './App.css';
import "./NetflixImage.css";
import BoxX from "./BoxX";
import PrimeDropDown from "./PrimeDropDown";
import PrimeNavbar from "./PrimeNavbar";



function App() {
  return (
    <div className="App">
   <div><PrimeNavbar/></div>
  <div>
   <NetflixImage/></div>
  <BoxX/>

    </div>
  );
}

export default App;
