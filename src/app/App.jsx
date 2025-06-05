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
      <main className='mb-auto w-10/12 max-w-4xl mx-auto'>
        <div>
          <p>판타지 샵 테스트 코드 </p>

          <h1 className="text-3xl font-bold underline bg-blue-500">
            tailwind test
          </h1>
        </div>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default App
