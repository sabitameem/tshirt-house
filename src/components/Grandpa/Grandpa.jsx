import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';


export const RingContext = createContext('gold');
export const MoneyContext =createContext(0);
const Grandpa = () => {
   const [money,setMoney]=useState(0);

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <h4>
                Money : {money}
            </h4>
           <MoneyContext.Provider value={[money,setMoney]}>
              <RingContext.Provider value='golden-ring'>
                  <section className='flex'>
                      <Father></Father>
                      <Uncle></Uncle>
                      <Aunty></Aunty>
                 </section>
              </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;