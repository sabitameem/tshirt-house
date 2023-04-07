import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else{
        message=<div>
            <h3>Rich Kid!!!!!!</h3>
            <p><small>Thanks for wasting your money,hihihi.</small></p>
        </div>
    }
    return (
        <div>
            <h2>Order Summary {cart.length}</h2>
            {cart.length >2 ? <span>Good Job</span> : <span>hmmm..cool</span>}
            {message}
            {
                cart.map(tshirt=>
                    <p
                    key={tshirt._id}
                    >{tshirt.name}
                    <button onClick={()=>handleRemoveFromCart(tshirt._id)}>x</button>
                    </p>
                    )
            }
        </div>
    );
};

export default Cart;