import React from 'react';
import './MyPayment.css';
import { paymentAction } from '../config/data';
import Actions from './Actions';

const MyPayment = () => {
  return (
    <div className='MyPayment'>
          <div className="content layout">
              <Actions actions={paymentAction}/>
              <section className="main custom">
                  <p>Payment Date: <strong>Oct 25, 2022, 11:07 a.m.</strong></p><p>Amount Paid: <strong>₹ 3150</strong></p>
                  <p>Payment Made For Project</p>
                  <p>K10 Maths Text Book Solution</p>
                  <p>K12 Maths Text Book Solution</p>
              </section>
              <section className="info">
                <div className='info__item'>
                    <p>Lifetime Earning</p>
                    <strong>₹ 3150</strong>
                </div>
                <div className='info__item'>
                    <p>This Month Earning</p>
                    <strong>₹ 0</strong>
                </div>
              </section>
          </div>
    </div>
  )
}

export default MyPayment;