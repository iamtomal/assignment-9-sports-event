import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Marque from "../pages/Home/Marquee";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Marque></Marque>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
