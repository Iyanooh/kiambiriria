"use client";
import Image from "next/image";

export default function ChildrenMinistry() {
  return (
    <section style={{ padding: "6rem 2rem", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "1rem" }}>
          Children’s Ministry
        </h1>
        <p style={{ color: "#374151", fontSize: "1rem", lineHeight: "1.7" }}>
          Our Children’s Ministry focuses on nurturing young hearts in Christ
          through engaging Bible lessons, music, and creative activities that
          teach them God’s love from an early age.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/children.jpg"
            alt="Children Ministry"
            width={600}
            height={400}
            style={{ borderRadius: "12px", objectFit: "cover", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
