import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy_data";

const FilteredEventsPage = (props) => {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return <p className="center"> Loading... </p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p> Invalid Filter. Please adjust your value!</p>;
  }

  const filteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvent || filteredEvent === 0) {
    return <p> No Event Found for the chosen filter!</p>;
  }
  return (
    <div>
      <h1> Filtered Events </h1>
    </div>
  );
};

export default FilteredEventsPage;
