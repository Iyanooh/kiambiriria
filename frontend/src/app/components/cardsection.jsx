"use client";
export default function CardSection({ children }) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        padding: "40px 20px",
        backgroundColor: "#ffffffff",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {children}

      <style jsx>{`
        @media (max-width: 1024px) {
          section { padding: 35px 15px; }
        }
        @media (max-width: 768px) {
          section { padding: 30px 15px; }
        }
        @media (max-width: 420px) {
          section { padding: 25px 10px; }
        }
        @media (max-width: 360px) {
          section { padding: 20px 8px; }
        }
      `}</style>
    </section>
  );
}
