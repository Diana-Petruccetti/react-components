import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importa componenti
import AppHeader from './components/AppHeader.jsx'
import AppMain from './components/AppMain.jsx'
import AppFooter from './components/AppFooter.jsx'
function App() {

  return (
    <div>
      {/* Usa i componenti per il layout */}
      <AppHeader />
      <AppMain />
      <AppFooter />

    </div>
  )
}

export default App
