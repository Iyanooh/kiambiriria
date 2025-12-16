"use client";
import Image from "next/image";

export default function LeadersSection() {
  const leaders = [
    { name: "Elder George Kimani Njuguna", title: "Emau's District", message: "Guiding the church with faith, compassion, and a heart for the community.", image: "/ian.png" },
    { name: "Elder Kennedy Thagichu Thiongo", title: "Galilee District", message: "Serving faithfully and nurturing fellowship among believers.", image: "/ian.png" },
    { name: "Elder Naomi Njambi Wainaina", title: "Nazareth District", message: "Committed to spiritual growth and supporting ministry activities.", image: "/ian.png" },
    { name: "Elder Boniface Theuri Kinyua", title: "Jerusalem District", message: "Dedicated to serving with humility and ensuring church welfare.", image: "/ian.png" },
    { name: "Elder Samuel Kiroko Kimani", title: "Bethlehem District", message: "Guiding the church with faith, compassion, and a heart for the community.", image: "/ian.png" },
    { name: "Elder Mary Ngendo Kimani", title: "Ebenezer District", message: "Guiding the church with faith, compassion, and a heart for the community.", image: "/ian.png" },
    { name: "Elder George Wakayu Murira", title: "Judah District", message: "Guiding the church with faith, compassion, and a heart for the community.", image: "/ian.png" },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffffff",
        padding: "60px 20px",
        textAlign: "center",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1D4ED8", marginBottom: "40px" }}>
          Our Church Elders
        </h2>

        {/* GRID (3 per row on desktop) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // *** FIXED ***
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {leaders.map((leader, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                padding: "20px",
                textAlign: "center",
                width: "100%",
                maxWidth: "250px",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                })
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "none",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                })
              }
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={100}
                height={100}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                  border: "3px solid #1D4ED8",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", color: "#1E3A8A", marginBottom: "5px" }}>{leader.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "#2563EB", marginBottom: "10px" }}>{leader.title}</p>
              <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: "1.4" }}>{leader.message}</p>
            </div>
          ))}
        </div>

        {/* RESPONSIVE STYLES */}
        <style>{`
          @media (max-width: 900px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
