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

function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Experience/>
     <Projects/>
     <Education/>
     <Skills/>
     <Contact/>
    </>
  )
}

export default App
