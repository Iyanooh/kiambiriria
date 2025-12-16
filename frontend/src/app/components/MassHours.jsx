"use client";
// components/MassHours.jsx
export default function MassHours() {
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
      <h3
        style={{
          fontSize: "1.5rem",
          color: "#1d4ed8",
          fontWeight: "bold",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Mass Hours
      </h3>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.6" }}>
        <li>
          <strong>Sunday Service:</strong> 10:00 AM – 12:00 PM
        </li>
        <li>
          <strong>Youth Service:</strong> 10:00 AM – 12:00 PM
        </li>
        <li>
          <strong>Midweek Fellowship:</strong> 4:00 PM
        </li>
        
      </ul>
    </div>
  );
}
