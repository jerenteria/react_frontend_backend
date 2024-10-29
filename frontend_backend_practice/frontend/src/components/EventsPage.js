import { Link } from "react-router-dom";

export const EVENTS = [
  { id: "e1", title: "Event 1", details: 'December 31, 2028. Will be lots of fun! ' },
  { id: "e2", title: "Event 2", details: 'January 1, 2029. Please come!' },
  { id: "e3", title: "Event 3", details: 'April 8, 2039, Cant miss out!' },
  { id: "e4", title: "Event 4", details: 'October 29, 3040. Its a birthday celebration! 1,044 years old! '},
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>

      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
