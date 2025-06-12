/* import library */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

/* import pages */
const App = lazy(() => import("./App"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const MyprofilePage = lazy(() => import("../pages/MyprofilePage"));
const UploadProductPage = lazy(() => import("../pages/UploadProductPage"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const DetailProductPage = lazy(() => import("../pages/DetailProductPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage"));


// 라우터 컴포넌트
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        /* 로그인과 상관없이 갈 수 있는 경로 */
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/detailproduct/:id",
          element: <DetailProductPage />,
        },

        /* 로그인 하지 않은 유저만 갈 수 있는 경로 */
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },

        /* 로그인 한 유저만 갈 수 있는 경로 */
        {
          path: "/:id",
          element: <MyprofilePage />,
        },
        {
          path: "/cart/:id",
          element: <CartPage />,
        },
        {
          path: "/history/:id",
          element: <HistoryPage />,
        },

        /* 관리자만 갈 수 있는 경로 */
        {
          path: "/uploadproduct",
          element: <UploadProductPage />,
        },
      ],
    },
  ],
  {
    basename: "/fantasyshop",
  }
);

export default router;
