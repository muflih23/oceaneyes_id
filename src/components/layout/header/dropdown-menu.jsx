import { Drawer, Dropdown, Image } from 'antd'
import React from 'react'
import PrimaryText from '../../atoms/primary-text'
import SpanTextPrimary from '../../atoms/span-text'
import { AiOutlineClose } from "react-icons/ai"

import "./style.css";

function DropdownMenu({
    open,
    onClose,
    scrollToAbout,
    scrollToImpact,
    scrollToProduct,
    scrollToCollab,
    scrollToContact,
}) {

    const items = [
        {
            key: '1',
            label: (
                <span 
                    onClick={() => {
                        document.getElementById('hero').scrollIntoView({
                            behavior: 'smooth'
                        });
                        onClose();
                    }}
                    className='font-semibold text-brown text-base'>
                    Home
                </span>
            )
        },
        {
            key: '2',
            label: (
                <span
                    onClick={() => {
                        document.getElementById('about').scrollIntoView({
                            behavior: 'smooth'
                        });
                        onClose();
                    }}
                    className='font-semibold text-brown text-base'>
                    About
                </span>
            )
        },
        {
            key: '3',
            label: (
                <span
                    onClick={() => {
                        document.getElementById('impact').scrollIntoView({
                            behavior: 'smooth'
                        });
                        onClose();
                    }} 
                    className='font-semibold text-brown text-base'>
                    Impact
                </span>
            )
        },
        {
            key: '4',
            label: (
                <span
                    onClick={() => {
                        document.getElementById('product').scrollIntoView({
                            behavior: 'smooth'
                        });
                        onClose();
                    }} 
                    className='font-semibold text-brown text-base'>
                    Product
                </span>
            )
        },
        {
            key: '5',
            label: (
                <span
                    onClick={() => {
                        document.getElementById('collab').scrollIntoView({
                            behavior: 'smooth'
                        });
                        onClose();
                    }}
                    className='font-semibold text-brown text-base'>
                    Collabs
                </span>
            )
        },
        {
            key: '6',
            label: (
                <span 
                    onClick={() => {
                        document.getElementById('contact').scrollIntoView({
                            behavior: 'smooth'
                        });
                        onClose();
                    }}
                    className='font-semibold text-brown text-base'>
                    Contact
                </span>
            )
        },
        
    ]

    return (
        <Drawer
            placement='top'
            width={"fit-content"}
            className='w-screen lg:hidden'
            open={open}
            closable={false}
        >
            <div className='flex w-full flex-col gap-y-4'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex items-center justify-center w-[136px] h-[30px]'>
                        <Image 
                            preview={false}
                            src='/logo-faded.png'
                            className='drop-shadow-filter'
                        />
                    </div>
                    <button
                        className='flex items-center justify-center text-brown'
                        onClick={onClose}
                    >
                        <AiOutlineClose 
                            size={20}
                        />
                    </button>
                </div>
                <div className='flex flex-col items-center w-full gap-y-4 pt-6'>
                    {items.map((record, index) => (
                        <>
                            {record.label}
                        </>
                    ))}
                </div>
            </div>
        </Drawer>
    )
}

export default DropdownMenu