import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Tarun from './pages/Tarun'
import ModelTraining from './pages/ModelTraining'
import PageantTraining from './pages/PageantTraining'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Register from './pages/RegisterPage'

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/tarun-rajput" element={<Tarun />} />
      <Route exact path="/model-training" element={<ModelTraining />} />
      <Route exact path="/pageant-training" element={<PageantTraining />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/register" element={<Register />} />
      {/* <Route path="/about" component={Hero} />
      <Route path="/contact" component={About} /> */}
</Routes>
</BrowserRouter>


     {/* <Header />
      <Hero />
      <About />
      <Course/>
      <Modelcarousel />
      <Footer1/> */}
      
      
    </div>
  );
}

export default App;
