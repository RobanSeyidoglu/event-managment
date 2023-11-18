import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isBetween);

const getEventGroup = (events) => {
  const eventsByDate = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const eventGroup = {
    inbox: [],
    overdue: [],
    today: [],
    tomorrow: [],
    nextSevenDays: [],
    upcoming: [],
    noDate: [],
    important: [],
  };

  eventsByDate.forEach((event) => {
    eventGroup.inbox.push(event);

    if (event.isImportant) {
      eventGroup.important.push(event);
    }

    const today = dayjs();
    const eventDate = dayjs(event.date);

    if (!event.date) {
      eventGroup.noDate.push(event);
    } else if (eventDate.isToday()) {
      eventGroup.today.push(event);
    } else if (eventDate.isTomorrow()) {
      eventGroup.tomorrow.push(event);
    } else if (eventDate.isBetween(today.add(1, "day"), today.add(7, "day"))) {
      eventGroup.nextSevenDays.push(event);
    } else if (eventDate.isBefore(today, "day")) {
      eventGroup.overdue.push(event);
    } else if (eventDate.isAfter(today.add(7, "day"))) {
      eventGroup.upcoming.push(event);
    }
  });

  return eventGroup;
};

export default getEventGroup;