import { Image, Typography } from 'antd'
import React, { useRef } from 'react'
import PrimaryText from '../atoms/primary-text';
import SpanTextPrimary from '../atoms/span-text';
import SectionTitle from '../atoms/section-title';
import Impact from '../data/impact-data';
import ImpactCard from '../atoms/impact-card';

function ImpactSection({
    id,
    ref
}) {

    const { Text } = Typography;

    return (
        <div 
            id={id}
            ref={ref}
            className={`flex flex-col w-full py-[48px] lg:gap-x-[64px] lg:py-[64px] lg:justify-center lg:items-center xl:px-0`}
        >
            <div className='flex flex-col max-w-[1120px] px-8'>
                <SectionTitle centered>Our Impact in Sustainable Coconut Production</SectionTitle>
            </div>
            <div className='flex w-full overflow-x-auto pt-[48px] scroll-smooth lg:justify-center'>
                <div className='flex w-fit pb-4 gap-x-4 px-8 lg:max-w-[1120px] lg:grid lg:grid-cols-2 lg:gap-8'>
                    {
                        Impact.map((record, index) => (
                            <ImpactCard 
                                title={record.title}
                                image={record.image}
                                description={record.description}
                            />
                        ))
                    }                    
                </div>
            </div>
        </div>
    )
}

export default ImpactSection