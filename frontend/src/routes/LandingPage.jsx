import { CustomNavbar, CustomButton } from '../components/indexComponents'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';

import '../styles/landingPage.css'

export const LandingPage = () => {

  const navbar = {
    links: [
      {url: '/', text: 'Proyecto'},
      {url: '/', text: 'Novus'},
    ],
    items: [
      {item: <Link to={'/build'}><CustomButton text={'ENSAMBLAR'} customClass={'btn-sm btn-contrast'}/></Link>}
    ]
  }
  return (
    <section id='Landing'>

      <CustomNavbar links={navbar.links} items={navbar.items}/>

      <section id='landing-01' className='container-cc'>
        <div className="landing-01-container">
          <div className='msg-block'>
            <h2>SMART FACTORY LAB</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore inventore quos cumque fugit expedita quas ut ducimus corrupti quisquam a accusamus minima, facere, quibusdam obcaecati odit cupiditate, adipisci quidem?</p>
            <Link to='/build'><CustomButton text={"PROBAR AHORA"} customClass={'btn-contrast'}/></Link>
          </div>
          <div id='img-01'>
            <img src={require("../assets/images/illustrations/robotics-Illustration_04.png")} alt="img-1" />
          </div>
          <div className="blue-gradient-polygon"></div>
        </div>
      </section>

      <Footer/>
    </section>
  )
}
