import React from "react";
import ButtonToggle from "./button";

function OverlayMessage() {
  return (
    <div className="menu-overlay-message">
      Use the menu to navigate through the website
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ButtonToggle />
      <div className="overlay"></div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <OverlayMessage />
        <div className="hero-header">
          <h1>Welcome to Steamy Bubbles</h1>
          <p>Your source for eco-friendly soap products</p>
          <OverlayMessage />
        </div>
      </header>
      <main>
        <section className="content-area">
          <h2>Our Products</h2>
        </section>
        <section className="content-area">
          <h2>About Us</h2>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Steamy Bubbles. All rights reserved.</p>
      </footer>
    </>
  );
}
