import { useState, createContext } from "react";
import Lookie from "lookie";

const EventsContext = createContext(null);

const EventsProvider = ({ children }) => {
  const [events, _setEvents] = useState(Lookie.get("events") || []);
  const [editEventId, setEditEventId] = useState(null);

  const setEvents = (events) => {
    _setEvents(events);
    Lookie.set("events", events);
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        editEventId,
        setEditEventId,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export { EventsContext, EventsProvider };