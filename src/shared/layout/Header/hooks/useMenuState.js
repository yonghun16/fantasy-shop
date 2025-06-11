import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const useMenuState = (locate) => {
  const location = useLocation()
  const [menuState, setMenuState] = useState(locate)

  useEffect(() => {
    if (location.pathname === "/") {
      setMenuState(locate)
    } else if (location.pathname.startsWith("/cart")) {
      setMenuState("장바구니")
    } else {
      setMenuState("내프로필")
    }
  }, [location, locate])

  return menuState
}

export default useMenuState
