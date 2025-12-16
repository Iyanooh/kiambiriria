"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Gallery() {
  const sections = [
    { label: "Children's Ministry", key: "Children" },
    { label: "Women's Guild", key: "Women" },
    { label: "Men Fellowship", key: "Men" },
    { label: "Brigade", key: "brigade" },
    { label: "Choir", key: "choir" },
    { label: "Healthboard", key: "healthboard" },
    { label: "Charity Work", key: "work" },
    { label: "Education", key: "education" },
    { label: "Evangelism", key: "evangelism" },
    { label: "Jplc", key: "jplc" },
    { label: "Lcc", key: "lcc" },
    { label: "YouthMinistry", key: "youth" },
  ];

  const galleryImages = {
    Children: [
      { src: "/gallery/children1.jpeg", caption: "Children enjoying Sunday School activities" },
      { src: "/gallery/children2.jpeg", caption: "Kids participating in church events" },
      { src: "/gallery/children3.jpg", caption: "Group photo of our young members" },
    ],
    Women: [
      { src: "/gallery/women1.jpeg", caption: "Women's fellowship meeting" },
      { src: "/gallery/women2.jpeg", caption: "Prayer session with women" },
      { src: "/gallery/women3.jpeg", caption: "Women leading community outreach" },
    ],
    Men: [
      { src: "/gallery/men1.jpg", caption: "Men's fellowship group photo" },
      { src: "/gallery/men2.jpg", caption: "Men volunteering at charity work" },
      { src: "/gallery/men3.jpg", caption: "Men in leadership workshop" },
    ],
    work: [
      { src: "/gallery/charity1.jpg", caption: "Feeding program for the community" },
      { src: "/gallery/charity2.jpg", caption: "Church members distributing aid" },
      { src: "/gallery/charity3.jpg", caption: "Community clean-up activity" },
    ],
    education: [
      { src: "/gallery/education1.jpg", caption: "Students in church-run school" },
      { src: "/gallery/education2.jpg", caption: "Educational workshop for youth" },
      { src: "/gallery/education3.jpg", caption: "Graduation ceremony at church school" },
    ],
    evangelism: [
      { src: "/gallery/evangelism1.jpg", caption: "Street evangelism outreach" },
      { src: "/gallery/evangelism2.jpg", caption: "Sharing the gospel in the community" },
      { src: "/gallery/evangelism3.jpg", caption: "Church members on evangelism mission" },
    ],
    brigade: [
      { src: "/gallery/brigade1.jpg", caption: "Brigade members in uniform" },
      { src: "/gallery/brigade2.jpg", caption: "Brigade training session" },
      { src: "/gallery/brigade3.jpg", caption: "Brigade community service activity" },
    ],
    choir: [
      { src: "/gallery/choir1.jpg", caption: "Church choir performing during service" },
      { src: "/gallery/choir2.jpg", caption: "Choir practice session" },
      { src: "/gallery/choir3.jpg", caption: "Special choir event" },
    ],
    healthboard: [
      { src: "/gallery/healthboard1.jpg", caption: "Health board organizing a clinic" },
      { src: "/gallery/healthboard2.jpg", caption: "Medical outreach program" },
      { src: "/gallery/healthboard3.jpg", caption: "Health awareness seminar" },
    ],
    jplc: [
      { src: "/gallery/jplc1.jpg", caption: "JPLC youth group activity" },
      { src: "/gallery/jplc2.jpg", caption: "JPLC community service" },
      { src: "/gallery/jplc3.jpg", caption: "JPLC leadership training" },
    ],
    lcc: [
      { src: "/gallery/lcc1.jpg", caption: "LCC meeting session" },
      { src: "/gallery/lcc2.jpg", caption: "LCC community outreach" },
      { src: "/gallery/lcc3.jpg", caption: "LCC youth engagement" },
    ],
    youth: [
      { src: "/gallery/youth1.jpeg", caption: "Youth group fellowship" },
      { src: "/gallery/youth2.jpeg", caption: "Youth participating in church event" },
      { src: "/gallery/youth3.jpeg", caption: "Youth leadership workshop" },
    ],
  };

  const [activeSectionKey, setActiveSectionKey] = useState(sections[0].key);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeImage, setFadeImage] = useState(true);

  const styles = {
    page: {
      padding: "4rem 1rem",
      backgroundColor: "#f8fafc",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      fontWeight: "800",
      marginBottom: "2rem",
      color: "#1e3a8a",
    },
    tabs: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.8rem",
      marginBottom: "2.5rem",
    },
    tab: (active) => ({
      padding: "0.5rem 1.2rem",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "600",
      border: active ? "2px solid #1e3a8a" : "2px solid #cbd5e1",
      backgroundColor: active ? "#1e3a8a" : "#ffffff",
      color: active ? "white" : "#1e3a8a",
      transition: "all 0.3s ease",
    }),
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: "1.5rem",
    },
    card: {
      borderRadius: "12px",
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
    },
    lightboxBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.85)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      flexDirection: "column",
      padding: "1rem",
    },
    lightboxImage: (fade) => ({
      maxWidth: "90%",
      maxHeight: "80%",
      borderRadius: "15px",
      objectFit: "contain",
      opacity: fade ? 1 : 0,
      transition: "opacity 0.5s ease",
    }),
    caption: {
      color: "white",
      marginTop: "1rem",
      fontSize: "1rem",
      textAlign: "center",
    },
    navArrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "2rem",
      color: "#fff",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: "50%",
      userSelect: "none",
    },
    left: { left: "20px" },
    right: { right: "20px" },
  };

  const openLightbox = (idx) => {
    setCurrentImageIndex(idx);
    setLightboxOpen(true);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const imgs = galleryImages[activeSectionKey];
    setCurrentImageIndex((i) => (i + 1) % imgs.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const imgs = galleryImages[activeSectionKey];
    setCurrentImageIndex((i) => (i === 0 ? imgs.length - 1 : i - 1));
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Gallery</h1>

      {/* Tabs */}
      <div style={styles.tabs}>
        {sections.map((sec) => (
          <div
            key={sec.key}
            style={styles.tab(activeSectionKey === sec.key)}
            onClick={() => setActiveSectionKey(sec.key)}
          >
            {sec.label}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {galleryImages[activeSectionKey].map((img, idx) => (
          <div
            key={idx}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.12)";
            }}
            onClick={() => openLightbox(idx)}
          >
            <Image
              src={img.src}
              alt="gallery"
              width={500}
              height={350}
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div style={styles.lightboxBackdrop} onClick={() => setLightboxOpen(false)}>
          <span style={{ ...styles.navArrow, ...styles.left }} onClick={prevImage}>
            &#8592;
          </span>

          <img
            src={galleryImages[activeSectionKey][currentImageIndex].src}
            alt="Expanded"
            style={styles.lightboxImage(fadeImage)}
          />

          <p style={styles.caption}>
            {galleryImages[activeSectionKey][currentImageIndex].caption}
          </p>

          <span style={{ ...styles.navArrow, ...styles.right }} onClick={nextImage}>
            &#8594;
          </span>
        </div>
      )}
    </div>
  );
}
