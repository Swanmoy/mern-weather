import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/navbar.component.js";
import Home from "./Components/home.component.js";
import Weather from "./Components/weather.component.js";
import AboutUs from "./Components/aboutUs.component.js";
import Footer from "./Components/footer.component.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarComp />
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/weather' component={Weather} />
        <Route path='/aboutus' component={AboutUs} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
