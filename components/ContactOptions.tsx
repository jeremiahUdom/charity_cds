import contactContent from '@/static/data/contactContent';
import { Email, LocationPin, Phone } from '@mui/icons-material';
import Link from 'next/link';

const ContactOptions = () => {
  return (
    <ul className="contact-options">
      <li className="contact-option">
        <Email />
        <Link href={"/"}>{contactContent.email}</Link>
      </li>
      <li className="contact-option">
        <Phone />
        <Link href={"/"}>{contactContent.phone}</Link>
      </li>
      <li className="contact-option">
        <LocationPin />
        <Link href={"/"}>{contactContent.address}</Link>
      </li>
    </ul>
  );
}

export default ContactOptions;