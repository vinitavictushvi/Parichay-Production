import React, {
  useEffect,
  useState,
} from "react";

import "../Css/Services.css";
import { Helmet } from "react-helmet-async";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// external data
import services from "../Data/services";

// icons
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaSearch,
  FaCheck,
  FaBullseye,
  FaLightbulb,
  FaBolt,
  FaPlay,
  FaVideo,
  FaFilm,
  FaTv,
  FaBoxOpen,
  FaMusic,
  FaBullhorn,
  FaCameraRetro,
  FaLaptopCode,
  FaChartLine,
  FaCamera,
} from "react-icons/fa";

const Services = () => {

  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [menuOpen, setMenuOpen] =
    useState(false);

  // ================= AOS =================

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);

  // ================= WHAT WE DO =================

  const whatWeDo = [
    {
      id: 1,
      icon: FaVideo,
      title:
        "Video Advertisement Production",
      category: "Production",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1974&auto=format&fit=crop",
      points: [
        "Commercial Ad Films",
        "Creative Brand Videos",
        "High Quality Production",
      ],
    },

    {
      id: 2,
      icon: FaCamera,
      title:
        "Social Media Reels & Content",
      category: "Content",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1974&auto=format&fit=crop",
      points: [
        "Instagram Reels",
        "Short Form Content",
        "Viral Video Editing",
      ],
    },

    {
      id: 3,
      icon: FaFilm,
      title:
        "Brand Films & Corporate Videos",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1974&auto=format&fit=crop",
      points: [
        "Corporate Storytelling",
        "Company Profile Videos",
        "Brand Identity Films",
      ],
    },

    {
      id: 4,
      icon: FaTv,
      title: "TV Commercials (TVC)",
      category: "Advertising",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1974&auto=format&fit=crop",
      points: [
        "TV Advertisements",
        "Broadcast Commercials",
        "Creative Direction",
      ],
    },

    {
      id: 5,
      icon: FaBoxOpen,
      title: "Product Shoots",
      category: "Photography",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
      points: [
        "Product Photography",
        "E-Commerce Shoots",
        "Creative Product Videos",
      ],
    },

    {
      id: 6,
      icon: FaMusic,
      title:
        "Music Production & Jingles",
      category: "Audio Production",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1974&auto=format&fit=crop",
      points: [
        "Custom Jingles",
        "Background Scores",
        "Sound Design",
      ],
    },

    {
      id: 7,
      icon: FaBullhorn,
      title:
        "Performance Ad Creatives",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      points: [
        "Facebook Ads",
        "High Conversion Creatives",
        "Campaign Optimization",
      ],
    },

    {
      id: 8,
      icon: FaCameraRetro,
      title:
        "Photography & Cinematography",
      category: "Production",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1974&auto=format&fit=crop",
      points: [
        "Professional Shoots",
        "Cinematic Coverage",
        "Creative Visual Direction",
      ],
    },

    {
      id: 9,
      icon: FaLaptopCode,
      title:
        "Website Design & Branding",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1972&auto=format&fit=crop",
      points: [
        "Modern Website Design",
        "Brand Identity",
        "UI/UX Experience",
      ],
    },

    {
      id: 10,
      icon: FaChartLine,
      title:
        "Digital Marketing Solutions",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1974&auto=format&fit=crop",
      points: [
        "SEO & Marketing",
        "Social Media Growth",
        "Lead Generation",
      ],
    },
  ];



