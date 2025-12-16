"use client";
import Image from "next/image";

export default function LCCMinistry() {
  return (
    <section style={{ padding: "6rem 2rem", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "1rem" }}>
          Lay Church Committee (LCC)
        </h1>
        <p style={{ color: "#374151", fontSize: "1rem", lineHeight: "1.7" }}>
          The Lay Church Committee provides leadership and guidance for the
          smooth running of the church. The team ensures that all ministries
          operate harmoniously and that members’ spiritual and social needs are met.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/lcc.jpg"
            alt="LCC"
            width={600}
            height={400}
            style={{ borderRadius: "12px", objectFit: "cover", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
