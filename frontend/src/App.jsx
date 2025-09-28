import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import MainContent from './components/MainContent'
import ContactForm from './components/ContactForm'
import Table from './components/Table'
import Quiz from './components/Quiz'
import About from './components/About'
import Footer from './components/Footer'
import styles from './styles/App.module.css';

export default function App() {
  return (
      <Router>
          <div className={styles.appContainer}>
              <Header />
              <div className={styles.mainContent}>
                  <Routes>
                      <Route path="/" element={<MainContent />} />
                      <Route path="/table" element={<><Quiz /> <Table /></>} />
                      <Route path="/contact" element={<ContactForm />} />
                      <Route path="/about" element={<About />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  )
}

