import { Image, Typography } from 'antd'
import React, { useRef } from 'react'
import PrimaryText from '../atoms/primary-text';
import SpanTextPrimary from '../atoms/span-text';
import SectionTitle from '../atoms/section-title';

function AboutSection({
    id,
    ref
}) {

    const { Text } = Typography;

    return (
        <div 
            id={id}
            ref={ref}
            className={`flex flex-col py-[48px] px-8 lg:flex-row lg:gap-x-[64px] lg:py-[64px] lg:justify-center xl:px-0`}
        >
            <div className='flex flex-col lg:max-w-[448px] md:items-center lg:items-start'>
                <SectionTitle>About Us</SectionTitle>
                <div className='flex flex-col gap-y-4 pt-[40px]'>
                    <PrimaryText
                        color={'neutral'}
                    >
                        We are dedicated to foster <SpanTextPrimary color={'neutral'}>sustainable coconut production</SpanTextPrimary> in Indonesia by prioritizing conscientious practices that optimize productivity while <SpanTextPrimary color={'neutral'}>minimizing the ecological footprint.</SpanTextPrimary>
                    </PrimaryText>
                    <PrimaryText
                        color={'neutral'}
                    >
                        Our commitment is to deliver exceptional, eco-friendly coconut products to our discerning consumers, meticulously crafted with <SpanTextPrimary color={'neutral'}>minimal reliance on synthetic chemicals.</SpanTextPrimary>
                    </PrimaryText>
                    <PrimaryText
                        color={'neutral'}
                    >
                        We develop the <SpanTextPrimary color={'neutral'}>livelihoods and open up business prospects for Indonesian farmers</SpanTextPrimary> by offering them fair pricing, access to larger markets, and advice on sustainable farming methods
                    </PrimaryText>
                </div>
            </div>
            <div className='flex pt-[48px] justify-center items-center lg:pt-0 rounded-[24px] lg:w-[608px] lg:h-[456px] lg:items-start'>
                <Image 
                    preview={false}
                    className='w-full h-full elevation lg:w-[608px] lg:h-[456px]'
                    style={{
                        borderRadius: '24px'
                    }}    
                    src='/about.webp'
                />
            </div>
        </div>
    )
}

export default AboutSection