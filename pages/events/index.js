import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvent } from "../../dummy_data";

const AllEventsPage = () => {
  const events = getAllEvent();
  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
