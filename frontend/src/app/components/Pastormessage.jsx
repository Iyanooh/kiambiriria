"use client";
// components/PastorMessage.jsx
import Image from "next/image";

export default function PastorMessage() {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: "20px",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            overflow: "hidden",
            marginRight: "15px",
          }}
        >
          <Image
            src="/ian.png"
            alt="Reverend"
            width={70}
            height={70}
            style={{ objectFit: "cover" }}
          />
        </div>
        <h3 style={{ fontSize: "1.5rem", color: "#1d4ed8", fontWeight: "bold" }}>
          Message from Our Reverend
        </h3>
      </div>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        “Grace and peace be with you all. At P.C.E.A Geoffrey Gathu Memorial Church, we
        believe in the transformative power of faith and community. Every soul is
        welcome here — to worship, to grow, and to serve.”
      </p>
      <p style={{ color: "#2563eb", fontStyle: "italic", marginTop: "10px" }}>
        — Rev. Simon Githiora Njuguna, 
      </p>
    </div>
  );
}
