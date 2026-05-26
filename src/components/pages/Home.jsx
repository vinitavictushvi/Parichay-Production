import heroVideo from "../../assets/Hero.mp4";
import founderImg from "../../assets/Founder.png";
import "../Css/Home.css";
import React, { useEffect, useRef, useState } from "react";

import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPlay,
  FaPhoneAlt,
  FaCheck,
  FaBars,
  FaTimes,
  FaTrophy,
  FaBriefcase,
  FaUser,
  FaArrowRight,
  FaBullseye,
  FaLightbulb,
  FaBolt,
  FaStar,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const videoRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const playVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // AUTO PLAY VIDEO
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      {/* ================= SEO START ================= */}

      <Helmet>
        <title>
          Parichay Production Pvt Ltd | Video Production Company India |
          Cinematic Ads & Digital Marketing
        </title>

        <meta
          name="description"
          content="Parichay Production Pvt Ltd is India's leading creative video production and marketing agency specializing in cinematic storytelling, TV commercials, performance ads, social media reels, branding, product shoots, digital campaigns, content creation, ad films, YouTube videos, Instagram reels, corporate films, and viral content marketing."
        />

        <meta
          name="keywords"
          content="
          Parichay Production,
          Video Production Company India,
          Best Production House,
          Cinematic Ads Agency,
          TV Commercial Production,
          Social Media Marketing Agency,
          Instagram Reel Creator,
          Digital Marketing Company,
          Brand Video Production,
          Corporate Video Production,
          Product Shoot Agency,
          Ad Film Makers,
          YouTube Video Production,
          Creative Agency India,
          Video Editing Services,
          Professional Videography,
          Content Marketing Agency,
          Commercial Video Ads,
          Performance Marketing Videos,
          Reels Production Company,
          Film Production Company,
          Best Branding Agency,
          Viral Content Creator,
          Creative Storytelling Agency,
          Cinematic Brand Films,
          Ad Shoot Company,
          Video Ads for Brands,
          Production House Chhattisgarh,
          Production House Raipur,
          Rahul Raj Tiwari,
          Parichay Production Pvt Ltd
          "
        />

        <meta
          name="author"
          content="Parichay Production Pvt Ltd"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="language"
          content="English"
        />

        <meta
          name="revisit-after"
          content="1 days"
        />

        {/* Open Graph SEO */}
        <meta
          property="og:title"
          content="Parichay Production Pvt Ltd | Video Production & Branding Agency"
        />

        <meta
          property="og:description"
          content="We create cinematic ads, reels, TV commercials, product shoots, and digital campaigns that grow brands."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.parichayproduction.com"
        />

        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop"
        />

        {/* Twitter SEO */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Parichay Production Pvt Ltd"
        />

        <meta
          name="twitter:description"
          content="Creative video production & branding agency helping brands grow with cinematic storytelling."
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.parichayproduction.com/"
        />

        {/* GEO SEO */}
        <meta
          name="geo.region"
          content="IN"
        />

        <meta
          name="geo.placename"
          content="India"
        />

        <meta
          name="geo.position"
          content="21.2514;81.6296"
        />

        <meta
          name="ICBM"
          content="21.2514, 81.6296"
        />

        {/* Structured Data SEO */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Parichay Production Pvt Ltd",
            "url": "https://www.parichayproduction.com",
            "logo": "https://www.parichayproduction.com/logo.png",
            "sameAs": [
              "https://instagram.com/parichay_production",
              "https://youtube.com/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9691912205",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "English"
            }
          }
          `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Parichay Production Pvt Ltd",
            "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop",
            "telephone": "+91 9691912205",
            "email": "simplybyrahul@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "priceRange": "$$",
            "description": "Creative production and marketing agency specializing in cinematic storytelling, ads, reels, branding and digital campaigns."
          }
          `}
        </script>
      </Helmet>

      {/* ================= SEO END ================= */}

      <div className="home-page">
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

            {/* MOBILE TOGGLER */}
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

        {/* HERO SECTION */}

