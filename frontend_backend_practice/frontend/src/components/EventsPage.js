import { Link } from "react-router-dom";

export const EVENTS = [
  { id: "e1", title: "Event 1", detail: 'January 1, 2020' },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
  { id: "e4", title: "Event 4" },
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
