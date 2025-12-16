"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [fadeModal, setFadeModal] = useState(false);
  const [showPoolDetails, setShowPoolDetails] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const mainProject = {
    title: "Swimming Pool Project",
    description:
      "Join us in building a community swimming pool for recreation, youth programs, and fellowship events. Your support makes a lasting impact!",
    image: "/pool 1.jpg",
    collectedAmount: 1500000,
    targetamount: 6000000,
  };

  const projects = [
    {
      title: "Church Renovation",
      description:
        "Renovating our main sanctuary to provide a better worship experience.",
      image: "/renovation.jpg",
    },
  ];

  const progressPercentage = Math.min(
    (mainProject.collectedAmount / mainProject.targetamount) * 100,
    100
  );

  // Animate progress bar
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      if (progress >= progressPercentage) {
        progress = progressPercentage;
        clearInterval(interval);
      }
      setAnimatedProgress(progress);
    }, 15);
    return () => clearInterval(interval);
  }, [progressPercentage]);

  // Track screen width for responsiveness
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Styles
  const styles = {
    section: {
      width: "100%",
      padding: screenWidth < 360 ? "4rem 1rem" : "6rem 2rem",
      backgroundColor: "#f9fafb",
      textAlign: "center",
    },
    hero: {
      position: "relative",
      borderRadius: "15px",
      overflow: "hidden",
      marginBottom: "3rem",
      maxWidth: "900px",
      margin: "0 auto",
      boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    },
    heroImage: {
      width: "100%",
      height: screenWidth < 360 ? "250px" : "400px",
      objectFit: "cover",
      filter: "brightness(70%)",
    },
    heroContent: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      textAlign: "center",
      padding: "0 1rem",
    },
    heroTitle: {
      fontSize: screenWidth < 360 ? "1.8rem" : "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    heroDesc: {
      fontSize: screenWidth < 360 ? "1rem" : "1.2rem",
      marginBottom: "1.5rem",
    },
    donationSection: {
      backgroundColor: "#1e3a8a",
      color: "white",
      padding: screenWidth < 360 ? "2rem 1rem" : "3rem 2rem",
      borderRadius: "15px",
      marginTop: "2rem",
      maxWidth: screenWidth < 360 ? "95%" : "600px",
      margin: "2rem auto",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    },
    collectedAmount: {
      fontSize: screenWidth < 360 ? "1.2rem" : "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.8rem",
    },
    targetamount: {
      fontSize: screenWidth < 360 ? "1.2rem" : "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.8rem",
    },
    thankYou: {
      fontSize: screenWidth < 360 ? "0.95rem" : "1.1rem",
      marginBottom: "1rem",
    },
    donateButton: {
      padding: screenWidth < 360 ? "0.5rem 1rem" : "0.75rem 1.5rem",
      backgroundColor: "#fbbf24",
      color: "#1e3a8a",
      border: "none",
      borderRadius: "50px",
      fontWeight: "bold",
      fontSize: screenWidth < 360 ? "0.9rem" : "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    progressBarContainer: {
      width: "100%",
      backgroundColor: "#d1d5db",
      borderRadius: "12px",
      height: screenWidth < 360 ? "15px" : "20px",
      marginBottom: "1rem",
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      backgroundColor: "#fbbf24",
      textAlign: "center",
      color: "#1e3a8a",
      fontWeight: "bold",
      lineHeight: screenWidth < 360 ? "15px" : "20px",
      transition: "width 0.3s ease",
      fontSize: screenWidth < 360 ? "0.7rem" : "0.85rem",
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: screenWidth < 360 ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1rem",
      marginTop: "3rem",
      justifyItems: "center",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      width: "100%",
      maxWidth: "300px",
    },
    cardHover: { transform: "scale(1.03)", boxShadow: "0 8px 16px rgba(0,0,0,0.15)" },
    cardImage: { width: "100%", height: screenWidth < 360 ? "140px" : "180px", objectFit: "cover" },
    cardContent: { padding: "1rem", textAlign: "left" },
    cardTitle: { fontSize: screenWidth < 360 ? "1rem" : "1.2rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "0.5rem" },
    cardDesc: { fontSize: screenWidth < 360 ? "0.8rem" : "0.95rem", color: "#444", lineHeight: "1.4" },
    modalBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      opacity: fadeModal ? 1 : 0,
      transition: "opacity 0.5s ease",
    },
    modalContent: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "15px",
      maxWidth: screenWidth < 360 ? "90%" : "400px",
      width: "90%",
      textAlign: "center",
      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      position: "relative",
      transform: fadeModal ? "translateY(0)" : "translateY(-20px)",
      transition: "all 0.5s ease",
    },
    closeButton: { position: "absolute", top: "10px", right: "15px", cursor: "pointer", fontSize: "1.2rem", fontWeight: "bold" },
    payDetail: { margin: "1rem 0", fontWeight: "bold", color: "#1e3a8a" },
  };

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => setFadeModal(true), 50);
  };

  const closeModal = () => {
    setFadeModal(false);
    setTimeout(() => setShowModal(false), 500);
  };

  const handleReadMore = () => {
    setShowPoolDetails(!showPoolDetails);
  };

  return (
    <section style={styles.section}>
      {/* Hero */}
      <div style={styles.hero}>
        <Image
          src={mainProject.image}
          alt={mainProject.title}
          width={900}
          height={400}
          style={styles.heroImage}
        />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{mainProject.title}</h1>
          <p style={styles.heroDesc}>{mainProject.description}</p>
        </div>
      </div>

      {/* Donation Section */}
      <div style={styles.donationSection}>
        <h2 style={{ fontSize: screenWidth < 360 ? "1.5rem" : "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Support the Swimming Pool Project
        </h2>
        <p style={styles.collectedAmount}>
          Amount Collected: KES {mainProject.collectedAmount.toLocaleString()}
        </p>
        <p style={styles.collectedAmount}>
          Target Amount: KES {mainProject.targetamount.toLocaleString()}
        </p>
        <p style={styles.thankYou}>
          Thank you for your generous support! Every contribution counts.
        </p>

        {/* Animated Progress Bar */}
        <div style={styles.progressBarContainer}>
          <div style={{ ...styles.progressBar, width: `${animatedProgress}%` }}>
            {Math.floor(animatedProgress)}%
          </div>
        </div>

        <button style={styles.donateButton} onClick={openModal}>
          Donate
        </button>

        {/* Read More Link */}
        <button
          onClick={handleReadMore}
          style={{
            background: "none",
            border: "none",
            color: "#f4b400",
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: 500,
            marginTop: "1rem",
          }}
        >
          {showPoolDetails ? "Show Less" : "Read More"}
        </button>

        {/* Inline Pool Details */}
        {showPoolDetails && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#0e95beff",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <p><strong>Cost:</strong> KES 6,000,000</p>
            <p><strong>Amount Collected:</strong> KES {mainProject.collectedAmount.toLocaleString()}</p>
            <p><strong>Level Reached:</strong> {Math.floor(progressPercentage)}%</p>
            <p>
              <strong>Description:</strong> The swimming pool project is aimed at creating a safe environment for swimming lessons, youth activities, and community events.
            </p>
          </div>
        )}
      </div>

      {/* Other Projects Grid */}
      <div style={styles.projectsGrid}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={180}
              style={styles.cardImage}
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardDesc}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Payment Details */}
      {showModal && (
        <div style={styles.modalBackdrop} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span style={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <h2>Payment Details</h2>
            <p style={styles.payDetail}>Paybill: 123456</p>
            <p style={styles.payDetail}>Account: 654321</p>
            <p style={styles.payDetail}>Name: Swimming Pool</p>
            <p>Use your preferred mobile payment method to complete the donation.</p>
          </div>
        </div>
      )}
    </section>
  );
}
