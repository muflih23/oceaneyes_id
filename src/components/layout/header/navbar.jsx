import { Image } from 'antd'
import React, { useEffect, useState } from 'react'
import DropdownMenu from './dropdown-menu'
import NavLinks from './nav-links'

function Navbar({
    scrollToAbout,
    scrollToImpact,
    scrollToProduct,
    scrollToCollab,
    scrollToContact,
    show,
}) {

    const [openMobileNav, setOpenMobileNav] = useState(false);

    return (
        <div className={`flex w-full justify-between items-center px-8 py-[22px] absolute lg:fixed left-0 top-0 ${show ? `navbar-green` : `navbar-faded`} lg:z-[8000] navbar-animated`}>
            <DropdownMenu 
                open={openMobileNav}
                onClose={() => setOpenMobileNav(false)}
                scrollToAbout={scrollToAbout}
                scrollToImpact={scrollToImpact}
                scrollToCollab={scrollToCollab}
                scrollToContact={scrollToContact}
                scrollToProduct={scrollToProduct}
            />
            <button 
                onClick={() => document.getElementById('hero').scrollIntoView({
                    behavior: 'smooth'
                })}
                className={`flex w-[136px] h-[30px] items-center`}
            >
                <Image 
                    preview={false}
                    src={show ? '/logo-main.png' : '/logo-faded.png'}
                    className={`${show ? `no-shadow` : `drop-shadow-filter`}`}
                />
            </button>
            <button
                onClick={() => setOpenMobileNav(true)}
                className='flex w-[32px] h-[32px] items-center text-surface lg:hidden'
            >
                <Image 
                    preview={false}
                    src='/navbar-menu.svg'
                    className='text-surface'
                />
            </button>
            <div className={`hidden lg:flex gap-x-6 items-center ${show ? `visible` : `invisible`}`}>
                <NavLinks 
                    action={() => document.getElementById('hero').scrollIntoView({
                        behavior: 'smooth'
                    })}
                    text={"Home"}
                />
                <NavLinks 
                    action={() => document.getElementById('about').scrollIntoView({
                        behavior: 'smooth'
                    })}
                    text={"About"}
                />
                <NavLinks 
                    action={() => document.getElementById('impact').scrollIntoView({
                        behavior: 'smooth'
                    })}
                    text={"Impact"}
                />
                <NavLinks 
                    action={() => document.getElementById('product').scrollIntoView({
                        behavior: 'smooth'
                    })}
                    text={"Product"}
                />
                <NavLinks 
                    action={() => document.getElementById('collab').scrollIntoView({
                        behavior: 'smooth'
                    })}
                    text={"Collabs"}
                />
                <NavLinks 
                    action={() => document.getElementById('contact').scrollIntoView({
                        behavior: 'smooth'
                    })}
                    text={"Contact"}
                />
            </div>
        </div>
    )
}

export default Navbar