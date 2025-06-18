import { useSelector } from "react-redux";

/* import components */
import { Button } from '../../../ui/Button'
import { InputBox } from '../../../ui/InputBox'

/* import assets */
import logoImg from '../../../../assets/images/logo.png'
import { LuMail } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";


const NewsLetter = () => {
  const shopName = useSelector((state) => state.company.companyData.companyName);

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center'>
        <img src={logoImg} className='w-12' alt='fantasyshop' />
        <div className='text-2xl font-semibold whitespace-nowrap pr-5'>{shopName}</div>
        <div className='text-lg font-semibold whitespace-nowrap'>뉴스레터 구독</div>
      </div>

      <div className='flex justify-center mt-4' >
        <div className='flex gap-2'>
          <InputBox
            type='email'
            name='newsletter-email'
            id='newsletter-email'
            placeholder='이메일을 입력하세요.'
            icon={<LuMail />}
            className='text-sm w-65'
          />
          <Button
            className='text-sm'
          >
            구독하기
          </Button>
        </div>
      </div>

      <div className='flex justify-end items-center'>
        <div className='flex justify-end'>
          <div className='flex gap-2 mt-4 text-gray-400' >
            <div className='hover:text-indigo-500'> {<LuTwitter />} </div>
            <div className='hover:text-indigo-500'> {<LuFacebook />} </div>
            <div className='hover:text-indigo-500'> {<LuInstagram />} </div>
            <div className='hover:text-indigo-500'> {<LuGithub />} </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default NewsLetter
