/* import libraries */
import clsx from 'clsx'

/* import components */
import { Button } from '../../ui/Button'
import { InputBox } from '../../ui/InputBox'

/* import assets */
import logoImg from '../../../assets/images/logo.png'
import { LuMail } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";


/* tailwind styles */
const linksStyles = clsx(
  'whitespace-nowrap',
  'hover:text-indigo-500',
  'cursor-pointer',
  'font-semibold'
)

const grayTextStyle = clsx(
  'whitespace-nowrap',
  'text-gray-500',
)

const infoTextStyle = clsx(
  'flex flex-col justify-center items-center',
  'md:flex-row md:gap-2'
)

/* dummy data */
const shopName = "판타지 쇼핑몰";


/* UI */
const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full text-black px-20 py-9">
      <div className='footer__wrapper flex flex-col md:flex-row justify-between gap-8'>
        <div className='footer__left-side'>
          {/* Company Info / Quick Links */}
          <div className='flex text-sm gap-5 mb-7'>
            <div className={linksStyles}>
              <a href='#'>회사소개</a>
            </div>
            <div className={linksStyles}>
              <a href='#'>개인정보처리방침</a>
            </div>
            <div className={linksStyles}>
              <a href='#'>사업자제휴 및 입점 및 문의</a>
            </div>
            <div className={linksStyles}>
              <a href='#'>사업자 정보</a>
            </div>
          </div>

          <div className='flex text-sm gap-10 mb-4 md:mb-1'>
            <div className={infoTextStyle}>
              <div className='whitespace-nowrap'>대표자</div>
              <div className={grayTextStyle}>고길동</div>
            </div>
            <div className={infoTextStyle}>
              <div className='whitespace-nowrap'>사업자등록번호</div>
              <div className={grayTextStyle}>123-12-12345</div>
            </div>
            <div className={infoTextStyle}>
              <div className='whitespace-nowrap'>주소</div>
              <div className={grayTextStyle}>소환사의 협곡 11시 방향 고대엘프의 숨겨진 동굴</div>
            </div>
          </div>

          <div className='flex text-sm gap-10 mb-4'>
            <div className={infoTextStyle}>
              <div>통신판매업</div>
              <div className={grayTextStyle}>제 2025-소환사협곡-12343호</div>
            </div>
            <div className={infoTextStyle}>
              <div className='whitespace-nowrap'>개인정보보호책임자</div>
              <div className={grayTextStyle}>제우스</div>
            </div>
            <div className={infoTextStyle}>
              <div>팩스</div>
              <div className={grayTextStyle}>000-123-1234</div>
            </div>
          </div>


          <div className='flex text-sm gap-10'>
            <div className="flex gap-2">
              <div className='text-gray-500'>Tel.</div>
              <div className={grayTextStyle}>1588-1234</div>
            </div>
            <div className="flex gap-2">
              <div className='text-gray-500'>Email.</div>
              <div className={grayTextStyle}>jeous123@fantasyshop</div>
            </div>
          </div>

        </div>

        <div className='footer__right-side md:w-1/2 flex flex-col'>
          <div className='flex justify-end items-center'>
            <div className='flex items-center'>
              <div className='min-w-12'><img src={logoImg} alt='fantasyshop' className='w-12' /></div>
              <div className='text-2xl font-semibold whitespace-nowrap'>{shopName}</div>
              <div className='text-lg font-semibold whitespace-nowrap ml-6'>뉴스레터를 구독하세요</div>
            </div>
          </div>

          <div className='flex justify-end items-center mt-4' >
            <div className='flex items-center gap-2'>
              <InputBox
                placeholder='이메일을 입력하세요.'
                type='email'
                icon={<LuMail />}
                className='text-sm w-70'
              />
              <Button
                className='text-sm'
              >
                구독하기
              </Button>
            </div>
          </div>

          <div className='flex justify-end items-center'>
            <div className='flex justify-end w-94'>
              <div className='flex gap-2 mt-4 text-gray-400' >
                <div className='hover:text-indigo-500'> {<LuTwitter />} </div>
                <div className='hover:text-indigo-500'> {<LuFacebook />} </div>
                <div className='hover:text-indigo-500'> {<LuInstagram />} </div>
                <div className='hover:text-indigo-500'> {<LuGithub />} </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright text-center text-sm text-gray-500 mt-12">
        © 2025 판타지 쇼핑몰. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
