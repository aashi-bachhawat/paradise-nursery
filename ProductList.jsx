import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addItem, selectCartCount } from './store/CartSlice';

// ── Plant Data ──────────────────────────────────────────────
const plantCategories = [
  {
    id: 'air-purifying',
    title: '🌬️ Air Purifying Plants',
    plants: [
      {
        id: 'ap1',
        name: 'Snake Plant',
        price: 14.99,
        description: 'Thrives on neglect. Removes toxins and produces oxygen at night.',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&q=80',
      },
      {
        id: 'ap2',
        name: 'Spider Plant',
        price: 9.99,
        description: 'Fast-growing, pet-friendly, and great at filtering formaldehyde.',
        image: 'https://images.unsplash.com/photo-1572461981847-80a47b6d7e55?w=400&q=80',
      },
      {
        id: 'ap3',
        name: 'Peace Lily',
        price: 18.99,
        description: 'Elegant white blooms that also clean the air of common pollutants.',
        image: 'https://images.unsplash.com/photo-1555125574-f76fa3c5edc2?w=400&q=80',
      },
      {
        id: 'ap4',
        name: 'Boston Fern',
        price: 12.99,
        description: 'Lush, feathery fronds. A natural humidifier and air purifier.',
        image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&q=80',
      },
      {
        id: 'ap5',
        name: 'Rubber Plant',
        price: 21.99,
        description: 'Bold, glossy leaves that soak up airborne toxins with ease.',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80',
      },
      {
        id: 'ap6',
        name: 'Aloe Vera',
        price: 11.99,
        description: 'A two-in-one wonder: purifies air and soothes skin irritations.',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?w=400&q=80',
      },
    ],
  },
  {
    id: 'low-light',
    title: '🌑 Low Light Plants',
    plants: [
      {
        id: 'll1',
        name: 'ZZ Plant',
        price: 19.99,
        description: 'Nearly indestructible. Thrives in low-light with minimal watering.',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80',
      },
      {
        id: 'll2',
        name: 'Golden Pothos',
        price: 8.99,
        description: 'A trailing beauty perfect for shelves and dim corners.',
        image: 'https://images.unsplash.com/photo-1617391765120-e2f7bf3fbd31?w=400&q=80',
      },
      {
        id: 'll3',
        name: 'Cast Iron Plant',
        price: 16.99,
        description: 'Lives up to its name — virtually indestructible in any light.',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80',
      },
      {
        id: 'll4',
        name: 'Chinese Evergreen',
        price: 13.99,
        description: 'Colorful, patterned leaves that shine even in low-light rooms.',
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&q=80',
      },
      {
        id: 'll5',
        name: 'Dracaena',
        price: 17.99,
        description: 'Architectural elegance with minimal light requirements.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      },
      {
        id: 'll6',
        name: 'Heartleaf Philodendron',
        price: 10.99,
        description: 'Heart-shaped leaves cascade beautifully in any low-light spot.',
        image: 'https://images.unsplash.com/photo-1614594575117-d95c7551e9cd?w=400&q=80',
      },
    ],
  },
  {
    id: 'flowering',
    title: '🌸 Flowering Plants',
    plants: [
      {
        id: 'fl1',
        name: 'Orchid',
        price: 29.99,
        description: 'Exotic, long-lasting blooms that add a touch of luxury.',
        image: 'https://images.unsplash.com/photo-1566907225472-514215c9d308?w=400&q=80',
      },
      {
        id: 'fl2',
        name: 'African Violet',
        price: 11.99,
        description: 'Compact and colorful — blooms almost year-round indoors.',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&q=80',
      },
      {
        id: 'fl3',
        name: 'Anthurium',
        price: 24.99,
        description: 'Striking waxy red spathes that bloom for months at a time.',
        image: 'https://images.unsplash.com/photo-1586093021931-3e7e0f1d5826?w=400&q=80',
      },
      {
        id: 'fl4',
        name: 'Bromeliad',
        price: 22.99,
        description: 'Tropical showstopper with vivid color and little fuss.',
        image: 'https://images.unsplash.com/photo-1595351475754-8a661fe57bd7?w=400&q=80',
      },
      {
        id: 'fl5',
        name: 'Kalanchoe',
        price: 9.99,
        description: 'Clusters of cheerful flowers that brighten any windowsill.',
        image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400&q=80',
      },
      {
        id: 'fl6',
        name: 'Begonia',
        price: 12.99,
        description: 'Rich blooms and decorative foliage for indoors or a shaded patio.',
        image: 'https://images.unsplash.com/photo-1618677563422-4b26f3c2ae2a?w=400&q=80',
      },
    ],
  },
];

// ── Navbar ───────────────────────────────────────────────────
function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🌿 Paradise Nursery</Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plants">Plants</Link></li>
        <li>
          <Link to="/cart" className="cart-icon-wrapper" aria-label={`Cart (${cartCount} items)`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// ── Product List Page ─────────────────────────────────────────
function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedIds, setAddedIds] = useState(() => {
    const set = new Set();
    cartItems.forEach(i => set.add(i.id));
    return set;
  });

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedIds(prev => new Set(prev).add(plant.id));
  };

  return (
    <>
      <Navbar />
      <main className="product-list-page">
        <h1>Our Plants</h1>
        <p className="page-subtitle">Bringing nature into your home — browse our curated collection.</p>

        {plantCategories.map(category => (
          <section key={category.id} className="category-section">
            <h2 className="category-title">{category.title}</h2>
            <div className="plant-grid">
              {category.plants.map(plant => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="plant-card-body">
                    <div className="plant-name">{plant.name}</div>
                    <div className="plant-description">{plant.description}</div>
                    <div className="plant-price">${plant.price.toFixed(2)}</div>
                    <button
                      className="btn-add-cart"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedIds.has(plant.id)}
                    >
                      {addedIds.has(plant.id) ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export { Navbar };
export default ProductList;