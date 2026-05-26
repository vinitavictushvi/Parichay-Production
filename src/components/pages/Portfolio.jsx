import React, { useState } from "react";

import "../Css/Portfolio.css";

import { Helmet } from "react-helmet";

import { Link, useNavigate } from "react-router-dom";

import PortfolioData from "../Data/Portfolio";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaPlay,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

const Portfolio = () => {
  const navigate = useNavigate();

  /* =========================
     STATES
  ========================= */

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================
     FILTER LOGIC
  ========================= */

  const filteredPortfolio = PortfolioData.filter(
    (item) => {
      const matchCategory =
        activeCategory === "All"
          ? true
          : item.category === activeCategory;

      const matchSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.category
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    }
  );

  return (
    <>
      {/* ================= SEO ================= */}

      <Helmet>
        <title>
          Portfolio | Parichay Production Pvt Ltd |
          Ads, Reels & TV Commercials
        </title>

        <meta
          name="description"
          content="Explore the creative portfolio of Parichay Production Pvt Ltd featuring cinematic ads, viral reels, TV commercials, product shoots, brand films, social media campaigns, and high-quality visual storytelling projects."
        />

        <meta
          name="keywords"
          content="
          Portfolio,
          Video Production Portfolio,
          Cinematic Ads,
          TV Commercials,
          Viral Reels,
          Brand Films,
          Creative Production,
          Ad Campaigns,
          Product Shoots,
          Corporate Videos,
          Social Media Reels,
          Digital Campaigns,
          Parichay Production,
          Best Portfolio Agency,
          Video Editing Showcase,
          Creative Ads India,
          Production House Portfolio,
          Marketing Portfolio,
          Instagram Reels Agency,
          Commercial Video Production
          "
        />

        <meta
          property="og:title"
          content="Parichay Production Portfolio"
        />

        <meta
          property="og:description"
          content="Watch our cinematic video ads, reels, TV commercials, and creative brand films."
        />

        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.parichayproduction.com/portfolio"
        />

        <link
          rel="canonical"
          href="https://www.parichayproduction.com/portfolio"
        />
      </Helmet>

      {/* ================= PAGE ================= */}

      <div className="portfolio-page">
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
                    className="nav-link active"
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
                    className="nav-link"
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
        <section className="portfolio-hero">
          <div className="portfolio-overlay"></div>

          <div className="container position-relative z-3 text-center">
            <h6 className="section-tag">
              OUR CREATIVE WORK
            </h6>

            <h1 className="portfolio-title">
              Portfolio Showcase
            </h1>

            <p className="portfolio-desc">
              Explore cinematic ads, viral reels,
              TV commercials, and brand films
              crafted for modern brands.
            </p>
          </div>
        </section>

        {/* FILTER SECTION */}
        <section className="portfolio-filter-section">
          <div className="container">
            {/* SEARCH */}
            <div className="search-box">
              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search portfolio..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            {/* FILTER BUTTONS */}
            <div className="portfolio-filter">
              <button
                className={
                  activeCategory === "All"
                    ? "active-btn"
                    : ""
                }
                onClick={() =>
                  setActiveCategory("All")
                }
              >
                All
              </button>

              <button
                className={
                  activeCategory === "Ads"
                    ? "active-btn"
                    : ""
                }
                onClick={() =>
                  setActiveCategory("Ads")
                }
              >
                Ad Campaigns
              </button>

              <button
                className={
                  activeCategory === "Reels"
                    ? "active-btn"
                    : ""
                }
                onClick={() =>
                  setActiveCategory("Reels")
                }
              >
                Social Media Reels
              </button>

              <button
                className={
                  activeCategory === "Brand Films"
                    ? "active-btn"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(
                    "Brand Films"
                  )
                }
              >
                Brand Films
              </button>

              <button
                className={
                  activeCategory === "TVC"
                    ? "active-btn"
                    : ""
                }
                onClick={() =>
                  setActiveCategory("TVC")
                }
              >
                TV Commercials
              </button>

              <button
                className={
                  activeCategory ===
                  "Corporate Videos"
                    ? "active-btn"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(
                    "Corporate Videos"
                  )
                }
              >
                Corporate Videos
              </button>

              <button
                className={
                  activeCategory ===
                  "Product Shoots"
                    ? "active-btn"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(
                    "Product Shoots"
                  )
                }
              >
                Product Shoots
              </button>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section className="portfolio-grid-section">
          <div className="container">
            <div className="row g-4">
              {filteredPortfolio.length > 0 ? (
                filteredPortfolio.map((item) => (
                  <div
                    className="col-lg-4 col-md-6"
                    key={item.id}
                  >
                    <div className="portfolio-card">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                        loading="lazy"
                      />

                      <div className="portfolio-card-overlay">
                        <button className="play-btn">
                          <FaPlay />
                        </button>

                        <div className="portfolio-info">
                          <span>
                            {item.category}
                          </span>

                          <h4>{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <div className="no-data">
                    <h3>
                      No Portfolio Found
                    </h3>

                    <p>
                      Try searching another
                      keyword.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="portfolio-cta">
          <div className="container">
            <div className="cta-box">
              <h2>
                Ready To Create
                <span>
                  {" "}
                  Viral Content?
                </span>
              </h2>

              <p>
                Let’s build cinematic videos and
                high-converting campaigns for your
                brand.
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
              Rahul Raj Tiwari — Founder & Director{" "}
              <br />
              Creative & Production Services Across India{" "}
              <br />
              Fast Response for Brand Collaborations &
              Commercial Projects
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;