import Link from 'next/link';

const MobileMenu = ({ setIsOpen }) => {
  return (
    <div style={{ position: 'absolute' }}>
      <img
        onClick={() => setIsOpen()}
        style={{ height: '20px', cursor: 'pointer' }}
        src='/close.png'
      />
      <div >
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
