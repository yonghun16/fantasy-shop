import clsx from 'clsx'

/* tailwind styles */
const linksStyles = clsx(
  'hover:text-indigo-500',
  'cursor-pointer',
  'font-semibold',
  'pr-4'
)

const grayTextStyle = clsx(
  'whitespace-nowrap',
  'pl-2 pr-7',
  'text-gray-500'
)

/* dummy data */
const owner = "고길동";
const address = "소환사의 협곡 11시 방향 고대엘프의 숨겨진 동굴";
const businessNumber = "123-12-12345";
const businessType = "제 2025-소환사협곡-12343호";
const privacyOfficer = "제우스";
const tel = "1588-1234";
const fax = "000-123-1234";
const email = "jeous123@fantasyshop";


const ShopInfo = () => {
  return (
    <div className='ShopInfo text-sm'>
      {/* Top links */}
      <div className='flex flex-col items-center lg:items-start lg:flex-row mb-6'>
        <div>
          <span className={linksStyles}><a href='#'>회사소개</a></span>
          <span className={linksStyles}><a href='#'>개인정보처리방침</a></span>
          <span className={linksStyles}><a href='#'>사업자제휴 및 입점 및 문의</a></span>
          <span className={linksStyles}><a href='#'>사업자 정보</a></span>
        </div>
      </div>

      <div className='flex flex-col items-center lg:items-start lg:flex-row mb-3'>
        <div>
          <span>대표자</span>
          <span className={grayTextStyle}>{owner}</span>
          <span>사업자등록번호</span>
          <span className={grayTextStyle}>{businessNumber}</span>
          <span>주소</span>
          <span className={grayTextStyle}>{address}</span>
        </div>
      </div>

      <div className='flex flex-col items-center lg:items-start lg:flex-row mb-3'>
        <div>
          <span>통신판매업</span>
          <span className={grayTextStyle}>{businessType}</span>
          <span>개인정보보호책임자</span>
          <span className={grayTextStyle}>{privacyOfficer}</span>
          <span>팩스</span>
          <span className={grayTextStyle}>{fax}</span>
        </div>
      </div>

      <div className='flex flex-col items-center lg:items-start lg:flex-row'>
        <div>
          <span>Tel.</span>
          <span className={grayTextStyle}>{tel}</span>
          <span>Email.</span>
          <span className={grayTextStyle}>{email}</span>
        </div>
      </div>
    </div>
  )
}

export default ShopInfo
