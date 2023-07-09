import React from 'react';
import { FaTruck, FaMoneyBillWave, FaShieldAlt, FaHeadset, FaHeart } from 'react-icons/fa';
import '../styles/PolicyPoster.css';

const PolicyPoster = () => {
  return (
    <div className="cardP-row">
      <div className="cardP card-1">
        <div className="icon">
          <FaTruck />
        </div>
        <div className="text">
          <strong>Free Delivery</strong>
          <p>Free shipping on all orders</p>
        </div>
      </div>

      <div className="cardP card-2">
        <div className="icon">
          <FaMoneyBillWave />
        </div>
        <div className="text">
          <strong>Money Back Guarantee</strong>
          <p>30-day return policy</p>
        </div>
      </div>

      <div className="cardP card-3">
        <div className="icon">
          <FaShieldAlt />
        </div>
        <div className="text">
          <strong>Secure Payment</strong>
          <p>Safe and encrypted transactions</p>
        </div>
      </div>

      <div className="cardP card-4">
        <div className="icon">
          <FaHeadset />
        </div>
        <div className="text">
          <strong>24/7 Customer Support</strong>
          <p>Assistance whenever you need</p>
        </div>
      </div>
    </div>
  );
}

export default PolicyPoster;
