import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

// ── Landing Page ──────────────────────────────────────────────
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-subtitle">Where every leaf tells a story</p>
        <button
          className="btn-get-started"
          onClick={() => navigate('/plants')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/"        element={<LandingPage />} />
          <Route path="/plants"  element={<ProductList />} />
          <Route path="/cart"    element={<CartItem />} />
          <Route path="/about"   element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;