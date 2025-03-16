import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./components/Hero.jsx'));
const Navbar = dynamic(() => import('./components/Navbar.jsx'));
const Services = dynamic(() => import('./components/Services.jsx'));
const Header = dynamic(() => import('./components/Header.jsx'));
const Footer = dynamic(() => import('./components/Footer.jsx'));
const ServicesDetails = dynamic(() => import('./components/ServiceDetails.jsx'));
const Customer = dynamic(() => import('./components/Customer.jsx'));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Header />
        <Customer />
        <ServicesDetails />
      </main>
      <Footer />
    </div>
  );
}
