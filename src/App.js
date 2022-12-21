import './App.css';
import Home from './feature/home/home';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Contact from './feature/contact/contact';
import About from './feature/about/about';
import Layout from './feature/layout/layout';
import Gallery from './feature/gallery/gallery';

function App() {
  return (
    <Router>
       <Layout>
      <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes> 
      </Layout>
    </Router>
  );
}

export default App;
