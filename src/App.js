import React,  { useEffect, useState } from "react";
import "./styles/App.scss";
import { Route } from 'react-router-dom'
import Header from './components/Header/Header';
import { bodyReset } from './animations/animations'
//? pages
import Home from "./pages/Home";
import Approach from './pages/Approach';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Services from './pages/Services';
import Navigation from './components/Navigation/Navigation';

const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
  {path: '/approach', name: 'Approach', Component: Approach},
  {path: '/services', name: 'Services', Component: Services},
  {path: '/about', name: 'About', Component: About}
]

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {

  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    bodyReset()
    let vh = dimension.height
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

  return (
    <>
    <Header dimension={dimension} />
    <div className='App'>
      {
        routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))
      }      
    </div>
    <Navigation />
    </>
  );
}

export default App;
