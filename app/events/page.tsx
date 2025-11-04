import ProgramCard from '@/components/ProgramCard';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import React from 'react';

const page = () => {
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
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
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