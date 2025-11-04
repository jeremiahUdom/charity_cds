import { LocationPin, AccessTimeFilled } from '@mui/icons-material';

interface ProgramCardProps{
  programId: string
}

const ProgramCard = (props: ProgramCardProps) => {
  const { programId } = props;
  return (
    <div className="program-card">
      <h3 className="program-title">Community Clean-Up</h3>
      <p className="program-description">Join volunteers to clean up our local parks.</p>
      <div className="program-date">
        <AccessTimeFilled />
        <span className="program-date-text">Saturday, July 20, 2024 | 9:00 AM - 12:00 PM</span>
      </div>
      <div className="program-location">
        <LocationPin />
        <span className="program-location-text">Central Park, New York, NY</span>
      </div>
    </div>
  );
}

export default ProgramCard;