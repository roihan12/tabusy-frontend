import React from "react";
import Headers from "../components/Layout/Header";
import EventCard from "../components/Route/Events/EventCard";
import styles from "../styles/styles";

const EventsPage = () => {
  return (
    <>
      <Headers activeHeading={4} />
      <div className={`${styles.section}`}>
        <EventCard active={true} />
        <EventCard active={true} />
      </div>
    </>
  );
};

export default EventsPage;
