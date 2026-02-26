import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";


function App() {

  return (
    <div className="overflow-x-hidden">
    
     <Header/>
     <Hero/>
     <About/>
     <Experience/>
     <Projects/>
     <Education/>
     <Skills/>
    <Certifications/>
     <Leadership/>
     <Contact/>
    
    </div>
  )
}

export default App
