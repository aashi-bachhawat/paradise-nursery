import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p className="about-tagline">Growing happiness, one plant at a time 🌿</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded in 2010 by a group of passionate plant enthusiasts who
            believed that everyone deserves to have a little bit of nature in their home. What
            started as a small local nursery has grown into a beloved online destination for plant
            lovers across the country.
          </p>
          <p>
            We carefully curate our collection of houseplants to ensure that every plant we offer
            is healthy, sustainably grown, and perfect for home environments. Whether you're a
            seasoned plant parent or just starting your green journey, we have the perfect plant
            for you.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, our mission is simple: to bring the beauty and benefits of nature
            into every home. We believe that plants are more than just decorations — they are
            living companions that improve air quality, boost mood, reduce stress, and transform
            any space into a personal sanctuary.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-list">
            <li>🌱 <strong>Expert Curation:</strong> Every plant is hand-selected by our horticulture team</li>
            <li>💚 <strong>Sustainably Grown:</strong> We partner with eco-conscious growers</li>
            <li>📦 <strong>Safe Packaging:</strong> Plants are packed with care for safe delivery</li>
            <li>🌿 <strong>Plant Guarantee:</strong> 30-day health guarantee on all purchases</li>
            <li>👩‍🌾 <strong>Expert Support:</strong> Our plant care team is always here to help</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>Email: hello@paradisenursery.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Hours: Monday – Saturday, 9am – 6pm</p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;