import { Image, Typography } from 'antd'
import React, { useRef } from 'react'
import Contacts from '../../atoms/contacts';

function Footer({
    id,
    ref
}) {

    const { Text } = Typography;

    return (
        <div
            id={id}
            ref={ref}
            className='flex flex-col w-full bg-brown px-8 py-12 lg:flex-row xl:px-[120px] lg:gap-x-[90px] lg:items-center'
        >
            <div className='flex max-w-[160px] lg:max-w-[249px]'>
                <Text className='font-primary font-black text-[36px] lg:text-[56px] text-surface'>Let's Get to Work</Text>
            </div>
            <div className='flex flex-col gap-y-2 pt-2'>
                <div className='flex gap-x-2'>
                    <Text className='font-primary text-surface font-semibold text-[18px] lg:text-[36px]'>Contact</Text>
                    <h1 className='font-hero text-[18px] lg:text-[36px] text-white'>acaloca</h1>
                </div>
                <div className='flex flex-col gap-y-2 lg:flex-row lg:gap-x-3 xl:gap-x-9'>
                    <Contacts 
                        icon={'/whatsapp.svg'}
                        media={'Whatsapp'}
                        contact={'+6287870449709'}
                    />
                    <Contacts 
                        icon={'/email.svg'}
                        media={'Email'}
                        contact={'infoacaloca@gmail.com'}
                    />
                    <Contacts 
                        icon={'/instagram.svg'}
                        media={'Instagram'}
                        contact={'@acaloca.id'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer