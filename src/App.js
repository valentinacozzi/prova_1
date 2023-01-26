import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Project from './components/pages/Project_pages/Project';
import About from './components/pages/About_pages/About';
import Corpus from './components/pages/Corpus_pages/Corpus';
import Maps from './components/pages/Maps_pages/Maps';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';
import ScrollToTop from './components/ScrollToTop';
import Profile from './components/pages/Profile_pages/Profile';
import Places from './components/pages/Maps_pages/Places';
import HeritageRoutes from './components/pages/Maps_pages/HeritageRoutes';
import Travellers from './components/pages/Maps_pages/Travellers';

function App() {
  return (
    <>
      <Router>
        {/*<ScrollToTop/>*/}
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/project' element={<Project/>}/> {/*Use path #0 qui e nel data se non voglio che quando clicco si apra tutto e non solo il dropdown*/}
              <Route path='/project/#unicitta>' element={<h2/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/corpus' element={<Corpus/>}/>
          <Route  path='/maps' element={<Maps/>}/>
              <Route  path='/maps/places' element={<Places/>}/>
              <Route  path='/maps/routes' element={<HeritageRoutes/>}/>
              <Route  path='/maps/travellers' element={<Travellers/>}/>
          <Route  path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
        <Bottom/>
      </Router>
    </>
  );
}

export default App;