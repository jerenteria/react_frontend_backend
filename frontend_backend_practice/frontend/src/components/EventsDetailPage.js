import { useParams } from "react-router-dom";

function EventsDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>EventsDetailPage</h1>
      <p>{params.eventId}</p>
    </>
  );
}

export default EventsDetailPage;
