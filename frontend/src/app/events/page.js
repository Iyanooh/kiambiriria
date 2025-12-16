"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // Hardcoded events list
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

    // Separate events with valid dates vs no date
    const eventsWithDate = allEvents
      .filter((event) => event.date) // only events with a date
      .filter((event) => new Date(event.date) >= today) // future events only
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    const eventsWithoutDate = allEvents.filter((event) => !event.date); // no date events

    // Combine: future events first, then events without a date
    setUpcomingEvents([...eventsWithDate, ...eventsWithoutDate]);
  }, []);

  const styles = {
    section: {
      padding: "6rem 2rem 3rem",
      backgroundColor: "#f9fafb",
      textAlign: "center",
      minHeight: "100vh",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "2rem",
      color: "#1e3a8a",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      justifyContent: "center",
      alignItems: "stretch",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      transform: "scale(1.03)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
    },
    content: {
      padding: "1rem",
      textAlign: "left",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#1e3a8a",
      marginBottom: "0.5rem",
    },
    date: {
      color: "#555",
      fontSize: "0.9rem",
      marginBottom: "0.5rem",
    },
    description: {
      color: "#444",
      fontSize: "0.95rem",
      lineHeight: "1.4",
    },
    noEvents: {
      color: "#555",
      fontSize: "1rem",
      marginTop: "3rem",
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Upcoming Events</h1>
      {upcomingEvents.length > 0 ? (
        <div style={styles.grid}>
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={180}
                style={styles.image}
              />
              <div style={styles.content}>
                <h2 style={styles.title}>{event.title}</h2>
                <p style={styles.date}>{event.date || "Date TBD"}</p>
                <p style={styles.description}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noEvents}>
          No upcoming events at the moment. Please check back soon!
        </p>
      )}
    </section>
  );
}
