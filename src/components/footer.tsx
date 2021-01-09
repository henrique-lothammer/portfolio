import { motion } from 'framer-motion';
import { IoLogoCodepen, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

import { SocialLinks } from '../styles/components/Footer';

export default function Footer(){
    return (
      <footer>
        <motion.div className="container" initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1.4
              }
            },
          }}>
          <SocialLinks>
            <li>
              <a href="https://www.linkedin.com/in/henrique-lothammer-de-costa/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <IoLogoLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/henrique-lothammer" target="_blank" rel="noopener noreferrer" title="Github">
                <IoLogoGithub />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/henriquelothammer" target="_blank" rel="noopener noreferrer" title="Codepen">
                <IoLogoCodepen />
              </a>
            </li>
          </SocialLinks>
          </motion.div>
      </footer>
    )
}