import { useContext } from "react";
import cx from "classnames";

import Icon from "../Icon/Icon";
import { EventsContext } from "../../context/eventsContext.jsx";
import getEventGroup from "../../utils/getEventGroup.js";

import styles from "./EventsMenu.module.css";

const EventsMenu = ({ eventLists, selectedList, setSelectedList }) => {
  const { events } = useContext(EventsContext);

  const eventGroup = getEventGroup(events);

  const totalEventCount = (value) => eventGroup[value]?.length;

  const completedEventCount = (value) =>
    eventGroup[value]?.filter((event) => event.isDone).length;

  const listsToShown = Object.values(eventLists).filter(
    (list) =>
      (totalEventCount(list.value) && list.value !== "noDate") ||
      list.value === "inbox"
  );

  return (
    <nav className={styles.EventListsMenu}>
      {listsToShown.map(({ value, label, icon }) => (
        <div
          className={cx(styles.EventList, {
            [styles.Selected]: selectedList === value,
          })}
          key={value}
          onClick={() => setSelectedList(value)}
        >
          <Icon icon={icon} className={styles.Icon} />
          <span className={styles.EventLabel}>{label}</span>
          <span
            className={cx(styles.EventCompletion, {
              [styles.Overdue]: value === "overdue",
              [styles.Important]: value === "important",
            })}
          >
            ({completedEventCount(value)}/{totalEventCount(value)})
          </span>
        </div>
      ))}
    </nav>
  );
};

export default EventsMenu;