import Modal from '../UI/Modal';
import classes from './Cart.module.css'

import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {

  const [view, setview] = useState("");

  const finishOrderHandler = () => {
    setview("finishorder");
  }

  const crtCtx = useContext(CartContext);

  const totalAmount = `$${crtCtx.totalAmount.toFixed(2)}`;
  const hasItems = crtCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    crtCtx.removeItem(id)
  };
  const cartItemAddHandler = item => {
    crtCtx.addItem({ ...item, amount: 1 })
  };

  const cartItems = <ul className={classes['cart-items']}>
    {crtCtx.items.map(item =>
      <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}>{item.name}</CartItem>)}
  </ul>


  return (
    <Modal onClose={props.onClose}> {/* The Cart should be wrapped by a modal as an overlay, as when it is opened we should not be able to do other processes such as adding meals through mealitemform again. */}
      {view === "finishorder" && <div className={classes.finish}>Your order is on the way...</div>}
      {view === "" && <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
          {hasItems && <button onClick={finishOrderHandler} className={classes.button}>Order</button>}
        </div>
      </div>}
    </Modal>
  )
}

export default Cart;
