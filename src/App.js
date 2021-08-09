import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Routes } from './Routes';
import { Header } from './Header';
import { Footer } from './footer';
 
function App() {

  
  return (

    <BrowserRouter>
    <Header />
     <Routes />
     <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
