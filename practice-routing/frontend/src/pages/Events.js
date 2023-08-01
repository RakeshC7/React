import { useParams } from "react-router-dom";
import EventItem from '../components/EventItem'

const EventsDetailsPage = () => {
    const params = useParams();
    return <>
        <EventItem event={ } />
        <h1> Events Details Page </h1>
        <p>{params.eventId}</p>
    </>
}

export default EventsDetailsPage;

export async function loader() {
    fetch('http://localhost:8080/events')
}