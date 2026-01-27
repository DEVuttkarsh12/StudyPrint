import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import "./landingpage.css";

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

const LandingPage = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvgzezg", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset();
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };
  const handleStartClick = () => {
    window.open('https://study-print-app.vercel.app/', '_blank');
  };

  const handleSeeFeaturesClick = () => {
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-headline">
              Turn your notes into beautiful, printable study sheets — instantly.
            </h1>
            <p className="hero-subheadline">
              StudyPrint helps you convert messy notes into clean, structured A4 study sheets.
              <br />
              Fast, private, and fully offline — no signup required.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={handleStartClick}>Start Creating →</button>
              <button className="btn btn-secondary" onClick={handleSeeFeaturesClick}>See Features</button>
            </div>
            <p className="hero-small-text">
              100% free. Works offline. No data ever leaves your device.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <RevealOnScroll>
        <section className="features-section">
          <div className="section-header">
            <h2>Everything you need.</h2>
            <p>Simple tools designed for the way you study.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Offline Ready</h3>
              <p>Your notes never leave your device. Work anywhere, anytime, with total privacy.</p>
            </div>
            <div className="feature-card">
              <h3>Printable A4 PDFs</h3>
              <p>Export clean, structured study sheets with perfect margins and spacing automatically.</p>
            </div>
            <div className="feature-card">
              <h3>Auto-Save</h3>
              <p>Focus on your content. Your progress is saved locally as you type.</p>
            </div>
            <div className="feature-card">
              <h3>Layout Control</h3>
              <p>Easily adjust fonts and spacing to create a study sheet that works for you.</p>
            </div>
            <div className="feature-card">
              <h3>Minimal Interface</h3>
              <p>No distractions. No ads. Just a pure workspace for your thoughts.</p>
            </div>
            <div className="feature-card">
              <h3>Zero Setup</h3>
              <p>No accounts required. Start creating instantly, directly in your browser.</p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* How It Works Section */}
      <RevealOnScroll>
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
      </RevealOnScroll>

      {/* CTA Section */}
      <RevealOnScroll>
        <section className="cta-section">
          <h2>Start creating your study sheets now.</h2>
          <p>No signup required — jump straight into the editor.</p>
          <button className="btn btn-primary btn-large" onClick={handleStartClick}>Start Creating →</button>
        </section>
      </RevealOnScroll>

      {/* About / Privacy / Built By Section */}
      <RevealOnScroll>
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
      </RevealOnScroll>

      {/* Feedback & Bug Report Section */}
      <RevealOnScroll>
        <section className="feedback-section">
          <div className="section-header">
            <h2>Feedback & Bug Reports</h2>
            <p>Help us improve StudyPrint — share your ideas or report any issues!</p>
          </div>
          <div className="feedback-container">
            {submissionStatus === 'success' ? (
              <div className="feedback-success">
                <div className="success-icon">🎉</div>
                <h3>Thanks for your feedback!</h3>
                <p>We've received your message and will look into it.</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSubmissionStatus(null)}
                  style={{ marginTop: '1rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <select name="type" className="form-select" required>
                    <option value="">Select Type</option>
                    <option value="suggestion">💡 Suggestion</option>
                    <option value="bug">🐛 Bug Report</option>
                    <option value="feature">✨ Feature Request</option>
                    <option value="other">💬 Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Describe your suggestion or the bug you found..."
                    required
                    className="form-textarea"
                    rows="6"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-large"
                  disabled={submissionStatus === 'submitting'}
                >
                  {submissionStatus === 'submitting' ? 'Sending...' : 'Submit Feedback'}
                </button>
                {submissionStatus === 'error' && (
                  <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>
      </RevealOnScroll>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 StudyPrint. All rights reserved.</p>
          <p>Made by Uttkarsh Bhardwaj.</p>
          <div className="footer-links">
            <a href="https://github.com/DEVuttkarsh12/StudyPrint" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:uttkarshbhardwaj@outlook.com">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <p className="tagline">"Notes → Clean Study Sheets"</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
