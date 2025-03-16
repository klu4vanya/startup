import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Auth from './components/Auth';
import Main from './components/Main';
import PathAi from './components/Projects/Path AI';
import HistArch from './components/Projects/HistArch';
import DocAI from './components/Projects/Doc AI';
import DermaSlide from './components/Products/DermaSlide';
import DentalPath from './components/Products/DentalPath';
import Covid19 from './components/Products/Covid-19';
import BreastCancer from './components/Products/BreastCancer';
import Archive from './components/Archive';
import AboutCompany from './components/AboutCompany';
import Contacts from './components/Contacts';
import Register from './components/Auth/Register';
import Canvas from './components/Canvas';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Products />}></Route>
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/auth" element={<Auth />} />
            <Route path='/main' element={<Main />} />
            <Route path='/dermaSlide' element={<DermaSlide />} />
            <Route path='/breastCr' element={<BreastCancer />} />
            <Route path='/dentalPath' element={<DentalPath />} />
            <Route path='/covid-19' element={<Covid19 />} />
            <Route path='/pathAI' element={<PathAi />} />
            <Route path='/histArch' element={<HistArch />} />
            <Route path='/docAI' element={<DocAI />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/about' element={<AboutCompany />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/register' element={<Register />} />
            <Route path='/canvas' element={<Canvas />} />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
