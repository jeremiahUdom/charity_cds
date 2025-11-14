import contactContent from '@/static/data/contactContent';
import { Email, LocationPin, Phone } from '@mui/icons-material';

const ContactOptions = () => {
  return (
    <ul className="contact-options">
      <li className="contact-option">
        <Email />
        <p>{contactContent.email}</p>
      </li>
      <li className="contact-option">
        <Phone />
        <p>{contactContent.phone}</p>
      </li>
      <li className="contact-option">
        <LocationPin />
        <p>{contactContent.address}</p>
      </li>
    </ul>
  );
}

export default ContactOptions;