<section className="hero-section position-relative overflow-hidden" id="home">
  {/* BACKGROUND VIDEO */}
  <video
    ref={videoRef}
    className="hero-bg-video"
    muted
    loop
    playsInline
    autoPlay
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* DARK CINEMATIC OVERLAY */}
  <div className="hero-overlay"></div>

  {/* GRADIENT GLOW */}
  <div className="hero-gradient"></div>

  {/* LIGHT EFFECTS */}
  <div className="hero-light hero-light-1"></div>
  <div className="hero-light hero-light-2"></div>

  {/* GRID */}
  <div className="hero-grid"></div>

  {/* FLOATING PARTICLES */}
  <div className="floating-particles">
    {[...Array(8)].map((_, i) => (
      <span key={i}></span>
    ))}
  </div>

  {/* CONTENT */}
  <div className="container position-relative z-3">
    <div className="row min-vh-100 align-items-center justify-content-center">
      <div className="col-lg-10 text-center hero-content-wrapper">

        {/* PREMIUM BADGE */}
        <div className="hero-badge mb-4">
          <span className="pulse-dot"></span>
          INDIA'S NEXT GEN CREATIVE AGENCY
        </div>

        {/* MAIN HEADING */}
       <h1 className="hero-heading">
  <span className="small-text">
    WE CREATE
  </span>

  <span>CINEMATIC ADS</span>

  <br />

  THAT SELL &

  <br />

  <span>SCALE BRANDS</span>
</h1>

        {/* SUBTITLE */}
        <p className="hero-subtitle">
          Premium Video Production • Viral Reels • Ad Films • Brand Storytelling
        </p>

        {/* DESCRIPTION */}
        <p className="hero-description">
          Parichay Production Pvt Ltd helps brands dominate social media with
          visually stunning commercials, high-converting campaigns, and
          emotionally engaging storytelling that people remember.
        </p>

        {/* HIGHLIGHTS */}
        <div className="hero-highlight-box">
          <div className="highlight-item">
            <FaBullseye />
            <span>Performance Marketing</span>
          </div>

          <div className="highlight-item">
            <FaLightbulb />
            <span>Creative Direction</span>
          </div>

          <div className="highlight-item">
            <FaBolt />
            <span>Production + Strategy</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="hero-btns">
          <button
            className="btn hero-primary-btn"
            onClick={() => navigate("/portfolio")}
          >
            <FaPlay className="me-2" />
            View Portfolio
          </button>

          <a
            href="tel:+919691912205"
            className="btn hero-secondary-btn"
          >
            <FaPhoneAlt className="me-2" />
            Free Consultation
          </a>
        </div>

        {/* TRUSTED TEXT */}
        <div className="hero-trust-text">
          Trusted by ambitious brands across India 🇮🇳
        </div>
      </div>
    </div>

    {/* SOCIAL ICONS */}
    <div className="hero-social-icons">
      <a
        href="https://instagram.com/parichay_production"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>

      <a href="#">
        <FaYoutube />
      </a>

      <a
        href="https://wa.me/919691912025"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>

    {/* SCROLL */}
    <div className="scroll-indicator">
      <div className="mouse">
        <span></span>
      </div>
    </div>
  </div>
