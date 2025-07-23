import { useState } from "react";
import "./App.css";
import HeaderMain from "./components/HeaderMain";
import SideBar from "./components/cartModal";
import LoginModal from "./components/LoginModal";
import ProductList from "./components/ProductList";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <HeaderMain
        handleOpenCart={() => setOpenCart(true)}
        handleOpenLogin={() => setOpenLogin(true)}
      />
      <SideBar open={openCart} onClose={() => setOpenCart(false)} />
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
      <ProductList />
    </>
  );
}

export default App;
