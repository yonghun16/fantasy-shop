/* import library */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/tailwind.css";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHatWizard } from "react-icons/fa";

/* import component */
import ScrollToTop from "./ScrollToTop";
import Header from "../shared/layout/Header";
import Footer from "../shared/layout/Footer";
import { Button } from "../shared/ui/Button";
import ModalController from "../features/modal/ModalController";

/* import actions */
import { authUser } from "../shared/api/authUser";
import { openGeminiModal } from "../features/modal/modalSlice";

function App() {
  const isAuth = useSelector((state) => state.user?.isAuth);
  const isGeminiModalOpen = useSelector(
    (state) => state.modal.geminiModal.isOpen
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // const userData = useSelector(state => state.user.userData);  // 디버깅용

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
      // console.log(userData)   // 디버깅용
    }
  }, [isAuth, pathname, dispatch]);

  // 현재 경로가 리스트 중 하나에 포함되는지 확인 (부분 포함 허용)
  const shouldShowGemini =
    (pathname === "/" ||
      pathname.startsWith("/detailproduct/") ||
      pathname.startsWith("/myprofile/") ||
      pathname.startsWith("/cart/") ||
      pathname.startsWith("/history/")) &&
    !isGeminiModalOpen;

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <ScrollToTop />
        <section className="mt-12 mb-12 md:mt-0 md:mb-0">
          <Outlet />
        </section>
        <Footer />
        <ToastContainer position="top-center" autoClose={2000} />
      </div>

      {/* 버튼만 표시 */}
      {shouldShowGemini && (
        <div className="fixed bottom-[60px] right-[8px] md:bottom-[30px] md:right-[30px] z-40">
          <Button
            onClick={() => dispatch(openGeminiModal())}
            color="gradient"
            size="md"
            className="!rounded-full shadow-xl text-lg
             w-[48px] h-[48px] p-0 flex items-center justify-center
             md:w-auto md:h-auto md:px-5 md:py-3"
            iconPosition="center"
            icon={<FaHatWizard className="text-lg" />}
          >
            <span className="hidden ml-2 md:inline">도우미</span>
          </Button>
        </div>
      )}

      {/* 모든 모달 중앙 관리 */}
      <ModalController />
    </>
  );
}

export default App;
