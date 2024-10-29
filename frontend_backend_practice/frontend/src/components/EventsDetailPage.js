import { useParams } from "react-router-dom";
import { EVENTS } from "./EventsPage.js";

function EventsDetailPage() {
// useParams() is a hook provided by React Router that extracts parameters from the current URL 
// grabs the info from the event being clicked on

    // if URL is path: '/events/1', useParams will grab the info from events with the id of 1 and display 
    // that specific data

// ex: {
//     path: '/events/:eventId',  // :eventId is a URL parameter
//     element: <EventDetailPage />
// }
  const params = useParams();



// create var event; take the EVENTS list in EventsPage.js .find looks through all the events in the list
    // takes in a parameter named 'event'(we can name this parameter whatever we want)
    // then compares the event id in the list to the params.eventId
    // if they are the same then return it 
  const event = EVENTS.find((event) => event.id === params.eventId);

  return (
    <>
      <h1>EventsDetailPage</h1>
      <p>{params.eventId}</p>
      <h2>Details:</h2>
      <p>{event.details}</p>
    </>
  );
}

export default EventsDetailPage;
