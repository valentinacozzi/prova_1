import React, {Suspense, useState} from 'react';
import './App.css';
// Router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';
// Components
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Project from './components/pages/Project_pages/Project';
import About from './components/pages/About_pages/About';
import Corpus from './components/pages/Corpus_pages/Corpus';
import Maps from './components/pages/Maps_pages/Maps';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import Profile from './components/pages/Profile_pages/Profile';
import Places from './components/pages/Maps_pages/Places';
import HeritageRoutes from './components/pages/Maps_pages/HeritageRoutes';
import Travellers from './components/pages/Maps_pages/Travellers';
import ProfileDetails from './components/pages/Profile_pages/ProfileDetails';
import Team from './components/pages/About_pages/Team';
import Signin from './components/pages/Profile_pages/Signin';
import Signup from './components/pages/Profile_pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
//Translation imports
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import Loading from './components/Loading';
import { useTranslation } from "react-i18next";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  return (
    <>
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
        <Router>
          {/*<ScrollToTop/>*/}
          <Navbar />
          <AuthContextProvider>
            <Routes>
              <Route  path='/' element={<Home/>}/>
              <Route  path='/project' element={<Project/>}/> {/*Use path #0 qui e nel data se non voglio che quando clicco si apra tutto e non solo il dropdown*/}
                  <Route path='/project/univocitta' element={<h2/>}/>
                  <Route path='/project/aim' element={<h2/>}/>
              <Route  path='/about' element={<About/>}/>
                  <Route path='/about/team>' element={<Team/>}/>
                  <Route path='/about/partners>' element={<h2/>}/>
                  <Route path='/about/contacts>' element={<h2/>}/>
              <Route  path='/corpus' element={<Corpus/>}/>
                  <Route path='/about/:team>' element={<h2/>}/>
                  <Route path='/about/:partners>' element={<h2/>}/>
                  <Route path='/about/:contacts>' element={<h2/>}/>
              <Route  path='/maps' element={<Maps/>}/>
                  <Route  path='/maps/places' element={<Places/>}/>
                  <Route  path='/maps/routes' element={<HeritageRoutes/>}/>
                  <Route  path='/maps/travellers' element={<Travellers/>}/>
              <Route  path='/signup' element={<Signup/>}/>
              <Route  path='/signin' element={<Signin/>}/>
                <Route  path='/signin/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/> {/*needs to be protected route*/}
                <Route  path='/signin/profile/details' element={<ProtectedRoute><ProfileDetails/></ProtectedRoute>}/>
            </Routes>
            </AuthContextProvider>
          <Footer/>
          <Bottom/>
        </Router>
      </Suspense>
    </LocaleContext.Provider>
    </>
  );
}

export default App;