import { Image, Typography } from 'antd'
import React, { useRef } from 'react'
import PrimaryText from '../atoms/primary-text';
import SpanTextPrimary from '../atoms/span-text';
import SectionTitle from '../atoms/section-title';
import Impact from '../data/impact-data';
import ImpactCard from '../atoms/impact-card';
import Collaborators1 from '../data/collab-first-line';
import Collaborators2 from '../data/collab-second-line';
import Marquee from 'react-fast-marquee';

function CollabSection({
    id,
    ref
}) {


    const { Text } = Typography;

    return (
        <div 
            id={id}
            ref={ref}
            className={`flex flex-col w-full py-[48px] lg:py-[64px] lg:justify-center lg:items-center xl:px-0`}
        >
            <div className='flex flex-col max-w-[1120px] px-8'>
                <SectionTitle centered>Amazing Collaborators</SectionTitle>
            </div>
            <div className='flex w-auto pt-[48px]'>
                <div className='flex items-center bg-brownMuted h-[128px] lg:h-[281px] overflow-y-hidden'>
                    <Marquee
                        className='flex items-center py-8 h-full overflow-y-hidden'
                        autoFill={true}
                    >
                        {
                            Collaborators1.map((record, index) => (
                                <div className='slider-image'>
                                    <img 
                                        preview={false}
                                        src={record.logo}
                                    />
                                </div>
                            ))
                        }
                    </Marquee>
                </div>
            </div>
            {/* <div className='flex w-auto pt-[48px]'>
                <div className='flex items-center bg-brownMuted h-[150px] lg:h-[281px] overflow-y-hidden'>
                    <Marquee
                        className='flex items-center py-8 h-full overflow-y-hidden'
                        direction='right'
                        autoFill={true}
                    >
                        {
                            Collaborators2.map((record, index) => (
                                <div className='slider-image'>
                                    <img 
                                        preview={false}
                                        src={record.logo}
                                    />
                                </div>
                            ))
                        }
                    </Marquee>
                </div>
            </div> */}
        </div>
    )
}

export default CollabSection