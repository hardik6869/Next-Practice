import EventItem from "./event-item";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <EventItem />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
