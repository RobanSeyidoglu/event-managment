import { useContext } from "react";

import Button from "../Button/Button";
import { EventsContext } from "../../context/eventsContext.jsx";

import styles from "./EmptyEventList.module.css";

const EmptyEventList = () => {
  const { events, setEvents } = useContext(EventsContext);

  const clearAll = () => {
    const isConfirm = window.confirm(
      "Are you sure you want to clear all events?"
    );

    if (isConfirm) {
      setEvents([]);
    }
  };

  const incompleteTasks = events.filter((event) => !event.isDone);

  const noTasks = events.length === 0;
  const noIncompleteTasks = incompleteTasks.length === 0;

  return (
    <div className={styles.EmptyEventWrapper}>
      {noTasks && <h2 className={styles.NoTasks}>No events listed.</h2>}
      {!noTasks && noIncompleteTasks && (
        <div>
          <p className={styles.NoIncompleteTasks}>
            Looks like everything's organized in the right place!
          </p>
          <Button onClick={clearAll}>Clear All</Button>
        </div>
      )}
    </div>
  );
};

export default EmptyEventList;