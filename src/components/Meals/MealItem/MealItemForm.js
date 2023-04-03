import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'

import classes from './MealItemForm.module.css'

export default function MealItemForm(props) {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault(); // the page reload is prevented.

        const enteredAmount = amountInputRef.current.value; //This value is always a string so we should convert it to a number
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 6) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
            ref={amountInputRef} 
            label="Amount" input={{
            id: 'amount' + props.id,
            type: 'number',
            min: '1',
            max: '6',
            step: '1',
            defaultValue: '1'
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-6).</p>}
        </form>
    )
}
