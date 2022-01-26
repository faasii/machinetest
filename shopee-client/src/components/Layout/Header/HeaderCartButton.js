import { Fragment, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { FaShoppingCart } from "react-icons/fa";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  const cartCount = useSelector((state) => state.cart.value)
 
 

  return (
    <Fragment>
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <FaShoppingCart fontSize="1.5em"/>
      </span>
      <span className={classes.badge}>{cartCount.length}</span>
      </button>
    </Fragment>
  );  
};

export default HeaderCartButton;
