import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CRUDModal1 from './CRUDModal1';
const routerConainer = [{ path: '/', element: <CRUDModal1 /> }];
const NormalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routerConainer.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default NormalRoutes;
