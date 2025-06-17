/* import library */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/tailwind.css";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* import component */
import Header from "../shared/layout/Header";
import Footer from "../shared/layout/Footer";

/* import actions */
import { authUser } from "../shared/api/authUser";

function App() {

  const isAuth = useSelector(state => state.user?.isAuth)
  const dispatch = useDispatch()
  const { pathname } = useLocation();
  // const userData = useSelector(state => state.user.userData);  // 디버깅용

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser())
      // console.log(userData)   // 디버깅용
    }
  }, [isAuth, pathname, dispatch])


  return (
    <>
      <Header />
      <section className="mt-12 mb-12 md:mt-0 md:mb-0">
        <Outlet />
      </section>
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
