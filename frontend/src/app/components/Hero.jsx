"use client";
import { useEffect, useState } from "react";

const slides = [
  { title: "Welcome to P.C.E.A GEOFFREY GATHU MEMORIAL CHURCH", subtitle: "Where Faith Meets Love", image: "/theme1.jpg" },
  { title: "This Year's Theme", subtitle: "Walking in the Light of Christ", image: "/theme.jpg" },
  { title: "Today's Sermon", subtitle: "The Power of Grace", image: "/sermon.jpg" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => { const interval = setInterval(() => nextSlide(), 4000); return () => clearInterval(interval); }, [current]);

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(false), 4000);
    const handleMouseMove = () => { setShowButtons(true); clearTimeout(timer); };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showButtons]);

  const nextSlide = () => { setFade(false); setTimeout(() => { setCurrent((prev) => (prev + 1) % slides.length); setFade(true); }, 300); };
  const prevSlide = () => { setFade(false); setTimeout(() => { setCurrent((prev) => (prev - 1 + slides.length) % slides.length); setFade(true); }, 300); };
  const slide = slides[current];

  return (
    <section className="hero">
      <img key={current} src={slide.image} alt={slide.title} className={`hero-image ${fade ? "fade-in" : "fade-out"}`} />
      <div className={`hero-content ${fade ? "fade-in" : "fade-out"}`}>
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
      </div>
      {showButtons && (
        <>
          <button className="hero-btn left" onClick={prevSlide}>‹</button>
          <button className="hero-btn right" onClick={nextSlide}>›</button>
        </>
      )}
      <style jsx>{`
        .hero { position: relative; width: 100%; height: 66vh; min-height: 250px; max-height: 700px; overflow: hidden; display: flex; justify-content: center; align-items: center; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; filter: brightness(70%); position: absolute; top: 0; left: 0; transition: opacity 0.8s ease-in-out; }
        .fade-in { opacity: 1; }
        .fade-out { opacity: 0; }
        .hero-content { position: relative; text-align: center; color: white; z-index: 5; transition: all 0.8s ease; padding: 0 1rem; max-width: 1200px; width: 90%; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .hero-content h1 { font-size: 4vw; font-weight: bold; margin: 0; text-shadow: 0px 2px 10px rgba(0,0,0,0.4); }
        .hero-content p { font-size: 2vw; margin-top: 10px; text-shadow: 0px 2px 6px rgba(0,0,0,0.4); }
        .hero-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.3); border: none; border-radius: 50%; padding: 10px 14px; cursor: pointer; font-size: 2vw; color: #000; opacity: 0.6; transition: opacity 0.5s; z-index: 10; }
        .hero-btn.left { left: 15px; }
        .hero-btn.right { right: 15px; }
        .hero-btn:hover { opacity: 1; }
        @media (max-width: 1024px) { .hero { height: 60vh; } .hero-content h1 { font-size: 5vw; } .hero-content p { font-size: 3vw; } .hero-btn { font-size: 3vw; padding: 8px 12px; } }
        @media (max-width: 768px) { .hero { height: 70vh; } .hero-content h1 { font-size: 6vw; } .hero-content p { font-size: 3.5vw; } .hero-btn { font-size: 4vw; padding: 7px 10px; } }
        @media (max-width: 420px) { .hero { height: 55vh; } .hero-content h1 { font-size: 8vw; } .hero-content p { font-size: 4.5vw; } .hero-btn { font-size: 5vw; padding: 6px 8px; } }
        @media (max-width: 360px) { .hero { height: 50vh; } .hero-content h1 { font-size: 9vw; } .hero-content p { font-size: 5vw; } .hero-btn { font-size: 6vw; padding: 5px 6px; } }
      `}</style>
    </section>
  );
}
