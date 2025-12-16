"use client";

import Image from "next/image";
import { useState } from "react";

export default function HistoryPage() {
  const retiredReverends = [
    { name: "Rev. Kamunya", years: "2015-2020", image: "/history/ian.png" },
    
  ];

  const elders = [
    { name: "Lilian Wairimu Muigai", role: "ELDER", image: "/history/ian.png" },
    { name: "Danson Gitau Nganga", role: "ELDER", image: "/history/ian.png" },
    { name: "Nancy Njeri Kamau", role: "ELDER", image: "/history/ian.png" },
  ];

  const styles = {
    section: { padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto", fontFamily: "'Segoe UI', sans-serif" },
    heading: { fontSize: "2.5rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "2rem", textAlign: "center" },
    subHeading: { fontSize: "2rem", fontWeight: "600", color: "#1e3a8a", margin: "2rem 0 1rem" },
    textBlock: { fontSize: "1rem", lineHeight: "1.8", color: "#444", marginBottom: "1.5rem" },
    timeline: { display: "flex", flexDirection: "column", gap: "2rem" },
    timelineItem: { display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" },
    timelineImage: { borderRadius: "12px", flex: "1 1 300px", minWidth: "250px", maxHeight: "200px", objectFit: "cover" },
    timelineText: { flex: "2 1 400px", minWidth: "250px" },
    cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" },
    card: { backgroundColor: "#f9fafb", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", overflow: "hidden", textAlign: "center", padding: "1rem" },
    cardImage: { width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px" },
    cardName: { fontWeight: "bold", fontSize: "1.1rem", marginTop: "0.5rem" },
    cardRole: { color: "#1e3a8a", marginTop: "0.25rem" },
    visionMission: { display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginTop: "2rem" },
    visionCard: { flex: "1 1 300px", backgroundColor: "#1e3a8a", color: "white", borderRadius: "12px", padding: "2rem", textAlign: "center" },
    visionTitle: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" },
    visionText: { fontSize: "1rem", lineHeight: "1.6" },
    footer: { backgroundColor: "#000", color: "#fbbf24", textAlign: "center", padding: "2rem 1rem", marginTop: "4rem" },
    scrollButton: { position: "fixed", bottom: "20px", right: "20px", padding: "1rem 1.2rem", borderRadius: "50%", backgroundColor: "#1e3a8a", color: "white", cursor: "pointer", fontSize: "1.2rem", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main>
      <section style={styles.section}>
        <h1 style={styles.heading}>Our History</h1>

        {/* Church History */}
        <h2 style={styles.subHeading}>Church History</h2>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <Image src="/history/church1.png" alt="Church founding" width={300} height={200} style={styles.timelineImage} />
            <div style={styles.timelineText}>
              <p style={styles.textBlock}>Founded in 1970, P.C.E.A Geoffrey Gathu Memorial Church has grown from a small community fellowship to a vibrant congregation serving the Kiambu, Githunguri area.</p>
            </div>
          </div>
          <div style={styles.timelineItem}>
            <Image src="/history/church1" alt="Church growth" width={300} height={200} style={styles.timelineImage} />
            <div style={styles.timelineText}>
              <p style={styles.textBlock}>Over the decades, the church has expanded its programs, including youth activities, women's guilds, and community outreach initiatives.</p>
            </div>
          </div>
        </div>

        {/* PCEA History */}
        <h2 style={styles.subHeading}>Presbyterian Church of East Africa (PCEA) History</h2>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <Image src="/theme1.png" alt="PCEA founding" width={300} height={200} style={styles.timelineImage} />
            <div style={styles.timelineText}>
              <p style={styles.textBlock}>PCEA was founded in 1891 and has played a critical role in the growth of Christianity in Kenya, emphasizing community service, education, and faith development.</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <h2 style={styles.subHeading}>Vision & Mission</h2>
        <div style={styles.visionMission}>
          <div style={styles.visionCard}>
            <h3 style={styles.visionTitle}>Vision</h3>
            <p style={styles.visionText}>Ably Minister the gospel of our lord Jesus Christ the giver of life to all Creation.</p>
          </div>
          <div style={styles.visionCard}>
            <h3 style={styles.visionTitle}>Mission</h3>
            <p style={styles.visionText}>A parish where people receive the Ministry of the New Covenant through a competent faithfull servants and effective systems.</p>
          </div>
        </div>

        {/* Retired Reverends */}
        <h2 style={styles.subHeading}>Former Honored Clergy</h2>
        <div style={styles.cardGrid}>
          {retiredReverends.map((rev, idx) => (
            <div key={idx} style={styles.card}>
              <Image src={rev.image} alt={rev.name} width={300} height={200} style={styles.cardImage} />
              <div style={styles.cardName}>{rev.name}</div>
              <div style={styles.cardRole}>{rev.years}</div>
            </div>
          ))}
        </div>

        {/* Elders */}
        <h2 style={styles.subHeading}>Church Elders</h2>
        <div style={styles.cardGrid}>
          {elders.map((elder, idx) => (
            <div key={idx} style={styles.card}>
              <Image src={elder.image} alt={elder.name} width={300} height={200} style={styles.cardImage} />
              <div style={styles.cardName}>{elder.name}</div>
              <div style={styles.cardRole}>{elder.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button style={styles.scrollButton} onClick={scrollToTop}>↑</button>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} P.C.E.A GEOFFREY GATHU MEMORIAL CHURCH. All rights reserved.
      </footer>
    </main>
  );
}
