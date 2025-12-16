"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UpcomingEvent() {
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [hover, setHover] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [isLive, setIsLive] = useState(false);

   const allEvents = [
    {
      title: "REV.Githiora Anniversary Wedding",
      date: "December 13, 2025",
      description: "Celebrating 25 yrs Anniversary.",
      image: "/ring.jpg",
    },
    {
      title: "leaders Commissioning",
      date: "November 23, 2025",
      description: "Commmisioning of church leaders.",
      image: "/event.jpg",
    },
    {
      title: "Presbytery Convention At Kiambururu Parish",
      date: "November 30, 2025",
      description: "Lets Worship The Lord.",
      image: "/event.jpg",
    },
    {
      title: "Children's Ministry Week",
      date: "December 7, 2025",
      description: "Lets Support Our Children.",
      image: "/event.jpg",
    },
    {
      title: "Family Sunday",
      date: "December 14, 2025",
      description: "Family Unites",
      image: "/family.jpg",
    },
    {
      title: "Christmas Carlos Sunday",
      date: "December 21, 2025",
      description: "Happy Holidays",
      image: "/christmas.jpg",
    },
  ];

  useEffect(() => {
    const today = new Date();

    // Get nearest future event
    const futureEvents = allEvents
      .filter((e) => new Date(e.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (futureEvents.length > 0) {
      const nextEvent = futureEvents[0];
      setEvent(nextEvent);

      const eventDate = new Date(nextEvent.date);
      const diffTime = eventDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);

      // Live today
      setIsLive(
        today.getFullYear() === eventDate.getFullYear() &&
          today.getMonth() === eventDate.getMonth() &&
          today.getDate() === eventDate.getDate()
      );
    }
  }, []);

  if (!event) return null;

  return (
    <section
      style={{
        padding: "4rem 2rem",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        animation: "fadeIn 1.2s ease-in-out",
      }}
    >
      {/* Floating Rounded Title */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          background: "rgba(255,255,255,0.9)",
          padding: "6px 18px",
          borderRadius: "40px",
          fontSize: "16px",
          fontWeight: "700",
          border: "1px solid #ddd",
          zIndex: 10,
        }}
      >
        Upcoming Event
      </div>

      {/* Card */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          transition: "0.3s ease",
          position: "relative",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* LIVE NOW badge */}
        {isLive && (
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "red",
              color: "white",
              padding: "5px 12px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "bold",
              zIndex: 20,
            }}
          >
            LIVE NOW
          </div>
        )}

        {/* Image */}
        <div
          style={{
            position: "relative",
            width: "40%",
            minHeight: "220px",
            overflow: "hidden",
          }}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            style={{
              objectFit: "cover",
              transition: "0.4s",
              filter: hover ? "brightness(1.15)" : "brightness(1)",
            }}
          />

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hover ? "rgba(0,0,0,0.15)" : "transparent",
              transition: "0.4s",
            }}
          ></div>
        </div>

        {/* Content */}
        <div
          style={{
            width: "60%",
            padding: "1.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#1e3a8a",
          }}
        >
          <h2
            style={{
              marginBottom: "8px",
              fontSize: "22px",
              fontWeight: "800",
              lineHeight: "1.2",
              wordWrap: "break-word",
            }}
          >
            {event.title}
          </h2>

          <p style={{ color: "#444", marginBottom: "6px", fontSize: "16px" }}>
            📅 {event.date}
          </p>

          <p style={{ color: "#555", lineHeight: "1.4", marginBottom: "10px" }}>
            {event.description}
          </p>

          {/* Countdown */}
          {!isLive && (
            <p
              style={{
                marginTop: "5px",
                fontWeight: "bold",
                color: "#0077cc",
                fontSize: "17px",
              }}
            >
              ⏳ {daysLeft} day(s) left
            </p>
          )}

          {/* Button */}
          <button
            style={{
              marginTop: "15px",
              padding: "10px 18px",
              backgroundColor: "#fbbf24",
              color: "#1e3a8a",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e0a800")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fbbf24")
            }
            onClick={(e) => {
              e.stopPropagation();
              router.push("/events");
            }}
          >
            See More Events →
          </button>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            div[style*="max-width: 900px"] {
              flex-direction: column !important;
            }
            div[style*="width: 40%"] {
              width: 100% !important;
              height: 220px !important;
            }
            div[style*="width: 60%"] {
              width: 100% !important;
            }
          }
        `}
      </style>
    </section>
  );
}
