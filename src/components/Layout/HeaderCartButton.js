import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

//In order to use context we import useContext and CartContext, not CartProvider. 
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    const crtCtx = useContext(CartContext); //The HeaderCartButton component will be reevaluated by React whenever the context changes.
    const { items } = crtCtx;
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);





    const [buttonisHighlighted, setButtonIsHighlighted] = useState(false);

    const btnClasses = `${classes.button} ${buttonisHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        } //Cleanup function : If we add multiple items rapidly after each other, we wanna clear the old timer and make sure that the new timer is set.
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;

// Reduce method allows us to turn an array into a single value.
/*
It takes 2 arguments:
1. A function
2. Initial value*/