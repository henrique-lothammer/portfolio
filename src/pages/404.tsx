import { useRouter } from "next/router";

import SEO from '../components/SEO';
import Header from '../components/header';
import Footer from '../components/footer';

export default function NotFound(){
    const router = useRouter();
    
    return(
        <div className="grid">
            <SEO 
            title={ router.locale == 'pt-br'? 'Página não encontrada' : 'Page not found' }
            shouldIndexPage={false}
            />
            <Header title="Ops!" backButton />
            <main>
                <div className="container">
                    <h1>{ router.locale == 'pt-br'? '404 - Página não encontrada. :(' : '404 - Page not found. :(' }</h1>
                </div>
            </main>
            <Footer />
        </div>
    )
}