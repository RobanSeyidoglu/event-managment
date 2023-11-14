import { useContext, useRef, useState } from "react";

import Datepicker from "../DatePicker/DatePicker";
import Button from "../Button/Button";
import { EventsContext } from "../../context/eventsContext.jsx";

import styles from "./EditEvent.module.css";

const EditEvent = ({ event }) => {
  const [editedEvent, setEditedEvent] = useState(event);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { events, setEvents, editEventId, setEditEventId } =
    useContext(EventsContext);
  const inputRef = useRef(null);

  const handleEdit = (e) => {
    setEditedEvent({ ...event, name: e.target.value });
  };

  const saveEdit = () => {
    if (editedEvent.name.trim().length) {
      const newEvents = events.map((event) =>
        event.id === editEventId ? editedEvent : event
      );

      setEvents(newEvents);
      setEditEventId(null);
    }
  };

  const cancelEdit = () => {
    setEditEventId(null);
  };

  const changeDate = (date, e) => {
    e.preventDefault();
    setEditedEvent({ ...editedEvent, date: date.toString() });

    setIsCalendarOpen(false);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveEdit();
    }
  };

  return (
    <div className={styles.EditArea}>
      <div className={styles.EditEvent}>
        <input
          type="text"
          value={editedEvent.name}
          className={styles.Input}
          onChange={handleEdit}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          autoFocus
        />
        <div className={styles.Datepicker}>
          <Datepicker
            event={editedEvent}
            setEvent={setEditedEvent}
            onChange={changeDate}
            inputRef={inputRef}
            isOpen={isCalendarOpen}
            setIsOpen={setIsCalendarOpen}
          />
        </div>
      </div>
      <div className={styles.Buttons}>
        <Button onClick={saveEdit}>Save</Button>
        <Button onClick={cancelEdit}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditEvent;