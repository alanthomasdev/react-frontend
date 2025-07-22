import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderMain from "./components/HeaderMain";
import SideBar from "./components/cartModal";
import LoginModal from "./components/LoginModal";
import ProductList from "./components/ProductList";




function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <HeaderMain openModal={openModal} handleOpen={handleOpen} />
      <SideBar/>
      <LoginModal />
      <ProductList />

        
    </>
  );
}

export default App;
