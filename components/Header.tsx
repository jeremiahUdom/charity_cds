"use client";
import { useState } from 'react';
import { Close } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import pages from '@/static/data/pages';

const Header = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const openMenu = () => {
    setMenuOpen(true);
  }

  return (
    <header>
      <div className="container">
        <span className="logo">
          <Link className="logo-link" href="/">
            <span className="cds-name">Charity</span> 
            CDS Abuja
          </Link>
        </span>

        <nav>
          <div className="menu-icon">
            <button className="hambuger-menu" onClick={openMenu}>
              <MenuIcon />
            </button>
          </div>

          <div className={`mobile-nav-links-wrapper ${menuOpen ? "active": ""}`}>
            <button className="close-mobile-nav-btn" onClick={closeMenu}>
              <Close />
            </button>
            <ul className="mobile-nav-links">
              {
                pages.map((pages) => (
                  <li key={pages.title} className="nav-link"><Link href={pages.url} onClick={closeMenu}>{pages.title}</Link></li>
                ))
              }
            </ul>      
          </div>
          <ul className="nav-links">
            {
              pages.map((page) => (
                <li key={page.title} className="nav-link"><Link href={page.url}>{page.title}</Link></li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header