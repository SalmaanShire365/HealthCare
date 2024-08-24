import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Services from  './Services.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Header />
      </main>
      <Footer />
    </div>
  );
}