import HeroSection from './section/hero-section';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Homepage() {

    const heroRef = useRef(null);

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
        <div>
            <HeroSection 
                id={'hero'}
                ref={heroRef}
            />
        </div>
    );
}
