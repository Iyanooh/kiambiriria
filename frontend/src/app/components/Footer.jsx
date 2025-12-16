"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const openMinistriesMenu = (e) => {
    e.preventDefault();

    // scroll to navbar
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      const menu = document.getElementById("ministries-menu");
      const mobileMenu = document.getElementById("mobile-ministries");

      // Desktop
      if (menu) {
        menu.classList.add("force-open");
        setTimeout(() => menu.classList.remove("force-open"), 4000);
      }

      // Mobile
      if (mobileMenu) {
        mobileMenu.open = true;
      }
    }, 600);
  };

  return (
    <footer
      style={{
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "40px 20px 10px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "30px",
        }}
      >
        {/* Address */}
        <div>
          <h3 style={{ marginBottom: "10px", color: "#f4b400" }}>Address</h3>
          <p style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <MapPin size={16} style={{ marginRight: "8px" }} />
            <a
              href="https://maps.app.goo.gl/5CshSsRUX41NPZYE7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ccc", textDecoration: "none" }}
            >
              P.C.E.A GEOFFREY GATHU MEMORIAL CHURCH, GATHANJI, KIAMBU
            </a>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ marginBottom: "10px", color: "#f4b400" }}>Contact</h3>
          <p style={{ display: "flex", alignItems: "center" }}>
            <Phone size={16} style={{ marginRight: "8px" }} />
            <a href="tel:+254700000000" style={{ color: "#ccc" }}>+254 700 000 000</a>
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <Mail size={16} style={{ marginRight: "8px" }} />
            <a href="mailto:info@yourchurch.org" style={{ color: "#ccc" }}>
              info@yourchurch.org
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: "10px", color: "#f4b400" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <Link href="/" style={{ color: "#ccc" }}>Home</Link>
            </li>

            {/* SPECIAL CLICK HANDLER */}
            <li>
              <a
                href="#"
                onClick={openMinistriesMenu}
                style={{ color: "#ccc", cursor: "pointer" }}
              >
                Ministries
              </a>
            </li>

            <li><Link href="/events" style={{ color: "#ccc" }}>Events</Link></li>
            <li><Link href="/gallery" style={{ color: "#ccc" }}>Gallery</Link></li>
            <li><Link href="/projects" style={{ color: "#ccc" }}>Projects</Link></li>
            <li><Link href="/history" style={{ color: "#ccc" }}>History</Link></li>
          </ul>
        </div>

        {/* Developer Info */}
        <div>
          <h3 style={{ marginBottom: "10px", color: "#f4b400" }}>Developer</h3>
          <p>Designed & Developed by <strong>CODE|G Labs</strong></p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <Globe size={16} style={{ marginRight: "8px" }} />
            <a
              href="https://my-portfolio-production-9e9f.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ccc" }}
            >
              View Developer Profile
            </a>
          </p>
        </div>
      </div>

      <hr style={{ width: "80%", border: "0.5px solid #444" }} />

      <div style={{ textAlign: "center", fontSize: "14px", color: "#aaa" }}>
        © {new Date().getFullYear()} P.C.E.A GEOFFREY GATHU MEMORIAL CHURCH. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
