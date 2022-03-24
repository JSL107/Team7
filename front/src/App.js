import './App.css';
import Footer from './components/Layout/Footer';
import Home from './components/Layout/Home';
import Nav from './components/Navigation/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Place from './components/Layout/Place';

function App() {
  return (
    <div className="App">
      <Nav />
       <BrowserRouter>

        <Routes>
         <Route path="/" element={<Home/>}> </Route> 
         <Route path="/Layout/Place" element={<Place/>}> </Route>
        </Routes>

      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
