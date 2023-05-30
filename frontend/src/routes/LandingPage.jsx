import { CustomNavbar, CustomButton } from '../components/indexComponents'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';

import '../styles/landingPage.css'

export const LandingPage = () => {
  return (
    <section id='Landing'>
      <CustomNavbar/>
      <div>
        <h2>landing page</h2>
        <Link to='/build'><CustomButton text={"Empieza ahora"}/></Link>
      </div>
      <Footer/>
    </section>
  )
}
