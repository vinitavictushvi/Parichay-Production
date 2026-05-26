import React, { useState } from "react";

import "../Css/About.css";

import { Helmet } from "react-helmet-async";

import { Link, useNavigate } from "react-router-dom";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaPlay,
  FaCheck,
  FaBullseye,
  FaLightbulb,
  FaBolt,
  FaStar,
  FaUsers,
  FaCamera,
  FaAward,
  FaUser,
} from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= SEO ================= */}

      <Helmet>
        <title>
          About Us | Parichay Production Pvt Ltd |
          Creative Production Agency
        </title>

        <meta
          name="description"
          content="Learn about Parichay Production Pvt Ltd — a creative video production and marketing agency specializing in cinematic advertisements, brand films, social media content, TV commercials, music production, and performance-driven campaigns."
        />

        <meta
          name="keywords"
          content="
          About Parichay Production,
          Video Production Agency,
          Creative Production House,
          Cinematic Ads Agency,
          Brand Films,
          TV Commercial Production,
          Performance Marketing,
          Digital Marketing Agency,
          Creative Storytelling,
          Social Media Marketing,
          Video Editing Company,
          Viral Reels Production,
          Corporate Video Agency,
          Ad Film Makers,
          Content Production Company,
          Best Production House India,
          Rahul Raj Tiwari,
          Parichay Production Pvt Ltd
          "
        />

        <meta
          property="og:title"
          content="About Parichay Production Pvt Ltd"
        />

        <meta
          property="og:description"
          content="We create cinematic advertisements, brand films, social media content, TV commercials and performance-driven campaigns for modern brands."
        />

        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1974&auto=format&fit=crop"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://www.parichayproduction.com/about"
        />
      </Helmet>

      {/* ================= PAGE ================= */}

      <div className="about-page">
        {/* FLOATING WHATSAPP */}
        <a
          href="https://wa.me/919691912025"
          className="floating-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top px-4 py-3">
          <div className="container-fluid">
            {/* LOGO */}
            <Link
              className="navbar-brand logo-wrapper"
              to="/"
            >
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
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
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
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="/portfolio"
                    className="nav-link"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    Portfolio
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="/services"
                    className="nav-link"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="/about"
                    className="nav-link active"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="/contact"
                    className="nav-link"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* CTA */}
              <button className="btn consultation-btn">
                <a href="tel:+919691912205">
                  Get Free Consultation
                </a>

                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="about-hero">
          <div className="about-overlay"></div>

          <div className="container position-relative z-3 text-center">
            <h6 className="section-tag">
              ABOUT PARICHAY PRODUCTION
            </h6>

            <h1 className="about-title">
              We Create Stories
              <span> That Build Brands</span>
            </h1>

            <p className="about-desc">
              At Parichay Production Pvt Ltd,
              we believe content is more than
              visuals — it is the identity of a
              brand.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-main-section">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* LEFT */}
              <div className="col-lg-6">
                <div className="about-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1974&auto=format&fit=crop"
                    alt="Parichay Production"
                    className="img-fluid main-about-img"
                  />

                  <div className="experience-box">
                    <h2>8+</h2>

                    <p>Years Experience</p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-lg-6">
                <div className="about-content">
                  <h6 className="section-tag">
                    WHO WE ARE
                  </h6>

                  <h2>
                    Creative Video Production &
                    Performance Marketing Agency
                  </h2>

                  <p>
                    At Parichay Production Pvt
                    Ltd, we specialize in creating
                    cinematic advertisements,
                    brand films, social media
                    content, TV commercials,
                    music production, and
                    performance-driven digital
                    campaigns for modern
                    businesses.
                  </p>

                  <p>
                    From startups and local
                    businesses to growing brands,
                    we help companies establish a
                    powerful digital presence
                    through storytelling,
                    strategy, and creative
                    execution.
                  </p>

                  <p>
                    Our team combines filmmaking
                    aesthetics with marketing
                    psychology to create content
                    that captures attention,
                    builds trust, and increases
                    conversions.
                  </p>

                  <div className="about-points">
                    <div className="point-item">
                      <FaCheck />
                      Cinematic Video Production
                    </div>

                    <div className="point-item">
                      <FaCheck />
                      Viral Reels & Ads
                    </div>

                    <div className="point-item">
                      <FaCheck />
                      Brand Strategy & Marketing
                    </div>

                    <div className="point-item">
                      <FaCheck />
                      Creative Storytelling
                    </div>
                  </div>

                  <button
                    className="btn gold-btn mt-4"
                    onClick={() =>
                      navigate("/portfolio")
                    }
                  >
                    <FaPlay className="me-2" />
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="about-stats-section">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaUsers />
                  </div>

                  <h2>50+</h2>

                  <p>Brands Worked With</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaCamera />
                  </div>

                  <h2>100+</h2>

                  <p>Projects Completed</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaUser />
                  </div>

                  <h2>8+</h2>

                  <p>Years Experience</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaStar />
                  </div>

                  <h2>95%</h2>

                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-section">
          <div className="container">
            <div className="text-center mb-5">
              <h6 className="section-tag">
                WHY CHOOSE US
              </h6>

              <h2 className="section-title">
                More Than Just A Production
                House
              </h2>
            </div>

            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="why-card">
                  <FaBullseye className="why-icon" />

                  <h4>Result Driven</h4>

                  <p>
                    We focus on content that
                    generates real business
                    growth.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="why-card">
                  <FaLightbulb className="why-icon" />

                  <h4>Creative Ideas</h4>

                  <p>
                    Fresh storytelling concepts
                    tailored for modern
                    audiences.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="why-card">
                  <FaBolt className="why-icon" />

                  <h4>Fast Delivery</h4>

                  <p>
                    High-quality production with
                    quick turnaround time.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="why-card">
                  <FaStar className="why-icon" />

                  <h4>Premium Quality</h4>

                  <p>
                    Cinematic visuals and
                    editing that make brands
                    stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="container">
            <div className="cta-box">
              <h2>
                Ready To Grow
                <span> Your Brand?</span>
              </h2>

              <p>
                Let’s create cinematic content
                and high-performing campaigns
                together.
              </p>

              <button
                className="btn gold-btn"
                onClick={() =>
                  navigate("/contact")
                }
              >
                Book Free Consultation
              </button>
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

                <a href="/portfolio">
                  Portfolio
                </a>

                <a href="/services">
                  Services
                </a>

                <a href="/about">
                  About
                </a>

                <a href="/contact">
                  Contact
                </a>
              </div>

              {/* SOCIAL */}
              <div className="footer-social">
                <FaInstagram />
                <FaYoutube />
                <FaWhatsapp />
              </div>
            </div>

            <div className="footer-bottom">
              Rahul Raj Tiwari — Founder &
              Director
              <br />
              Creative & Production Services
              Across India
              <br />
              Fast Response for Brand
              Collaborations & Commercial
              Projects
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;