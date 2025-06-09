const shopName = "판타지 쇼핑몰";

const CopyRight = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer__copyright text-center text-sm text-gray-500 mt-12">
      © {currentYear} {shopName}. All rights reserved.
    </div>
  )
}

export default CopyRight
