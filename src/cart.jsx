import React from 'react';

function Cart({ cartItems }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <span>{item.name}</span>
                    <span>Quantity: {item.quantity}</span>
                    <span>Price: ${item.price}</span>
                </div>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Cart;
