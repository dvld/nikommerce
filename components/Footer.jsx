import {
  footer,
  footerContainer,
  disclaimer,
  copyright,
} from '../styles/Header.module.css';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <div className={disclaimer}>
          By entering your email address you agree to being added to our email
          list and to receive emails pertaining to the products/services you
          showed interest in. Privacy and security is important to us and we
          will not flood your inbox with spam or sell any information provided
          to us. Nikommerce may receive commission for any product/service
          purchased through links on our website or through email
          correspondence.
        </div>
        <div className={copyright}>Nikommerce &copy; {currentYear}</div>
        <div style={{ fontSize: '12px' }}>
          Icons made by{' '}
          <a href='https://www.freepik.com' title='Freepik'>
            Freepik
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
        <div style={{ fontSize: '12px' }}>
          Icons made by{' '}
          <a
            href='https://www.flaticon.com/authors/pixel-perfect'
            title='Pixel perfect'
          >
            Pixel perfect
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
