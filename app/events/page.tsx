import EventCard from '@/components/EventCard';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { EVENTS_QUERY } from '@/sanity/queries/events';
import { fetchContent } from '@/sanity/lib/fetchers';
import { SanityDocument } from 'next-sanity';

const page = async () => {
  const events = await fetchContent(EVENTS_QUERY);

  return (
    <div className='events-page'>
      <section className="page-banner">
        <div className="overlay">
          <div className="container">
            <h1 className="main-header">
              <span className="accent-bar"></span>
              Our Upcoming Events
            </h1>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="container">
          {
            events.length !== 0 ? events.map((event: SanityDocument) => (
              <EventCard
                key={event._id}
                title={event.title}
                description={event.description}
                date={new Date(event.starts).toLocaleDateString("en-us", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                venue={event.venue}
                startTime={new Date(event.starts).toLocaleTimeString()}
                endTime={new Date(event.ends).toLocaleTimeString()}
              />
            )) : <p className="empty-state">No upcoming event</p>
          }
        </div>
      </section>

      <div className="pagination">
        <span>
          <button className="pagination-button">
            <ChevronLeft />
          </button>
        </span>

        <span>
          <button className="pagination-button">1</button>
        </span>

        <span>
          <button className="pagination-button">2</button>
        </span>

        <span>
          ......
        </span>

        <span>
          <button className="pagination-button">10</button>
        </span>

        <span>
          <button className="pagination-button">
            <ChevronRight />
          </button>
        </span>
      </div>
    </div>
  );
}

export default page;