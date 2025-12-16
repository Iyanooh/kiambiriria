"use client";
import { useState, useEffect } from "react";

const slides = [
  { title: "Our Church", image: "/history/church1.png" },
  { title: "Children's Ministry", image: "/gallery/children1.jpeg" },
  { title: "Women's Fellowship", image: "/gallery/women1.jpeg" },
];

export default function SubHero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(false), 4000);
    const handleMouseMove = () => {
      setShowButtons(true);
      clearTimeout(timer);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showButtons]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  };

  const slide = slides[current];

  return (
    <section className="subhero">
      <img
        key={current}
        src={slide.image}
        alt={slide.title}
        className={`subhero-image ${fade ? "fade-in" : "fade-out"}`}
      />

      {/* Right-middle title overlay */}
      <div className={`title-overlay ${fade ? "fade-in" : "fade-out"}`}>
        {slide.title}
      </div>

      {/* Navigation Buttons */}
      {showButtons && (
        <>
          <button className="subhero-btn left" onClick={prevSlide}>‹</button>
          <button className="subhero-btn right" onClick={nextSlide}>›</button>
        </>
      )}

      <style jsx>{`
        .subhero {
          position: relative;
          width: 100%;
          height: 50vh;
          min-height: 250px;
          overflow: hidden;
          border-radius: 15px;
        }

        .subhero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.8s ease-in-out;
        }

        .fade-in { opacity: 1; }
        .fade-out { opacity: 0; }

        .title-overlay {
          position: absolute;
          top: 50%;
          right: 2%;
          transform: translateY(-50%);
          background: rgba(220, 220, 220, 0.5);
          color: #000;
          font-weight: bold;
          font-size: 2rem;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          text-align: center;
          max-width: 250px;
          white-space: normal; /* allows text to wrap */
          overflow: hidden;
          text-overflow: ellipsis;
          transition: all 0.8s ease, transform 0.8s ease;
        }

        /* Animate title sliding from right when fading in */
        .fade-in.title-overlay {
          transform: translateY(-50%) translateX(0);
        }
        .fade-out.title-overlay {
          transform: translateY(-50%) translateX(20px);
          opacity: 0;
        }

        .subhero-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.3);
          border: none;
          border-radius: 50%;
          padding: 10px 14px;
          cursor: pointer;
          font-size: 1.5rem;
          color: #000;
          opacity: 0.6;
          transition: opacity 0.5s;
          z-index: 10;
        }

        .subhero-btn.left { left: 10px; }
        .subhero-btn.right { right: 10px; }
        .subhero-btn:hover { opacity: 1; }

        /* Responsive */
        @media (max-width: 768px) {
          .subhero { height: 40vh; }
          .title-overlay { font-size: 1.5rem; padding: 0.3rem 0.6rem; max-width: 180px; }
        }

        @media (max-width: 420px) {
          .subhero { height: 35vh; }
          .title-overlay { font-size: 1.2rem; padding: 0.25rem 0.5rem; max-width: 140px; }
        }

        @media (max-width: 360px) {
          .subhero { height: 30vh; }
          .title-overlay { font-size: 1rem; padding: 0.2rem 0.4rem; max-width: 120px; }
        }
      `}</style>
    </section>
  );
}
