import React from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./assets/logo.png";
import medicalBilling from "./assets/medical_billing.png";
import insurance from "./assets/insurance.png";
import denial from "./assets/Denial.png";
import patientBilling from "./assets/patient_billing.png";
import reporting from "./assets/reporting.png";
import credentialing from "./assets/credentialing.png";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Faith Medical Billing Corp Logo" className="logo" />
        <h1>Faith Medical Billing Corp</h1>
        <p>Overwhelmed by Billing? We Can Help!</p>
        <a href="#services" className="cta-btn">Learn More</a>
        <a href="mailto:fmb@faithmedicalbilling.com" className="contact-btn">Contact Us</a>
      </header>

      <section id="services" className="services-section">
        <Slider {...settings}>
          <div className="slider-content">
            <img src={medicalBilling} alt="Medical Billing" />
            <h2>Complete Medical Billing</h2>
            <p>Top-notch services to streamline your healthcare practice.</p>
          </div>
          <div className="slider-content">
            <img src={insurance} alt="Insurance Verification" />
            <h2>Insurance Verification</h2>
            <p>Ensure all claims are verified for a smooth process.</p>
          </div>
          <div className="slider-content">
            <img src={denial} alt="Denial Management" />
            <h2>Denial Management</h2>
            <p>Proactively handle denials with customized solutions, ensuring minimal revenue loss and faster claims approval.</p>
          </div>
          <div className="slider-content">
            <img src={patientBilling} alt="Patient Billing" />
            <h2>Patient Billing</h2>
            <p>Simplified billing for patients with transparent statements and secure payment methods for easy processing.</p>
          </div>
          <div className="slider-content">
            <img src={reporting} alt="Customized Reporting" />
            <h2>Customized Reporting</h2>
            <p>Customized insights for better billing performance.</p>
          </div>
          <div className="slider-content">
            <img src={credentialing} alt="Provider Credentialing" />
            <h2>Provider Credentialing</h2>
            <p>Streamline your credentialing process with our solutions.</p>
          </div>
        </Slider>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>To simplify medical billing complexities with innovative solutions.</p>
          </div>
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>We empower healthcare providers with the financial freedom to focus on patient care.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Contact us: fmb@faithmedicalbilling.com | 619-963-2065</p>
        <p>© 2024 Faith Medical Billing Corp</p>
      </footer>
    </div>
  );
}

export default App;