import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';

import '../../styles/misc/footer.css'

export const Footer = () => {
  return (
    <div className='footer-main'>
      <ul className='footer-icons'>
        <li><GithubIcon className='github-icon'/></li>
      </ul>
      <div className="footer-text-main">
        <p>Smart Factory © Copyright 2023</p>
      </div>
    </div>
  )
}
