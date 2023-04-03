import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

import { useContext } from 'react';
import CartContext from '../../../store/cart-context';


const MealItem = props => {

    const crtCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`; // toFixed makes sure that we always print two decimals.

    const addToCartHandler = amount => {
        crtCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
            </div>
        </li>
    )
}

export default MealItem