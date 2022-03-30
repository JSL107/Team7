import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Navigation/Nav';
import CalenderModal from './components/Layout/CalenderModal';
import Home from './components/Layout/Home';
import Result from './components/Store/Result'
import Reserve from './components/Store/Reserve'
import Place from './components/Layout/Place';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">

       <BrowserRouter>


        {/* Nav 입력 데이터를 App.js -> 전부 props화 ->   */}
        
         <Nav>
            <CalenderModal/>
         </Nav>
        <Routes>
         <Route path="/" element={<Home/>}> </Route> 
         <Route path="/Store/Result" element={<Result/>}> </Route>
         <Route path="/Store/Reserve" element={<Reserve/>}> </Route>  
         <Route path="/Layout/Place/:id" element={<Place/>}> </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
