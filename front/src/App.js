import './App.css';
import Nav from './components/Navigation/Nav'
import Home from './components/Layout/Home';
import Main from './components/Layout/Main'
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>

       {/*<BrowserRouter>
        <Routes>
         {/* <Route path="/" element={Home} exact ></Route> */}
          {/* <Link to="/">Home</Link> */}
           {/* <Route path="/" component={Home} exact></Route>
          <Route path="/place" component={Place}></Route>
        </Routes>
      </BrowserRouter>*/}

      <Footer></Footer>
    </div>
  );
}

export default App;
