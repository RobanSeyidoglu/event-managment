import {useContext} from "react";
import dayjs from "dayjs";
import cx from "classnames";

import Icon from "../Icon/Icon";
import EditEvent from "../EditEvent/EditEvent.jsx";
import {EventsContext} from "../../context/eventsContext.jsx";

import styles from "./Event.module.css";

const Event = ({event}) => {
    const {events, setEvents, editEventId, setEditEventId} =
        useContext(EventsContext);

    const currentEventId = event.id;

    const dueDate = dayjs(event.date).format("D MMM");
    const isOverdue = dayjs().isAfter(dayjs(event.date).add(1, "day"));

    const toggleIsDone = () => {
        const newEvents = events.map((event) =>
            event.id === currentEventId ? {...event, isDone: !event.isDone} : event
        );

        setEvents(newEvents);
    };

    const activateEdit = () => {
        setEditEventId(event.id);
    };

    const toggleEventImportance = () => {
        const newEvents = events.map((event) =>
            event.id === currentEventId
                ? {...event, isImportant: !event.isImportant}
                : event
        );

        setEvents(newEvents);
    };

    const deleteEvent = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this event?"
        );

        if (confirmDelete) {
            const newEvents = events.filter((event) => event.id !== currentEventId);

            setEvents(newEvents);
        }
    };

    return (
        <>
            {editEventId === event.id ? (
                <EditEvent event={event}/>
            ) : (
                <div className={styles.EventWrapper}>
                    <div className={styles.EventItem}>
                        <Icon
                            icon={event.isDone ? "check" : "empty-check"}
                            className={cx(styles.Checkbox, {
                                [styles.CheckboxEmphasis]: event.isImportant && !event.isDone,
                            })}
                            onClick={toggleIsDone}
                        />
                        <div className={styles.TaskName}>
              <span
                  className={cx({
                      [styles.EventDone]: event.isDone,
                  })}
              >
                {event.name}
              </span>
                        </div>
                    </div>
                    <div className={styles.EventActions}>
                        <div
                            className={cx(styles.EventDue, {
                                [styles.OverdueTask]: isOverdue,
                            })}
                        >
                            {event.date ? dueDate : ""}
                        </div>
                        <div
                            className={cx(styles.Buttons, {
                                [styles.ImportantActive]: event.isImportant,
                            })}
                        >
                            <Icon
                                icon="important"
                                size={24}
                                className={cx(styles.ImportantTaskEmpty, {
                                    [styles.ImportantTask]: event.isImportant,
                                })}
                                onClick={toggleEventImportance}
                            />
                            <Icon
                                icon="edit"
                                size={24}
                                className={styles.EditButton}
                                onClick={activateEdit}
                            />
                            <Icon
                                icon="delete"
                                size={24}
                                className={styles.DeleteButton}
                                onClick={deleteEvent}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Event;