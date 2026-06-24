import Link from 'next/link';

function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1>
            <Link href="/" className="text-white text-decoration-none">
              Tommy Le
            </Link>
          </h1>
          <nav>
            <ul className="list-inline mb-0" style={{listStyleType: 'none'}}>
              <li className="list-inline-item">
                <Link href="/about" className="text-white text-decoration-none">About </Link>
              </li>
              <li className="list-inline-item">/</li>
              <li className="list-inline-item">
                <Link href="/projects" className="text-white text-decoration-none">Projects </Link>
              </li>
              <li className="list-inline-item">/</li>
              <li className="list-inline-item">
                <Link href="/work-experience" className="text-white text-decoration-none">Work Experience </Link>
              </li>
              <li className="list-inline-item">/</li>
              <li className="list-inline-item">
                <Link href="/contact" className="text-white text-decoration-none">Contact Me</Link>
              </li>
            </ul>
          </nav>
        </div>
        <h2 className="pt-3" style={{ fontSize: 'calc(4px + 2vmin)', textAlign: 'left' }}>
          Computer Science Undergraduate at Lawrence Technological University
        </h2>
      </div>
    </header>
  );
}

export default Header;
