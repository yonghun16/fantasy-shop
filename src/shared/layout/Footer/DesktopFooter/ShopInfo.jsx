import { useSelector } from 'react-redux';
import clsx from 'clsx';

/* styles */
const linkStyle = clsx('hover:text-indigo-500', 'cursor-pointer', 'font-semibold', 'pr-4');
const grayTextStyle = clsx('whitespace-nowrap', 'pl-2 pr-7', 'text-gray-500');

const ShopInfo = () => {
  const companyInfo = useSelector((state) => state.company.companyData);

  const topLinks = [
    { label: '회사소개', href: '#' },
    { label: '개인정보처리방침', href: '#' },
    { label: '사업자제휴 및 입점 및 문의', href: '#' },
    { label: '사업자 정보', href: '#' },
  ];

  const infoRows = [
    [
      { label: '대표자', value: companyInfo.owner },
      { label: '사업자등록번호', value: companyInfo.businessNumber },
      { label: '주소', value: companyInfo.address },
    ],
    [
      { label: '통신판매업', value: companyInfo.businessType },
      { label: '개인정보보호책임자', value: companyInfo.privacyOfficer },
      { label: '팩스', value: companyInfo.fax },
    ],
    [
      { label: 'Tel.', value: companyInfo.tel },
      { label: 'Email.', value: companyInfo.email },
    ],
  ];

  return (
    <div className="ShopInfo text-sm">
      {/* Top Links */}
      <div className="flex flex-col items-center lg:items-start lg:flex-row mb-6">
        <div>
          {topLinks.map((link, label) => (
            <span key={label} className={linkStyle}>
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </div>
      </div>

      {/* Company Info Rows */}
      {infoRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-col items-center lg:items-start lg:flex-row mb-3"
        >
          <div>
            {row.map((item, label) => (
              <span key={label}>
                <span>{item.label}</span>
                <span className={grayTextStyle}>{item.value}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopInfo;
