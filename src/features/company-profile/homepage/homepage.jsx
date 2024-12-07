import HeroSection from './section/hero-section';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import GoalSection from './section/goal-section';
import UpdateSection from './section/update-section';
import ServiceSection from './section/service-section';

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
        <div className='flex flex-col w-full'>
            <HeroSection />
            <GoalSection />
            <ServiceSection />
            <UpdateSection />
        </div>
    );
}
