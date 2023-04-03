// The goal of this component is simply to manage the cart context to data and provide that context to all components that want access to it. That's why we imported CartContext.
import CartContext from "./cart-context";

//Using useReducer
//1
import { useReducer } from "react";

//3
const defaultCartState = {
    items: [],
    totalAmount: 0
};


//2
const cartReducer = (state, action) => {
    //7: Adding logic for adding and removing
    if (action.type === 'additem') {
        // const updatedItems = state.items.concat(action.item); // State gives the current state so the non-updated state. And concat method creates a new array unlike push method while bringing the old items and the updated items together.
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // Adding and removing items so changing the total amount in Cart component
        //1.1 : Checking if an item is always a part of the Cart
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items]; // Spread operator copies the old Array and then turns it into a new Array.
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

    }
    if (action.type === 'removeitem') {

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}

//Action will be dispatched by us and the State is the last state snapshot of the state managed by the reducer.



const CartProvider = props => {

    //4
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState); //defaultCartState is the initial state here.

    //6: using dispatchCartAction for Adding and Removing
    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'additem', item: item });
    };
    const removeItemFormCartHandler = id => {
        dispatchCartAction({ type: 'removeitem', id: id });
    };

    const cartContext = {
        //5: connecting the key values to the cartState
        items: cartState.items,
        totalAmount: cartState.totalAmount,

        addItem: addItemToCartHandler,
        removeItem: removeItemFormCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;