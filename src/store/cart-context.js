//We're going to use context because we'll use a data in different components of the projects such as using meal items in mealitemform and then in cart so that we'll get rid of prop drilling.

import React from 'react'

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
}) //The default data here helps us with autocompletion in other components.

export default CartContext;
