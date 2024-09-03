import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Services from  './components/Services.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ServicesDetails from './components/ServiceDetails.jsx'
import Customer from './components/Customer.jsx'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Header />
        <Customer/>
        <ServicesDetails />
      </main>
      <Footer />
    </div>
  );
}