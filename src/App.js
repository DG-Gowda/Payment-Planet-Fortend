import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Card from './pages/Card'
import Payment from './pages/Payment'
import Planet from './pages/Planet'
import Prepaid from './pages/Prepaid'
import {GlobalStyle} from './GlobalStyle'

import { ThemeProvider } from 'styled-components'
import Header from './layout/Header'



const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24  24 29)",
      text: "rgba(29 , 29 , 29 , 0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98, 84, 243)",
      border: "rgba(98 , 84 , 273 , 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg , rgb(132 144 255 ) 0%, rgb(98 184 252 ) 100%",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/planet" element={<Home />} />
          
          <Route path="/card" element={<Card />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/prepaid" element={<Prepaid />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}

        </Routes>
      </Router>
    </ThemeProvider>
      
    </>
  )
}

export default App