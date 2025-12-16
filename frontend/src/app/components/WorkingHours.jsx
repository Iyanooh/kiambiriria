"use client";
// components/WorkingHours.jsx
export default function WorkingHours() {
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
        }}
      >
        Church Office Hours
      </h3>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.6" }}>
        <li>
          <strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM
        </li>
        <li>
          <strong>Saturday:</strong> 9:00 AM – 1:00 PM
        </li>
        <li>
          <strong>Sunday:</strong> Closed (except for services)
        </li>
      </ul>

      <p style={{ marginTop: "10px", color: "#374151" }}>
        For inquiries, visit our admin office or call during working hours.
      </p>
    </div>
  );
}

