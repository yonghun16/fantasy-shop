/* import library */
import "../assets/styles/tailwind.css";
import { Outlet } from "react-router-dom";

/* import component */
import Header from "../shared/layout/Header";
import Footer from "../shared/layout/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