</section>

        {/* STATS */}
        <section className="stats-wrapper">
          <div className="container">
            <div className="stats-box">
              <div className="stat-item">
                <div className="stat-icon gold">
                  <FaTrophy />
                </div>

                <div>
                  <h2>100+</h2>

                  <p>Projects Completed</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="stat-item">
                <div className="stat-icon blue">
                  <FaBriefcase />
                </div>

                <div>
                  <h2>50+</h2>

                  <p>Brands Worked With</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="stat-item">
                <div className="stat-icon purple">
                  <FaUser />
                </div>

                <div>
                  <h2>8+</h2>

                  <p>Years Experience</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="stat-item">
                <div className="stat-icon green">
                  <FaStar />
                </div>

                <div>
                  <h2>95%</h2>

                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          className="services-section"
          id="services"
        >
          <div className="container">
            <div className="section-header text-center">
              <h6 className="section-tag">
                OUR SERVICES
              </h6>

              <h2 className="section-title">
                What We Offer
              </h2>
            </div>

            <div className="row g-4">
              {/* CARD 1 */}
              <div className="col-lg-4">
                <div className="service-card">
                  <div className="service-icon">
                    <FaPlay />
                  </div>

                  <h3>
                    Performance Video Ads
                  </h3>

                  <p>
                    High-converting
                    advertisements designed for
                    maximum engagement and sales.
                  </p>

                  <ul>
                    <li>
                      <FaCheck />
                      Script Writing
                    </li>

                    <li>
                      <FaCheck />
                      Creative Direction
                    </li>

                    <li>
                      <FaCheck />
                      Thumbnail Design
                    </li>
                  </ul>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-lg-4">
                <div className="service-card">
                  <div className="service-icon">
                    <FaInstagram />
                  </div>

                  <h3>Social Media Reels</h3>

                  <p>
                    Engaging reels for Instagram,
                    YouTube Shorts and Facebook.
                  </p>

                  <ul>
                    <li>
                      <FaCheck />
                      Trend Research
                    </li>

                    <li>
                      <FaCheck />
                      Motion Graphics
                    </li>

                    <li>
                      <FaCheck />
                      Hooks & Captions
                    </li>
                  </ul>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-lg-4">
                <div className="service-card">
                  <div className="service-icon">
                    <FaYoutube />
                  </div>

                  <h3>TV Commercials</h3>

                  <p>
                    Premium cinematic TVCs for
                    launches and branding
                    campaigns.
                  </p>

                  <ul>
                    <li>
                      <FaCheck />
                      Cinematic Shoot
                    </li>

                    <li>
                      <FaCheck />
                      Color Grading
                    </li>

                    <li>
                      <FaCheck />
                      Sound Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <button
                className="btn view-more-btn"
                onClick={() =>
                  navigate("/services")
                }
              >
                View More Services

                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section
          className="portfolio-section py-5"
          id="portfolio"
        >
          <div className="container">
            <div className="section-header text-center">
              <h6 className="section-tag">
                OUR WORK
              </h6>

              <h2 className="section-title">
                Portfolio Preview
              </h2>
            </div>

            {/* FILTER */}
            <div className="portfolio-filter">
              <button className="active-btn">
                All
              </button>

              <button>
                Ad Campaigns
              </button>

              <button>
                Social Media Reels
              </button>

              <button>
                TV Commercials
              </button>

              <button>Brand Films</button>

              <button>
                Corporate Videos
              </button>

              <button>
                Product Shoots
              </button>
            </div>

            {/* GRID */}
            <div className="row g-4 mt-2">
              {[1, 2, 3].map((item) => (
                <div
                  className="col-lg-4 col-md-6"
                  key={item}
                >
                  <div className="portfolio-card">
                    <img
                      src={`https://picsum.photos/500/700?random=${item}`}
                      alt="Portfolio Work"
                      className="img-fluid"
                      loading="lazy"
                    />

                    <div className="portfolio-overlay">
                      <button className="play-btn">
                        <FaPlay />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <button
                className="btn view-more-btn"
                onClick={() =>
                  navigate("/portfolio")
                }
              >
                View More Portfolio

                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section
          className="testimonial-section py-5"
          id="testimonial"
        >
          <div className="container">
            <div className="section-header text-center">
              <h6 className="section-tag">
                CLIENT STORIES
              </h6>

              <h2 className="section-title">
                What Our Clients Say
              </h2>
            </div>

            <div className="testimonial-scroll-wrapper">
              <div className="testimonial-scroll-track">
                <div className="testimonial-card scroll-card">
                  <p>
                    "Parichay Production helped
                    us transform our brand
                    presence digitally. Their ad
                    creatives and cinematic
                    product videos gave our
                    business a premium identity."
                  </p>

                  <h5>
                    — Chandra Tiles
                  </h5>
                </div>

                <div className="testimonial-card scroll-card">
                  <p>
                    "The team perfectly captured
                    our salon aesthetics and
                    created content that truly
                    connected with our audience."
                  </p>

                  <h5>
                    — PR Salon and Academy
                  </h5>
                </div>

                <div className="testimonial-card scroll-card">
                  <p>
                    "Their fitness promo videos
                    and social media content
                    brought a fresh energy to our
                    brand and increased online
                    reach."
                  </p>

                  <h5>
                    — Evolve Fitness
                  </h5>
                </div>

                <div className="testimonial-card scroll-card">
                  <p>
                    "Working with Parichay
                    Production was a seamless
                    experience. Their storytelling
                    approach and production
                    quality stood out throughout
                    the project."
                  </p>

                  <h5>
                    — Guru Ghasidas
                    Vishwavidyalaya
                  </h5>
                </div>

                <div className="testimonial-card scroll-card">
                  <p>
                    "The content created by
                    Parichay Production gave our
                    salon a modern and luxurious
                    digital identity. Their reel
                    concepts and editing quality
                    were exceptional."
                  </p>

                  <h5>
                    — Meenakshi's Salon
                  </h5>
                </div>

                <div className="testimonial-card scroll-card">
                  <p>
                    "Creative direction, stylish
                    visuals, and strong execution
                    — the team delivered engaging
                    fashion content that aligned
                    perfectly with our brand
                    image."
                  </p>

                  <h5>
                    — Flyrobe
                  </h5>
                </div>

                <div className="testimonial-card scroll-card">
                  <p>
                    "Their promotional videos and
                    product showcases helped us
                    attract more customers online
                    and build a stronger local
                    presence."
                  </p>

                  <h5>
                    — Shree Fancy Dresses
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="founder-section py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <img
                  src={founderImg} 
                  alt="Rahul Raj Tiwari"
                  className="img-fluid founder-img"
                />
              </div>

              <div className="col-lg-7">
                <div className="section-header">
                  <h6 className="section-tag">
                    LEADERSHIP
                  </h6>

                  <h2 className="section-title">
                    Meet The Founder
                  </h2>
                </div>

                <h3 className="founder-name">
                  Rahul Raj Tiwari
                </h3>

                <h6 className="founder-role">
                  Founder & Director
                </h6>

                <p className="founder-text">
                  Rahul Raj Tiwari is the Founder
                  & Director of Parichay
                  Production Pvt Ltd, a creative
                  production and marketing
                  company focused on cinematic
                  storytelling, branding, and
                  performance-driven digital
                  content.
                </p>

                <p className="founder-text">
                  With 8+ years of experience in
                  filmmaking, advertising,
                  content strategy, and visual
                  storytelling, he has worked
                  with multiple brands and
                  businesses to create impactful
                  campaigns.
                </p>

                <blockquote className="founder-quote">
                  “Where Identity Meets
                  Creativity”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="contact-section py-5"
          id="contact"
        >
          <div className="container">
            <div className="contact-wrapper">
              <div className="row align-items-center justify-content-between">
                {/* LEFT CONTENT */}
                <div className="col-lg-6">
                  <div className="contact-left">
                    <h2>
                      Let’s Build Something
                      <span>
                        {" "}
                        Powerful Together
                      </span>
                    </h2>

                    <p>
                      Ready to create something
                      amazing? Connect with us
                      directly through phone,
                      WhatsApp, email, or
                      Instagram.
                    </p>

                    <button
                      className="btn gold-btn mt-4"
                      onClick={() =>
                        (window.location.href =
                          "/contact")
                      }
                    >
                      Get Quote Now
                    </button>
                  </div>
                </div>

                {/* RIGHT CONTACT DETAILS */}
                <div className="col-lg-5">
                  <div
                    className="quick-contact"
                    id="contact-details"
                  >
                    <h4>Quick Contact</h4>

                    <div className="contact-details">
                      <p>
                        📞{" "}
                        <a href="tel:+919691912205">
                          +91 9691912205
                        </a>
                      </p>

                      <p>
                        💬{" "}
                        <a
                          href="https://wa.me/919691912025"
                          target="_blank"
                          rel="noreferrer"
                        >
                          +91 9691912025
                        </a>
                      </p>

                      <p>
                        📧{" "}
                        <a href="mailto:simplybyrahul@gmail.com">
                          simplybyrahul@gmail.com
                        </a>
                      </p>

                      <p>
                        📸{" "}
                        <a
                          href="https://instagram.com/parichay_production"
                          target="_blank"
                          rel="noreferrer"
                        >
                          @parichay_production
                        </a>
                      </p>
                    </div>

                    <a
                      href="https://wa.me/919691912025"
                      className="whatsapp-btn mt-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-section">
          <div className="container">
            <div className="footer-wrapper">
              <div className="footer-logo">
                <div className="logo-icon-box">
                  <span>P</span>
                </div>

                <div className="logo-text-wrap">
                  <h4>PARICHAY</h4>

                  <p>PRODUCTION™</p>
                </div>
              </div>

              <div className="footer-links">
                <a href="#home">Home</a>

                <a href="#services">
                  Services
                </a>

                <a href="#portfolio">
                  Portfolio
                </a>

                <a href="#about">About</a>

                <a href="#contact">
                  Contact
                </a>
              </div>

              <div className="footer-social">
                <FaInstagram />

                <FaYoutube />

                <FaWhatsapp />
              </div>
            </div>

            <div className="footer-bottom">
              Rahul Raj Tiwari — Founder &
              Director{" "}
              <br />
              Creative & Production Services
              Across India{" "}
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

export default Home;