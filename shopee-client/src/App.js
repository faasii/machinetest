import { useState } from "react";

//components
import Header from "./components/Layout/Header/Header";
import Cart from "./components/Cart/Cart";
import Banner from './components/Layout/Banner/Banner';
import Products from './components/Products/Products/Products'


//importing ui Library files
import 'antd/dist/antd.css';
import './../node_modules/bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

/*
 *  Libraries used bootstrap, antd

 */
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  //method for show cart modal
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  //method hide cart modal
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (

    <div className='poppins-font'>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Banner />
      <main>
        <Products />
      </main>

    </div>
  );
}

export default App;
