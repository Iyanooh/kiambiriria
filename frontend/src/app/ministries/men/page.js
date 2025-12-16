"use client";
import Image from "next/image";

export default function MenMinistry() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            color: "#1e3a8a",
            marginBottom: "1rem",
          }}
        >
          Men’s Fellowship
        </h1>

        <p style={{ color: "#374151", fontSize: "1rem", lineHeight: "1.7" }}>
          The Men’s Fellowship of P.C.E.A Geoffrey Gathu Memorial Church is
          dedicated to equipping men to become spiritual leaders in their
          families, workplace, and community. Through prayer, mentorship, and
          service, we aim to grow in faith and unity.
        </p>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/men.jpg"
            alt="Men Fellowship"
            width={600}
            height={400}
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
