import Link from 'next/link';
import { useState } from 'react';

import { navLinks } from '../styles/Header.module.css';
import MobileMenu from './MobileMenu';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '1px 0px 13px 0px #666',
      }}
    >
      <Link href='/'>
        <img
          style={{
            height: '100px',
            cursor: 'pointer',
          }}
          src='/nikommerce-logo-white.png'
          alt='logo'
        />
      </Link>
      <div style={{ position: 'relative' }}>
        {isOpen ? (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <MobileMenu {...{ setIsOpen }} />
          </div>
        ) : (
          <img
            style={{ height: '20px', cursor: 'pointer' }}
            src='/menu.png'
            alt='menu button'
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default MobileHeader;
