const express = require('express');
const cartItems = express.Router();

const cartList = [
    {
        id: 1,
        product: 'lipstick',
        price: 15,
        quantiy: 34
    },
    {
        id: 2,
        product: 'eye shadow',
        price: 22,
        quantiy: 45

    },
    {
        id: 3,
        product: 'eyeliner',
        price: 7,
        quantiy: 50


    },
    {
        id: 4,
        product: 'setting powder',
        price: 21,
        quantiy: 17

    }
        
];


//GET /cart-items

cartItems.get("/cart-items", (req, res) => {
    res.status(200);
    res.json(cartList);
});


//GET /cart-items/:id
