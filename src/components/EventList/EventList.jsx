import Events from "../Events/Events";
import EmptyEventList from "../EmptyEventList/EmptyEventList.jsx";
import SearchedEvents from "../SearchedEvents/SearchedEvents.jsx";

const EventList = ({ eventLists, selectedList, searchedEvent }) => {
  const eventListsToShow = Object.values(eventLists).filter(
    (list) =>
      list.value !== "inbox" &&
      list.value !== "important" &&
      list.value !== "search"
  );

  const activeList = Object.values(eventLists).find(
    ({ value }) => value === selectedList
  );

  if (selectedList === "inbox") {
    return (
      <>
        <EmptyEventList />
        {eventListsToShow.map((listItem) => (
          <Events
            key={listItem.value}
            selectedList={listItem.value}
            eventLists={eventLists}
            eventsHeader={listItem.label}
          />
        ))}
      </>
    );
  } else if (selectedList === "search") {
    return <SearchedEvents searchedEvent={searchedEvent} />;
  } else {
    return <Events selectedList={selectedList} eventsHeader={activeList.label} />;
  }
};
export default EventList;