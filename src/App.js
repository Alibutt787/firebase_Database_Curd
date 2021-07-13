import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Routes } from './Routes';
 
function App() {
  return (


    <BrowserRouter>
     <Routes/>
     <div class="footer">
  <p>Created By <b>Squard &copy;</b> 2021</p>
</div>
    </BrowserRouter>

   
  );
}

export default App;
