import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin'
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const[money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <h5>Money : {money}</h5>
            <button onClick={()=> setMoney(money+1000)}> Sent Money 1000</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Kabil</Cousin>
                
            </section>
        </div>
    );
};

export default Uncle;