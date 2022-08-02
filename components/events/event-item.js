import Image from "next/image";
import Link from "next/link";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/event/${id}`;
  return (
    <div>
      <Image src={`/${image}`} alt={title} height={100} width={100} />
      <div>
        <div>
          <h2> {title}</h2>
          <div>
            <time> {humanReadableDate} </time>
          </div>
          <div>
            <address> {formattedAddress} </address>
          </div>
        </div>
        <Link href={exploreLink}> Explore Event </Link>
      </div>
    </div>
  );
};

export default EventItem;
