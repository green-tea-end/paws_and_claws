import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import MainContent from './components/MainContent'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Table from './components/Table'
import styles from './styles/App.module.css';

export default function App() {
  return (
      <Router>
          <div className={styles.appContainer}>
              <Header />
              <div className={styles.mainContent}>
                  <Routes>
                      <Route path="/" element={<><MainContent /> <ContactForm /></>} />
                      <Route path="/table" element={<Table />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  )
}

