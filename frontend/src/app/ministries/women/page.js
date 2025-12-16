"use client";
import Image from "next/image";

export default function WomenMinistry() {
  return (
    <section style={{ padding: "6rem 2rem", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "1rem" }}>
          Women’s Fellowship
        </h1>
        <p style={{ color: "#374151", fontSize: "1rem", lineHeight: "1.7" }}>
          The Women’s Fellowship empowers women to grow spiritually, serve the
          community, and support one another in prayer and ministry. We believe
          in building strong families and nurturing the next generation.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/women.jpg"
            alt="Women Fellowship"
            width={600}
            height={400}
            style={{ borderRadius: "12px", objectFit: "cover", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
