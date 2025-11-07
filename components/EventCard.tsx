import { LocationPin, AccessTimeFilled } from '@mui/icons-material';

interface EventCardProps{
  title: string
  description: string,
  date: string
  venue: string,
  startTime: string,
  endTime: string
}

const EventCard = (props: EventCardProps) => {
  const { title, description, date, startTime, endTime, venue } = props;
  return (
    <div className="program-card">
      <h3 className="program-title">{title}</h3>
      <p className="program-description">{description}</p>
      <div className="program-date">
        <AccessTimeFilled />
        <span className="program-date-text">{date} | {startTime} - {endTime}</span>
      </div>
      <div className="program-location">
        <LocationPin />
        <span className="program-location-text">{venue}</span>
      </div>
    </div>
  );
}

export default EventCard;