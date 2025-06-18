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
    } else if (location.pathname.startsWith("/myprofile")) {
      setMenuState("내프로필")
    } else if (location.pathname.startsWith("/register")) {
      setMenuState("회원가입")
    } else if (location.pathname.startsWith("/login")) {
      setMenuState("로그인")
    }
  }, [location, locate])

  return menuState
}

export default useMenuState
