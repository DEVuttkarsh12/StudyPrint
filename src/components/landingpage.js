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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="hero-badge">A space for focus</div>
            <h1 className="hero-headline">
              From messy notes to <br /><em>elegant study sheets.</em>
            </h1>
            <p className="hero-subheadline">
              Transform your scattered thoughts into structured, print-ready A4 guides.
              Private, offline, and beautifully simple.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={handleStartClick}>Enter the Workspace</button>
              <button className="btn btn-secondary" onClick={handleSeeFeaturesClick}>Learn More</button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <RevealOnScroll>
        <section className="features-section">
          <div className="section-header">
            <h2>Thoughtful features.</h2>
            <p>Everything you need, nothing you don't.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Offline First</h3>
              <p>Your data never leaves your device. Total privacy for your most personal notes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Perfect Layouts</h3>
              <p> Crisp A4 PDFs with balanced margins and refined typography, every single time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Zero Friction</h3>
              <p>No accounts or signups. Just open the app and start creating immediately.</p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* How It Works Section */}
      <RevealOnScroll>
        <section className="how-it-works-section">
          <div className="section-header">
            <h2>The Process</h2>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <span className="step-num">01</span>
              <div className="step-info">
                <h3>Draft your notes</h3>
                <p>Paste text from any source — your lecture notes, summaries, or quick thoughts.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">02</span>
              <div className="step-info">
                <h3>Refine the look</h3>
                <p>Adjust spacing and typography to suit your studying style with subtle controls.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">03</span>
              <div className="step-info">
                <h3>Print and focus</h3>
                <p>Export to a high-quality PDF ready for your desk or binder.</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* CTA Section */}
      <RevealOnScroll>
        <section className="cta-section">
          <div className="cta-inner">
            <h2>Ready to start?</h2>
            <p>Join students who value clarity and focused revision.</p>
            <button className="btn btn-primary" onClick={handleStartClick}>Launch StudyPrint</button>
          </div>
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
