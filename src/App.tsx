import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import { FilterContextProvider } from './context/FiliterContxt';


export default function App() {
  return (
    <div>
      <FilterContextProvider>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
      </Routes>
      </Layout>
    </BrowserRouter>
      </FilterContextProvider>
    </div>
  )
}
