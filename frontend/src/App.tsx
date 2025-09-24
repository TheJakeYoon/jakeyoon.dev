import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import SimpleNavbar from './components/SimpleNavbar'
import Footer from './components/Footer'

function App(props: { disableCustomTheme?: boolean }) {

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SimpleNavbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer/>
    </AppTheme>
    
  )
}

export default App