
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../features/cartSlice';
import { stockdecrement, stockincrement } from '../../features/stockSlice';




const Cart = (props) => {

  const cartList = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()
  var totalAmount = cartList.reduce((accumulator, current) => accumulator + current.price * current.qty, 0)

  const cartItemRemoveHandler = (id) => {
    dispatch(decrement(id))
    dispatch(stockdecrement(id))

  };

  const cartItemAddHandler = (id) => {
    dispatch(increment(id))
    dispatch(stockincrement(id))



  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartList.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          qty={item.qty}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );

  return (

    <Modal onClose={props.onClose}>

      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {true && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
