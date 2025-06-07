/* import library */
import '../assets/styles/tailwind.css'
import { Outlet } from 'react-router-dom'

/* import component */
import Header from '../shared/layout/Header'
import Footer from '../shared/layout/Footer'
import { Button } from '../shared/ui/Button'
import { InputBox } from '../shared/ui/InputBox'

/* import icons */
import { LuLock } from 'react-icons/lu';


function App() {
  return (
    <>
      <Header />
      <main className='mb-auto w-10/12 max-w-4xl mx-auto'>

        <div>
          <Button 
            icon={<LuLock />}
            className='w-full'
          >
            결제하기
          </Button>
        </div>

        <div>
          <InputBox
            icon={<LuLock />}
            iconPosition="left"
            placeholder="비밀번호"
          />
        </div>

        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default App
