import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Footer from '../components/Footer';
import background from '../public/HomeBG.png';

export const metadata = {
  title: 'Tommy Le - Portfolio',
  description: 'Computer Science Undergraduate at Lawrence Technological University',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
