import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from '../../pages/v1/Home/components/Page';
import About from '../../pages/v2/About';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<About />} />
    </Routes>
    <Routes>
      <Route path='/v1/' element={<Page />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