const filteredServices = services.filter((item) => {
  const title =
    item?.title?.toLowerCase() || "";

  const category =
    item?.category?.toLowerCase() || "";

  const query = search.toLowerCase();

  return (
    title.includes(query) ||
    category.includes(query)
  );
});

  return (
    <>

      {/* ================= SEO ================= */}

      <Helmet>

        <title>
          Services | Parichay Production Pvt Ltd
        </title>

        <meta
          name="description"
          content="Explore premium creative production, branding, cinematic ads, social media content, photography and digital marketing services."
        />

        <meta
          name="keywords"
          content="Video Production, Brand Films, TV Commercials, Photography, Digital Marketing, Creative Agency"
        />

        <meta
          property="og:title"
          content="Services | Parichay Production Pvt Ltd"
        />

        <meta
          property="og:description"
          content="Creative production and marketing solutions for modern brands."
        />

        <meta
          property="og:type"
          content="website"
        />

        <link
          rel="canonical"
          href="https://www.parichayproduction.com/services"
        />

      </Helmet>

      {/* ================= PAGE ================= */}

      <div className="services-page">

        {/* ================= WHATSAPP ================= */}

        <a
          href="https://wa.me/919691912025"
          className="floating-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

        {/* ================= NAVBAR ================= */}

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
                menuOpen
                  ? "show"
                  : ""
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
                    className="nav-link active"
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

              <button className="btn consultation-btn glow-btn">

                <a href="tel:+919691912205">
                  Get Free Consultation
                </a>

                <FaArrowRight className="ms-2" />

              </button>

            </div>

          </div>

        </nav>

        {/* ================= HERO ================= */}

       <section className="services-hero">

  {/* BACKGROUND IMAGE */}

  <div className="hero-bg-image">

    <img
      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1974&auto=format&fit=crop"
      alt="Parichay Production"
    />

  </div>

  {/* OVERLAY */}

  <div className="services-overlay"></div>

  <div className="container position-relative z-3 text-center">

    <h6 className="section-tag">
      OUR SERVICES
    </h6>

    <h1 className="services-title">

      Creative Solutions

      <span>
        {" "}
        That Grow Brands
      </span>

    </h1>

    <p className="services-desc">

      We create cinematic visuals,
      high-performing advertisements,
      and digital experiences that help
      brands dominate online.

    </p>


  </div>

</section>

        {/* ================= SEARCH ================= */}

        <section className="services-search-section">

          <div className="container">

            <div className="services-search">

              <FaSearch />

              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

            </div>

          </div>

        </section>


    {/* ================= WHAT WE DO ================= */}

<section className="what-we-do-section">
  <div className="container">
    
    <div className="text-center mb-5">
      <h6 className="section-tag">
        WHAT WE DO
      </h6>

      <h2 className="section-title">
        Complete Creative & Marketing Solutions
      </h2>
    </div>

    {/* AUTO SLIDER */}
    <div className="what-slider">
      <div className="what-slider-track">

        {[...whatWeDo, ...whatWeDo].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              className="what-slide"
              key={index}
            >
              <div className="what-card h-100">

                {/* IMAGE */}
                <div className="what-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />

                  <div className="what-card-overlay"></div>
                </div>

                {/* CONTENT */}
                <div className="what-card-content">

                  <div className="service-icon">
                    {Icon && <Icon />}
                  </div>

                  <span className="service-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <ul>
                    {item.points?.map((p, i) => (
                      <li key={i}>
                        <FaCheck /> {p}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>

  </div>
</section>

      {/* ================= SERVICES ================= */}

<section className="services-grid-section">

  <div className="container">

    <div className="text-center mb-5">

      <h6 className="section-tag">
        OUR SERVICES
      </h6>

      <h2 className="section-title">
        Professional Creative Services
      </h2>

    </div>

    <div className="row g-4">

      {filteredServices.length > 0 ? (

        filteredServices.map((item) => {

          const Icon = item.icon;

          return (

            <div
              className="col-lg-4 col-md-6"
              key={item.id}
              data-aos="fade-up"
            >

              {/* NEW SERVICE CARD */}

              <div className="main-service-card">

                {/* IMAGE */}

                <div className="main-service-image">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />

                  <div className="main-service-overlay"></div>

                </div>

                {/* CONTENT */}

                <div className="main-service-content">

                  <div className="service-icon">

                    {Icon ? <Icon /> : null}

                  </div>

                  <span className="service-category">
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="service-meta">

                    <span>
                      {item.pricing}
                    </span>

                    <span>
                      {item.timeline}
                    </span>

                  </div>

                  <p className="best-for">

                    Best For : {item.bestFor}

                  </p>

                  {Array.isArray(item.deliverables) &&
                    item.deliverables.length > 0 && (

                    <ul>

                      {item.deliverables.map((p, i) => (

                        <li key={i}>

                          <FaCheck /> {p}

                        </li>

                      ))}

                    </ul>

                  )}

                </div>

              </div>

            </div>

          );

        })

      ) : (

        <div className="col-12 text-center">

          <h3>
            No Services Found
          </h3>

        </div>

      )}

    </div>

  </div>

</section>

        {/* ================= WHY CHOOSE US ================= */}

        <section className="why-choose-section">

          <div className="container">

            <div className="text-center mb-5">

              <h6 className="section-tag">
                WHY CHOOSE US
              </h6>

              <h2 className="section-title">
                Why Brands Trust
                Parichay
              </h2>

            </div>

            <div className="row g-4">

              <div
                className="col-lg-4"
                data-aos="fade-up"
              >

                <div className="why-card">

                  <FaBullseye />

                  <h3>
                    Result Driven
                  </h3>

                  <p>

                    High-performing creative
                    strategies focused on
                    growth and conversion.

                  </p>

                </div>

              </div>

              <div
                className="col-lg-4"
                data-aos="fade-up"
              >

                <div className="why-card">

                  <FaLightbulb />

                  <h3>
                    Creative Excellence
                  </h3>

                  <p>

                    Modern cinematic visuals
                    and storytelling that
                    build powerful brands.

                  </p>

                </div>

              </div>

              <div
                className="col-lg-4"
                data-aos="fade-up"
              >

                <div className="why-card">

                  <FaBolt />

                  <h3>
                    Fast Execution
                  </h3>

                  <p>

                    Smooth production
                    workflow with timely
                    project delivery.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="services-cta">

          <div className="container">

            <div className="cta-box">

              <h2>

                Ready To Grow

                <span>
                  {" "}
                  Your Brand?
                </span>

              </h2>

              <p>

                Let’s create cinematic
                content and high-performing
                campaigns together.

              </p>

              {/* MINI POINTS */}

              <div className="cta-mini-points">

                <span>
                  <FaCheck />
                  {" "}
                  Free Strategy Call
                </span>

                <span>
                  <FaCheck />
                  {" "}
                  Creative Planning
                </span>

                <span>
                  <FaCheck />
                  {" "}
                  Fast Delivery
                </span>

              </div>

              <button
                className="btn gold-btn"
                onClick={() =>
                  navigate("/contact")
                }
              >

                <FaPlay className="me-2" />

                Book Free Consultation

              </button>

            </div>

          </div>

        </section>

        {/* ================= FOOTER ================= */}

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

                <a href="/">
                  Home
                </a>

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

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
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

            </div>

            {/* FOOTER BOTTOM */}

            <div className="footer-bottom">

              Rahul Raj Tiwari —
              Founder & Director

              <br />

              Creative & Production
              Services Across India

              <br />

              Fast Response for Brand
              Collaborations &
              Commercial Projects

            </div>

          </div>

        </footer>

      </div>

    </>
  );
};

export default Services;  