const getAllEvents = async () => {
  const response = await fetch(
    "https://event-app-56296-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();
  const events = [];

  for (const key in data) {
    return events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
};
