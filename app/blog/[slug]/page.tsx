import BlogArticle from '@/components/BlogArticle';
import { CalendarMonth } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const page = () => {
  
  return (
    <div className="article-page">
      <div className="container">
        <h1 className="article-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, unde.</h1>
      </div>

      <div className="container article-date article-meta-data">
        <span className="icon">
          <CalendarMonth />
        </span>
        <span className="text">
          <p>24th Sept, 2025</p>
        </span>
      </div>

      <div className="container">
        <div className="article-full-img-wrapper">
          <Image 
            src={"/images/hero1.jpg"}
            alt="Article image"
            fill
            className="article-image"
          />
        </div>
      </div>

      <section className="article-body-full">
        <div className="container">
          <p className="regular-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolor beatae quia hic odit, deleniti sapiente rerum nemo eos voluptatibus libero iure veritatis omnis facere placeat amet excepturi iusto distinctio.</p>
          <p className="regular-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolor beatae quia hic odit, deleniti sapiente rerum nemo eos voluptatibus libero iure veritatis omnis facere placeat amet excepturi iusto distinctio.</p>
          <p className="regular-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolor beatae quia hic odit, deleniti sapiente rerum nemo eos voluptatibus libero iure veritatis omnis facere placeat amet excepturi iusto distinctio.</p>
          <p className="regular-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolor beatae quia hic odit, deleniti sapiente rerum nemo eos voluptatibus libero iure veritatis omnis facere placeat amet excepturi iusto distinctio.</p>
          <p className="regular-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolor beatae quia hic odit, deleniti sapiente rerum nemo eos voluptatibus libero iure veritatis omnis facere placeat amet excepturi iusto distinctio.</p>
        </div>
      </section>
    </div>
  );
}

export default page;