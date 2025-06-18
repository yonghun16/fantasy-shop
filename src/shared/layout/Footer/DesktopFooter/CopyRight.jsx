import { useSelector } from "react-redux";


const CopyRight = () => {
  const currentYear = new Date().getFullYear()
  const shopName = useSelector((state) => state.company.companyData.companyName);

  return (
    <div className="text-center text-sm text-gray-500 mt-12">
      © {currentYear} {shopName}. All rights reserved.
    </div>
  )
}

export default CopyRight
