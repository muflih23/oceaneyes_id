import { lazy, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
// import HeroSection from './section/hero-section';
// import GoalSection from './section/goal-section';
// import UpdateSection from './section/update-section';
// import ServiceSection from './section/service-section';
const HeroSection = lazy(() => import('./section/hero-section'));
const GoalSection = lazy(() => import('./section/goal-section'));
const UpdateSection = lazy(() => import('./section/update-section'));
const ServiceSection = lazy(() => import('./section/service-section'));

export default function Homepage() {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className='flex flex-col w-full'>
            <HeroSection />
            <GoalSection />
            <ServiceSection />
            <UpdateSection />
        </div>
    );
}
