import EventInput from "../EventInput/EventInput.jsx";
import EventList from "../EventList/EventList.jsx";
import Footer from "../Footer/Footer";

import styles from "./EventBoard.module.css";

const EventBoard = ({ eventLists, selectedList, searchedEvent }) => (
  <main className={styles.EventBoard}>
    <div>
      <EventInput />
      <EventList
        eventLists={eventLists}
        selectedList={selectedList}
        searchedEvent={searchedEvent}
      />
    </div>
    <Footer />
  </main>
);

export default EventBoard;