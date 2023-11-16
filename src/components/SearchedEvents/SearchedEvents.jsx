import { useContext } from "react";

import Event from "../Event/Event";
import { EventsContext } from "../../context/eventsContext.jsx";

import styles from "./SearchedEvents.module.css";

const SearchedEvents = ({ searchedEvent }) => {
  const { events } = useContext(EventsContext);

  const searchResults = events.filter((event) =>
    event.name.toLowerCase().includes(searchedEvent.toLowerCase())
  );

  return (
    <div className={styles.Events}>
      {searchResults.map((event) => (
        <Event key={event.id} event={event} />
      ))}
      {!searchResults.length && (
        <div className={styles.NoTaskMessage}>
          No matches for "{searchedEvent}"
        </div>
      )}
    </div>
  );
};

export default SearchedEvents;