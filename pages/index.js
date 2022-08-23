import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div>
        <EventList items={props.events} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const feturedEvents = await getFeaturedEvents();
  return {
    props: {
      events: feturedEvents,
    },
  };
};
