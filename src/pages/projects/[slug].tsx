import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '../../lib/prismic';
import { motion } from 'framer-motion';

import SEO from '../../components/SEO';
import Header from '../../components/header';
import Footer from '../../components/footer';

import { ProjectDescription } from '../../styles/pages/Project';

interface ProjectProps{
    project: Document;
}

export default function Project({ project }: ProjectProps){
    const router = useRouter();

    if (router.isFallback){
        return <div className="loader"><p>Loading...</p></div>
    }

    return (
        <div className="grid">
            <SEO 
            title={PrismicDOM.RichText.asText(project.data.title)}
            description={PrismicDOM.RichText.asText(project.data.short_description)}
            />

            <Header title={PrismicDOM.RichText.asText(project.data.title)} backButton />

            <main>
                <motion.div className="container" initial="hidden" animate="visible" variants={{
                    hidden: {
                    opacity: 0,
                    },
                    visible: {
                    opacity: 1,
                    transition: {
                        delay: 1
                    }
                    },
                }}>
                    <ProjectDescription>

                        <img src={project.data.image.url} alt="skiscape"/>
                        <div dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(project.data.description)}}></div>

                        <div className="links">
                            { project.data.link_project != "" && 
                            <a href={PrismicDOM.RichText.asText(project.data.link_project)} target="_blank" rel="noopener noreferrer">{ router.locale == 'pt-br'? 'Veja ao vivo' : 'See it live' }</a>
                            }
                            { project.data.link_github != "" && 
                            <a href={PrismicDOM.RichText.asText(project.data.link_github)} target="_blank" rel="noopener noreferrer">{ router.locale == 'pt-br'? 'Veja o código' : 'See the code' }</a>
                            }
                        </div>
                        <div className="links">
                            <Link href="/"><a>{ router.locale == 'pt-br'? 'Voltar' : 'Back' }</a></Link>
                        </div>
                    </ProjectDescription>
                </motion.div>
            </main>

            <Footer />
        </div>
        );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params;
    
    const project = await client().getByUID('project',String(slug),{ lang : context.locale });

    return {
        props: {
            project,
        },
        revalidate: 60
    }
}