/* import library */
import '../assets/styles/tailwind.css'
import { Outlet } from 'react-router-dom'

/* import component */
import Header from '../shared/layout/Header'
import Footer from '../shared/layout/Footer'


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
