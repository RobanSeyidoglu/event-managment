import {useContext} from "react";

import Event from "../Event/Event";
import {EventsContext} from "../../context/eventsContext.jsx";
import getEventGroup from "../../utils/getEventGroup.js";

import styles from "./Events.module.css";

const Events = ({eventsHeader, selectedList}) => {
    const {events} = useContext(EventsContext);

    const eventList = getEventGroup(events)[selectedList];

    return (
        eventList.length > 0 && (
            <div className={styles.Events}>
                <h2 className={styles.EventsHeader}>{eventsHeader}</h2>
                {eventList.map((event) => (
                    <Event key={event.id} event={event}/>
                ))}
            </div>
        )
    );
};
export default Events;