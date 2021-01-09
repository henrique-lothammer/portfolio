import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { useRouter } from 'next/router';

import { client } from '../lib/prismic';
import SEO from '../components/SEO';
import Header from '../components/header';
import Footer from '../components/footer';
import { Projects } from '../styles/pages/Home';
import { motion } from 'framer-motion';

interface HomeProps{
  projects: Document[];
  about: Document[];
}

export default function Home({projects, about}: HomeProps) {
  const router = useRouter();

  return (
    <div className="grid">
      <SEO 
      title="Henrique Lothammer de Costa - Portfolio"
      shouldExcludeTitleSuffix
      description="Hi, I'm Henrique Lothammer de Costa, web developer and this is my portfolio."
      />
    
      <Header 
        title={PrismicDOM.RichText.asText(about[0].data.title)}
        introduction={PrismicDOM.RichText.asText(about[0].data.description)} />

      <main>
        <div className="container">

          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1
              }
            },
          }}>
          <h1>{ router.locale == 'pt-br'? 'Projetos' : 'Projects' }</h1>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1.2
              }
            },
          }}>
          <Projects>
            {projects.map(project => {
              return (
                <li key={project.id}>
                  <Link href={`/projects/${project.uid}`}>
                  <a>
                  <div className="content">
                    <div className="img">
                    <img src={project.data.image.thumb.url} alt="skiscape"/>
                    </div>
                    <div className="text">
                      <h2>{PrismicDOM.RichText.asText(project.data.title)}</h2>
                      <p>{PrismicDOM.RichText.asText(project.data.short_description)}</p>
                    </div>
                  </div>
                  </a>
                  </Link>
                </li>
              )
            })}
          </Projects>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async(context) => {

  const about = await client().query([
    Prismic.Predicates.at('document.type', 'about')
  ],{ lang : context.locale });

  const projects = await client().query([
    Prismic.Predicates.at('document.type','project')
  ],{ lang : context.locale });

  return{
    props:{
      projects: projects.results,
      about: about.results
    }
  }
}