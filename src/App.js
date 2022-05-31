import React from 'react';
import { MAINROUTE } from './Types/routeTypes';
import Main from './Apps/Pages/Main';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
const App = () => {
  return (
    <div>
      <Routes>
        <Route index path={MAINROUTE} element={<Main/>}/>
      </Routes>
    </div>
  );
};

export default App;