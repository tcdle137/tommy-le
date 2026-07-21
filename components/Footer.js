import Link from 'next/link';

function Footer() {
  return (
    <footer className="Footer" style={{ marginTop: 'auto' }}>
      <div className="container">
        <nav className="d-flex justify-content-around align-items-center w-100" style={{ fontFamily: 'megrim' }}>
          <Link href="/" className="btn btn-outline-light btn-lg footer-button">Home</Link>
          <Link href="/about" className="btn btn-outline-light btn-lg footer-button">About</Link>
          <Link href="/projects" className="btn btn-outline-light btn-lg footer-button">Projects</Link>
          <Link href="/work-experience" className="btn btn-outline-light btn-lg footer-button">Work Experience</Link>
          <Link href="/contact" className="btn btn-outline-light btn-lg footer-button">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
