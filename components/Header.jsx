import Link from 'next/link';

import { navLinks } from '../styles/Header.module.css';

const Header = () => {
  return (
    <nav
      style={{
        display: 'flex',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          width: '30vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href='/'>
          <img
            style={{
              height: '120px',
              cursor: 'pointer',
            }}
            src='/nikommerce-logo-white.png'
            alt='logo'
          />
        </Link>
        {/* <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
        <Link href='/'>
        <a className={navLinks}>Home</a>
        </Link>
        <Link href='/about'>
        <a className={navLinks}>About</a>
        </Link>
        <Link href='/contact'>
        <a className={navLinks}>Contact</a>
        </Link>
      </div> */}
      </div>
    </nav>
  );
};

export default Header;
