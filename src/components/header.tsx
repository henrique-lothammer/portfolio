import { useRouter } from 'next/router'
import { IoChevronBackOutline } from 'react-icons/io5';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {Introduction, BackButton, Language} from "../styles/components/Header";

interface HeaderProps{
  title: string;
  introduction?: string;
  backButton?: boolean;
}

export default function Header({title, introduction, backButton = false}: HeaderProps){
    const router = useRouter();

    return (
        <header>
          <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: .8
                }
              },
            }}>
              {backButton && 
              <BackButton>
                <Link href="/"><a><IoChevronBackOutline /></a></Link>
              </BackButton>
              }
              
              <Language>
                <button
                  className={router.locale == 'pt-br' ? 'active' : ''}
                  onClick={() => {
                    router.push(router.asPath, router.asPath, { locale: 'pt-br' })
                  }}
                >
                  Pt
                </button>
                <button
                  className={router.locale == 'en-us' ? 'active' : ''}
                  onClick={() => {
                    router.push(router.asPath, router.asPath, { locale: 'en-us' })
                  }}
                >
                  En
                </button>
              </Language>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: .4
                }
              },
            }}>
              <h1>{title}</h1>
            </motion.div>
            
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: .6
                }
              },
            }}>
              <Introduction>
                <p>{introduction}</p>
              </Introduction>
            </motion.div>
          </div>
        </header>
    )
}