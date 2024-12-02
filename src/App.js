import logo from './logo.svg';
import './App.css';
import PageLayout from './components/layout/page-layout';
import HeroSection from './components/section/hero-section';
import AboutSection from './components/section/about-section';
import ImpactSection from './components/section/impact-section';
import ProductSection from './components/section/product-section';
import CollabSection from './components/section/collabolators-section';
import Marquee from 'react-fast-marquee';
import Collaborators1 from './components/data/collab-first-line';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {

    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const impactRef = useRef(null);
    const productRef = useRef(null);
    const collabRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToAbout = () => aboutRef.current.scrollIntoView();
    const scrollToImpact = () => impactRef.current.scrollIntoView();
    const scrollToProduct = () => productRef.current.scrollIntoView();
    const scrollToCollab = () => collabRef.current.scrollIntoView();
    const scrollToContact = () => contactRef.current.scrollIntoView();

    const [show, setShow] = useState(true);

    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }

        // console.log(show);
    }

    useEffect(() => {
        window.addEventListener('scroll',
        controlNavbar)
        return () => {
            window.removeEventListener('scroll',
            controlNavbar)
        }
    }, [])

    return (
        <PageLayout
            show={show}
            footerRef={contactRef}
            scrollToAbout={scrollToAbout}
            scrollToCollab={scrollToCollab}
            scrollToContact={scrollToContact}
            scrollToImpact={scrollToImpact}
            scrollToProduct={scrollToProduct}
        >   
            <Helmet>
                <title>Acaloca</title>
                <meta name='title' content='Acaloca' />
                <meta name='description' content='We are dedicated to foster sustainable coconut production in Indonesia by prioritizing conscientious practices that optimize productivity while minimizing the ecological footprint. Our commitment is to deliver exceptional, eco-friendly coconut products to our discerning consumers, meticulously crafted with minimal reliance on synthetic chemicals. We develop the livelihoods and open up business prospects for Indonesian farmers by offering them fair pricing, access to larger markets, and advice on sustainable farming methods.'/>
                <meta name="og:title" content="Acaloca" />
                <meta name="og:description" content="We are dedicated to foster sustainable coconut production in Indonesia by prioritizing conscientious practices that optimize productivity while minimizing the ecological footprint. Our commitment is to deliver exceptional, eco-friendly coconut products to our discerning consumers, meticulously crafted with minimal reliance on synthetic chemicals. We develop the livelihoods and open up business prospects for Indonesian farmers by offering them fair pricing, access to larger markets, and advice on sustainable farming methods." />
                <meta name="og:image" content="/favicon.ico" />
                <meta name="og:card" content="/favicon.ico" />
                <meta name="twitter:title" content="Acaloca" />
                <meta name="twitter:description" content="We are dedicated to foster sustainable coconut production in Indonesia by prioritizing conscientious practices that optimize productivity while minimizing the ecological footprint. Our commitment is to deliver exceptional, eco-friendly coconut products to our discerning consumers, meticulously crafted with minimal reliance on synthetic chemicals. We develop the livelihoods and open up business prospects for Indonesian farmers by offering them fair pricing, access to larger markets, and advice on sustainable farming methods." />
                <meta name="twitter:image" content="/favicon.ico" />
                <meta name="twitter:card" content="/favicon.ico" />
            </Helmet>
            <HeroSection 
                id={'hero'}
                ref={heroRef}
            />
            <AboutSection 
                id={'about'}
                ref={aboutRef}
            />
            <ImpactSection 
                id={'impact'}
                ref={impactRef}
            />
            <ProductSection 
                id={'product'}
                ref={productRef}
            />
            <CollabSection 
                id={'collab'}
                ref={collabRef}
            />
        </PageLayout>
    );
}

export default App;
