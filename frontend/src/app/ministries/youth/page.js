"use client";
import Image from "next/image";

export default function YouthMinistry() {
  return (
    <section style={{ padding: "6rem 2rem", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "1rem" }}>
          Youth Ministry
        </h1>
        <p style={{ color: "#374151", fontSize: "1rem", lineHeight: "1.7" }}>
          The Youth Ministry aims to inspire young people to live boldly for
          Christ through worship, fellowship, mentorship, and service. We
          encourage spiritual growth and leadership among youth.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/youth.jpg"
            alt="Youth Ministry"
            width={600}
            height={400}
            style={{ borderRadius: "12px", objectFit: "cover", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
