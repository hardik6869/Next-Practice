import EventList from "../../components/events/event-list";
import { getAllEvent } from "../../dummy_data";

const AllEventsPage = () => {
  const events = getAllEvent();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
