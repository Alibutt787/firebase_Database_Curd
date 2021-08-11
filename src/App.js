import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Header } from "./Header";
import { Footer } from "./footer";
import ScrollUpButton from "react-scroll-up-button";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
      <ScrollUpButton
      StopPosition={0}
      ShowAtPosition={90}
      EasingType='easeOutCubic'
      AnimationDuration={1400}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
      style={{backgroundColor:'#0e76af'}}
      ToggledStyle={{}}
    />
    </BrowserRouter>
  
  );
}

export default App;
