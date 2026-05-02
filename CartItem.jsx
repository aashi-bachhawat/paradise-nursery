import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  selectCartItems,
  selectCartTotal,
  selectCartCount,
} from './store/CartSlice';
import { Navbar } from './ProductList';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Thank you for shopping at Paradise Nursery.');
  };

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <h1>🛒 Your Cart</h1>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty. Time to find your perfect plant!</p>
            <Link to="/plants" className="btn-continue">Browse Plants</Link>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-unit-price">Unit price: ${item.price.toFixed(2)}</div>

                    <div className="cart-item-controls">
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        aria-label="Decrease quantity"
                      >−</button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        aria-label="Increase quantity"
                      >+</button>
                    </div>
                  </div>

                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    className="btn-delete"
                    onClick={() => dispatch(removeItem(item.id))}
                    aria-label={`Remove ${item.name} from cart`}
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total-line">
                <span>Total Amount:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <Link to="/plants" className="btn-continue">← Continue Shopping</Link>
                <button className="btn-checkout" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default CartItem;