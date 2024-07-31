import Navbar from './Navbar.jsx'
import Image from 'next/image'
import Hero from './Hero.jsx'
import servicesPic from "./assets/jamie-street-h6mj_9bCvBk-unsplash.jpg"
import Services from './Services.tsx'
import Contact from './Contact.jsx'
export default function Home() {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <Services/>
      <Contact/>
      {/* <Image
      src={servicesPic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      placeholder="blur" // Optional blur-up while loading
    /> */}
    </div>
    
    
  )
}