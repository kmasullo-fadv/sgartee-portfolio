import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header/Header.js';
import Home from './Home/Home.js'
import About from './About/About.js';
import Works from './Works/Works.js'
import Contact from "./Contact/Contact";
import Footer from './Footer/Footer.js'


export default function App() {
  const [isContact, setContact] = useState(false);

  const handleSetContact = () => {
    isContact ? setContact(false) : setContact(true);
  }

  return (
    <>
      <div id="app">
        <Route path='/'><Header props={{isContact, handleSetContact}}/></Route>
        <Route component={Home} exact path='/' />
        <Route component={About} exact path='/about' />
        <Route component={Works} exact path='/works' />
        <Route path='/'><Contact props={{isContact, setContact}}/></Route>
        <Route component={Footer} path='/' />
      </div>
    </>
  );
}