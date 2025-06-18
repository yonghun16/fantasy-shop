import { useSelector } from "react-redux";


const shopName = useSelector((state) => state.company.companyData.companyName);

const CopyRight = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="text-center text-sm text-gray-500 mt-12">
      © {currentYear} {shopName}. All rights reserved.
    </div>
  )
}

export default CopyRight
