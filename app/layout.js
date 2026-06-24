import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '../components/Header';
import background from '../public/background.png';

export const metadata = {
  title: 'Tommy Le - Portfolio',
  description: 'Computer Science Undergraduate at Lawrence Technological University',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', minHeight: '100vh' }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
