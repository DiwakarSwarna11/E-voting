import React from 'react';
import './HomeStyles.css';

function Home() {

  return (
    <div className="Home">
      <main className="scroll-content">
        <section className="hero">
          <h2 className="animated-title">E-VOTING PLATFORM</h2>
          <p className="caption">Empowering organizations with secure and transparent voting solutions.</p>
        </section>

        <section className="features">
          <h1>Why Choose Us?</h1>
          <div className="flex-boxes">
            <div className="flex-box">Secure & Transparent Elections</div>
            <div className="flex-box">Instant Vote Counting</div>
            <div className="flex-box">Remote Accessibility</div>
            <div className="flex-box">Cost-Effective & Eco-Friendly</div>
            <div className="flex-box">User-Friendly Interface</div>
            <div className="flex-box">Tamper-Resistant System</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;