
import './App.css';
import Carosell from './component/Carosell';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Shoplist from './component/Shoplist';
import {Products} from './component/Data';
function App() {
  console.log(Products)
  return (
    <div className="App">
   <Navbar/>
   <Carosell/>
   <Shoplist props={Products}/>
    </div>
  );
}

export default App;
