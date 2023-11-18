import cx from "classnames";

import EventsMenu from "../EventsMenu/EventsMenu.jsx";

import styles from "./Sidebar.module.css";

const Sidebar = ({
  isSidebarHidden,
  eventLists,
  selectedList,
  setSelectedList,
}) => (
  <aside
    className={cx(styles.Sidebar, {
      [styles.SidebarHidden]: isSidebarHidden,
    })}
  >
    <EventsMenu
      eventLists={eventLists}
      selectedList={selectedList}
      setSelectedList={setSelectedList}
    />
  </aside>
);

export default Sidebar;