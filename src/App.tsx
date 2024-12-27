import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import About from './pages/About';
import FAQ from './pages/FAQ';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
