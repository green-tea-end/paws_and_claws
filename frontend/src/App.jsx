import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import ContactForm from './components/ContactForm'
import './styles/App.module.css';



export default function App() {
  return (
    <>
      <Header />
      <MainContent />
      <ContactForm />

    </>
  )
}

