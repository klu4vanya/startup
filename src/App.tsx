import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Auth from './components/Auth';

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
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
