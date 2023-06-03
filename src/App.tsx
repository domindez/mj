import React from 'react';
import Contact from './components/Contact';
import Doctoralia from './components/Doctoralia';
import Experiene from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Services from './components/Services';
import './sass/App.scss';
import Facebook from './components/Facebook';

function App() {
  return <div className='App'>
    <Header />
    <Main />
    <Doctoralia />  
    <Services />
    <Experiene />
    <Facebook />
    <Contact />
    <Footer />
  </div>;
}

export default App;
