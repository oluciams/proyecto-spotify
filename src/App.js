import React from 'react';
import './App.css';
import { ArtistsContextProvider } from './context/ArtistsContext';
import {Route, Routes} from 'react-router-dom';
import { Header} from './components/Header';
import { Search } from './components/Search';
import { Albums } from './components/Albums';
import { Footer } from './components/Footer';

export const App = () => { 
  
  return (

    <ArtistsContextProvider>
      <Header/>
      <Routes> 
        <Route path="/" element={<Search/>}/>     
        <Route path="albums" element={<Albums/>}/>         
      </Routes>
      <Footer/>    
    </ArtistsContextProvider>     
    
  );
}

