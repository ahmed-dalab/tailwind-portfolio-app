import React, { useState } from 'react';

const Payment = () => {
    const [payments,setPayments] = useState([
        {
            id:1,
            Reciever:'Dalab restaurant',
            Sender:'Ahmed Abdi Hassan',
            footType:'Canjeelo',
            price:10
        },
        {
            id:2,
            Reciever:'Dalab restaurant',
            Sender:'Farah Abdi Hassan',
            footType:'Bariis iy Hilib',
            price:20
        },
        {
            id:3,
            Reciever:'Dalab restaurant',
            Sender:'Rage Abdi Hassan',
            footType:'Coffee',
            price:5
        },
        
        {
            id:4,
            Reciever:'Dalab restaurant',
            Sender:'Rodo Abdi Hassan',
            footType:'Furulaato',
            price:5
        },
        
    ])
    return (
        <div  className='mt-10'>
           <h2>Our Payments</h2>
           <div className='flex flex-wrap '>
              {payments.map(payment => (
                <div className='w-30 h-20 ml-6 mt-4 border-spacing-5 rounded shadow' key={payment.id}>
                    <h3 className='flex flex-wrap'>Waxaad ${payment.price} ka heshay  {payment.Sender} oo 
                    cunay ama cabay  {Payment.footType}</h3>
                </div>
              ))}
           </div>
        </div>
    );
}

export default Payment;
