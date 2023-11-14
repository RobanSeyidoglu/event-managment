import { useContext, useRef, useState } from "react";
import { nanoid } from "nanoid";

import Datepicker from "../DatePicker/DatePicker";
import Icon from "../Icon/Icon";
import { EventsContext } from "../../context/eventsContext.jsx";

import styles from "./EventInput.module.css";

const EventInput = () => {
  const [event, setEvent] = useState({ name: "" });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { events, setEvents } = useContext(EventsContext);
  const inputRef = useRef();

  const addEvent = () => {
    if (event.name.trim().length) {
      setEvents([
        ...events,
        {
          id: nanoid(),
          name: event.name,
          date: event.date,
          isDone: false,
          isImportant: false,
        },
      ]);

      setEvent({ name: "" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addEvent();
    }
  };

  const selectDate = (date, e) => {
    e.preventDefault();
    setEvent({ ...event, date: date.toString() });

    setIsCalendarOpen(false);
    inputRef.current.focus();
  };

  return (
    <>
      <div className={styles.InputArea}>
        <input
          type="text"
          className={styles.TaskInput}
          placeholder="Enter your event"
          value={event.name}
          onChange={(e) => setEvent({ ...event, name: e.target.value })}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          autoFocus
        />
        <Datepicker
          onChange={selectDate}
          event={event}
          setEvent={setEvent}
          inputRef={inputRef}
          isOpen={isCalendarOpen}
          setIsOpen={setIsCalendarOpen}
        />
        <Icon
          icon="add"
          size={35}
          className={styles.AddButton}
          onClick={addEvent}
        />
      </div>
    </>
  );
};
export default EventInput;