/* Componente de Navbar personalizable */
import { Link } from 'react-router-dom';

export const CustomNavbar = (props) => {

  // Props
  const links = props.links ? props.links : [];
  const items = props.items ? props.items : [];

  return (
    <nav className="customNavbar" style={{'backgroundColor': `${props.isLanding ? 'transparent' : 'var(--middle-blue)'}`}}>
      <div className="nav-left">
        <Link to='/'><span>SMART FACTORY</span></Link>
      </div>
      <div className="nav-center">
        <ul className='nav-links'>
          {links.map((link, index) => (
            <Link className='navItem' key={index} to={link.url}>{link.text}</Link>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        <ul className='nav-items'>
          {items.map((item, index) => (
            <li className="navItem" key={index}>{item.item}</li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
