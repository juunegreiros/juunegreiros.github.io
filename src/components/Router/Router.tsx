import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from '../../pages/v1/Home/components/Page';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/v1/' element={<Page />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
