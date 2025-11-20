import React from "react";
import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">
            Turn your notes into beautiful, printable study sheets — instantly.
          </h1>
          <p className="hero-subheadline">
            StudyPrint helps you convert messy notes into clean, organized A4 study sheets.
            <br />
            Fast, private, and fully offline — no signup required.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary">Start Creating →</button>
            <button className="btn btn-secondary">See Features</button>
          </div>
          <p className="hero-small-text">
            100% free. Works offline. No data ever leaves your device.
          </p>
        </div>
        <div className="hero-mockup">
          <div className="mockup-placeholder">
            <p>A clean, distraction-free interface built for students who want focus — not clutter.</p>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Features</h2>
          <p>Built for students — simple, fast, and private.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🧠 Offline First</h3>
            <p>Everything works directly in your browser.</p>
            <p>Your notes never leave your device — perfect for privacy and low-internet days.</p>
          </div>
          <div className="feature-card">
            <h3>📝 Printable A4 PDFs</h3>
            <p>Export clean, print-ready A4 study sheets with perfect spacing, margins, and structure.</p>
          </div>
          <div className="feature-card">
            <h3>💾 Auto-Save</h3>
            <p>Your notes save automatically in local storage — even if you close the tab.</p>
          </div>
          <div className="feature-card">
            <h3>🔗 Shareable Links</h3>
            <p>Turn your study sheet into a link and share it with classmates in one click.</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Layout Controls</h3>
            <p>Adjust spacing, font size, columns, and structure to match your study style.</p>
          </div>
          <div className="feature-card">
            <h3>📄 Clean Minimal UI</h3>
            <p>No clutter, no ads, no distractions — a workspace built purely for studying.</p>
          </div>
          <div className="feature-card">
            <h3>🕒 Zero Setup</h3>
            <p>Just open the tool and start typing.</p>
            <p>No account. No friction. Just pure productivity.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2>How It Works</h2>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Paste your notes</h3>
            <p>Copy from anywhere — school notes, Google Docs, Notion, or your handwritten summaries.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Customize the layout</h3>
            <p>Change spacing, font, columns, and structure in seconds.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Export to PDF</h3>
            <p>One-click export to a crisp, print-ready A4 sheet.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Start creating your study sheets now.</h2>
        <p>No signup required — jump straight into the editor.</p>
        <button className="btn btn-primary btn-large">Start Creating →</button>
      </section>

      {/* About / Privacy / Built By Section */}
      <section className="info-section">
        <div className="info-grid">
          <div className="info-block">
            <h3>🧩 About StudyPrint</h3>
            <p>StudyPrint is a free, student-focused tool created to make revision easier.</p>
            <p>Designed for speed, privacy, and simplicity — everything works offline and stays on your device.</p>
            <p>Built for students who prefer clean, printable study material without distractions.</p>
          </div>
          <div className="info-block">
            <h3>🔐 Privacy</h3>
            <p>Your data stays with you.</p>
            <p>StudyPrint uses zero databases, accounts, or cloud services.</p>
            <p>Everything is stored locally in your browser.</p>
            <ul className="privacy-list">
              <li>No tracking.</li>
              <li>No analytics.</li>
              <li>No accounts.</li>
              <li>Just privacy.</li>
            </ul>
          </div>
          <div className="info-block">
            <h3>🧒 Built By</h3>
            <p>Made by Uttkarsh Bhardwaj</p>
            <p>A 15-year-old frontend dev passionate about building simple, useful tools for students.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 StudyPrint. All rights reserved.</p>
          <p>Made by Uttkarsh Bhardwaj.</p>
          <div className="footer-links">
            <a href="#">GitHub</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p className="tagline">“Notes → Clean Study Sheets”</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
