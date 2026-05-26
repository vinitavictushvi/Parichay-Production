import React, { useState } from "react";
import "../Css/Contact.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);

    const body = encodeURIComponent(`
Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Message:
${formData.message}
    `);

    // DIRECT MAIL OPEN
    window.location.href = `mailto:victushvi@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Opening Gmail...");

    // RESET FORM
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* SEO */}
      <Helmet>
        <title>Contact | Parichay Production</title>

        <meta
          name="description"
          content="Contact Parichay Production for reels, shoots, commercials and branding."
        />

        <meta
          name="keywords"
          content="production house, reels, photography, videography, branding"
        />
      </Helmet>

      {/* TOASTER */}
      <Toaster position="top-right" />

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919691912205?text=Hello%20Parichay%20Production"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top px-4 py-3">
        <div className="container-fluid">
          {/* LOGO */}
          <Link className="navbar-brand logo-wrapper" to="/">
            <div className="logo-icon-box">
              <span>P</span>
            </div>

            <div className="logo-text-wrap">
              <h4>PARICHAY</h4>
              <p>PRODUCTION™</p>
            </div>
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler border-0 shadow-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* MENU */}
          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav mx-auto align-items-lg-center text-center gap-lg-4 gap-2">
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/portfolio"
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/services"
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/about"
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/contact"
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* BUTTON */}
            <button className="btn consultation-btn">
              Get Free Consultation
              <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-overlay"></div>

        <div className="container position-relative z-3 text-center">
          <h6 className="section-tag">CONTACT US</h6>

          <h1 className="contact-title">
            Let’s Build Something
            <span> Extraordinary</span>
          </h1>

          <p className="contact-desc">
            Have a project idea or want to grow your brand?
            Connect with Parichay Production today.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* LEFT */}
            <div className="col-lg-5">
              <div className="contact-info-box">
                <h2>Get In Touch</h2>

                <p>
                  We are available for shoots,
                  commercials, reels and campaigns.
                </p>

                <div className="contact-info-item">
                  <FaPhoneAlt />
                  <span>+91 9691912205</span>
                </div>

                <div className="contact-info-item">
                  <FaWhatsapp />
                  <span>+91 9691912025</span>
                </div>

                <div className="contact-info-item">
                  <FaEnvelope />
                  <span>simplybyrahul@gmail.com</span>
                </div>

                <div className="contact-info-item">
                  <FaInstagram />
                  <span>@parichay_production</span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-7">
              <div className="contact-form-box">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      rows="6"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="form-control"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn gold-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-wrapper">
            {/* LOGO */}
            <div className="footer-logo">
              <div className="logo-icon-box">
                <span>P</span>
              </div>

              <div className="logo-text-wrap">
                <h4>PARICHAY</h4>
                <p>PRODUCTION™</p>
              </div>
            </div>

            {/* LINKS */}
            <div className="footer-links">
              <a href="/">Home</a>

              <a href="/portfolio">Portfolio</a>

              <a href="/services">Services</a>

              <a href="/about">About</a>

              <a href="/contact">Contact</a>
            </div>

            {/* SOCIAL */}
            <div className="footer-social">
              <FaInstagram />
              <FaYoutube />
              <FaWhatsapp />
            </div>
          </div>

          <div className="footer-bottom">
            Rahul Raj Tiwari — Founder & Director

            <br />

            Creative & Production Services Across India

            <br />

            Fast Response for Brand Collaborations &
            Commercial Projects
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;