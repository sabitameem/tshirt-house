import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt,handleAddToCart}) => {
    const {_id,name,index,price,picture,gender}= tshirt;

    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <button onClick={()=> handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;