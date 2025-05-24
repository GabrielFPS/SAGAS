
import './App.css'
import Layout from './Layout';
import Contact from './pages/Contact';
import { Features } from './pages/Feature';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicios" element={<Features />} />
        <Route path="/contactenos" element={<Contact />} />
      </Routes>
    </Layout> 
    </>
  )
}

export default App
