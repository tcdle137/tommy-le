import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Footer from '../components/Footer';
import background from '../public/HomeBG.png';

export const metadata = {
  title: 'Tommy Le - Portfolio',
  description: 'Computer Science Undergraduate at Lawrence Technological University',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        {children}
        <Footer />
      </body>
    </html>
  );
}
