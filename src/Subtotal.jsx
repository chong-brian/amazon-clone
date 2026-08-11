import React from 'react';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import { getBasketTotal } from './reducer';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className='subtotal'>
      {/* Price */}

      <p>
        Subtotal ({basket.length} items):{' '}
        <strong>{currencyFormatter.format(getBasketTotal(basket))}</strong>
      </p>
      <small className='subtotal__gift'>
        <input type='checkbox' />
        This order contains a gift
      </small>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
