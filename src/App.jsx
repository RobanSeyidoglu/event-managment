import { useState } from "react";

import { EventsProvider } from "./context/eventsContext.jsx";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import EventBoard from "./components/EventBoard/EventBoard.jsx";

import styles from "./App.module.css";

const App = () => {
    const [selectedList, setSelectedList] = useState("inbox");
    const [searchedEvent, setSearchedEvent] = useState("");
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);

    const eventLists = [
        { value: "noDate", label: "" },
        { value: "inbox", label: "Inbox", icon: "inbox" },
        { value: "important", label: "Important", icon: "important" },
        { value: "overdue", label: "Overdue", icon: "history" },
        { value: "today", label: "Today", icon: "today" },
        { value: "tomorrow", label: "Tomorrow", icon: "pushpin" },
        {
            value: "nextSevenDays",
            label: "Next 7 Days",
            icon: "star",
        },
        { value: "upcoming", label: "Upcoming", icon: "hourglass" },
    ];

    return (
        <EventsProvider>
            <div className={styles.App}>
                <Header
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                    searchedEvent={searchedEvent}
                    setSearchedEvent={setSearchedEvent}
                    toggleSidebar={() => setIsSidebarHidden(!isSidebarHidden)}
                />
                <div className={styles.EventContent}>
                    <Sidebar
                        isSidebarHidden={isSidebarHidden}
                        eventLists={eventLists}
                        selectedList={selectedList}
                        setSelectedList={setSelectedList}
                    />
                    <EventBoard
                        eventLists={eventLists}
                        selectedList={selectedList}
                        searchedEvent={searchedEvent}
                    />
                </div>
            </div>
        </EventsProvider>
    );
};

export default App;