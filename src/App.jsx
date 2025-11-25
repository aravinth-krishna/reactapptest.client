import "./App.css";
import HomeNavbar from "./components/HomeNavbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Team from "./components/Team";
import GetStarted from "./components/GetStarted";
import HomeFooter from "./components/HomeFooter";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <Hero />
      <Features />
      <Team />
      <GetStarted />
      <HomeFooter />
      <Signin />
      <Signup />
    </div>
  );
}

export default App;
