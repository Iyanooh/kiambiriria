"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ministries = [
    { name: "PCMF", href: "/ministries/men" },
    { name: "WOMAN'S GUILD", href: "/ministries/women" },
    { name: "YOUTH ", href: "/ministries/youth" },
    { name: "CHILDREN MINISTRY", href: "/ministries/children" },
    { name: "BRIGADE", href: "/ministries/brigade" },
    { name: "EDUCATION", href: "/ministries/education" },
    { name: "HEALTH BOARD", href: "/ministries/health board" },
    { name: "JPLC", href: "/ministries/jplc" },
    { name: "CHURCH CHOIR", href: "/ministries/choir" },
    { name: "EVANGELISM", href: "/ministries/evangelism" },
    { name: "LCC", href: "/ministries/lcc" },
  ];

  return (
    <>
      {/* INTERNAL CSS */}
      <style jsx>{`
        @media (max-width: 420px) {
          .title-text {
            font-size: 0.75rem !important;
          }
        }

        @media (max-width: 360px) {
          .title-text {
            font-size: 0.7rem !important;
          }
        }

        .dropdown:hover .dropdown-menu,
        .dropdown-menu:hover {
          opacity: 1 !important;
          pointer-events: auto !important;
          transition: opacity 0.2s ease;
        }

        /* FORCE-OPEN CLASS */
        .force-open .dropdown-menu {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1250px",
          zIndex: 100,
          borderRadius: "0 0 16px 16px",
          backdropFilter: "blur(12px)",
          background: "#3A3B59",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.8rem 1.4rem",
          }}
        >
          {/* Logo + Title */}
          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={isMobile ? 26 : 35}
              height={isMobile ? 26 : 35}
            />
            <span
              className="title-text"
              style={{
                fontWeight: 700,
                fontSize: isMobile ? "0.85rem" : "1rem",
                color: "white",
                wordBreak: "break-word",
              }}
            >
              P.C.E.A GEOFFREY GATHU MEMORIAL CHURCH
            </span>
          </div>

          {/* Mobile Hamburger */}
          {isMobile && (
            <div
              style={{
                fontSize: "2rem",
                cursor: "pointer",
                color: "white",
                transform: isOpen ? "rotate(90deg)" : "none",
                userSelect: "none",
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </div>
          )}

          {/* Desktop Menu */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center",
                color: "white",
                fontWeight: 500,
              }}
            >
              <Link href="/" style={{ color: "white" }}>Home</Link>

              {/* Ministries */}
              <div
                className="dropdown"
                id="ministries-menu"
                style={{ position: "relative" }}
              >
                <span style={{ cursor: "pointer" }}>Ministries ▾</span>

                <div
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "2.2rem",
                    left: 0,
                    background: "white",
                    color: "#1e3a8a",
                    borderRadius: "12px",
                    padding: "0.5rem 0",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
                    opacity: 0,
                    pointerEvents: "none",
                    transition: "opacity 0.2s ease",
                    minWidth: "200px",
                  }}
                >
                  {ministries.map((m) => (
                    <Link
                      key={m.name}
                      href={m.href}
                      style={{
                        display: "block",
                        padding: "10px 16px",
                        color: "#1e3a8a",
                        textDecoration: "none",
                      }}
                    >
                      {m.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/events" style={{ color: "white" }}>Events</Link>
              <Link href="/projects" style={{ color: "white" }}>Projects</Link>
              <Link href="/gallery" style={{ color: "white" }}>Gallery</Link>
              <Link href="/history" style={{ color: "white" }}>History</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div
            style={{
              maxHeight: isOpen ? "300px" : "0",
              overflow: "hidden",
              transition: "max-height 0.35s ease",
              padding: isOpen ? "0.7rem 1.4rem" : "0 1.4rem",
            }}
          >
            <Link href="/" style={{ color: "white", display: "block" }} onClick={() => setIsOpen(false)}>Home</Link>

            <details id="mobile-ministries">
              <summary style={{ cursor: "pointer", padding: "8px 0", color: "white" }}>
                Ministries ▾
              </summary>
              <div style={{ marginLeft: "1rem" }}>
                {ministries.map((m) => (
                  <Link
                    key={m.name}
                    href={m.href}
                    style={{ color: "white", display: "block" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/events" style={{ color: "white", display: "block" }}>Events</Link>
            <Link href="/projects" style={{ color: "white", display: "block" }}>Projects</Link>
            <Link href="/gallery" style={{ color: "white", display: "block" }}>Gallery</Link>
            <Link href="/history" style={{ color: "white", display: "block" }}>History</Link>
          </div>
        )}
      </nav>
    </>
  );
}
