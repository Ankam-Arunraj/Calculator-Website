import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="banner">
        <h1>Allin1Calculator</h1>
        <p>Your one-stop solution for all types of calculations</p>
      </header>
      
      <div className="search-bar">
        <input type="text" placeholder="Search for a calculator..." />
        <button>Search</button>
      </div>

      <section className="featured-calculators">
        <h2>Featured Calculators</h2>
        <div className="calculator-grid">
          <Link to="/simple-interest" className="calculator-card">
            <h3>Simple Interest</h3>
          </Link>
          <Link to="/compound-interest" className="calculator-card">
            <h3>Compound Interest</h3>
          </Link>
          <Link to="/bmi" className="calculator-card">
            <h3>BMI</h3>
          </Link>
          <Link to="/currency" className="calculator-card">
            <h3>Currency</h3>
          </Link>
        </div>
      </section>

      <section className="categories">
        <h2>Calculator Categories</h2>
        <div className="category-grid">
          <Link to="/financial" className="category-card">
            <h3>Financial Calculators</h3>
          </Link>
          <Link to="/health-and-fitness" className="category-card">
            <h3>Health & Fitness Calculators</h3>
          </Link>
          <Link to="/conversion" className="category-card">
            <h3>Conversion Calculators</h3>
          </Link>
          <Link to="/geometry" className="category-card">
            <h3>Geometry Calculators</h3>
          </Link>
          <Link to="/math-and-algebra" className="category-card">
            <h3>Math & Algebra Calculators</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
