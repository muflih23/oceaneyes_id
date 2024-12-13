import { Image } from 'antd'
import React, { useState } from 'react'
import DropdownMenu from './dropdown-menu'
import NavLinks from './nav-links'
import { useNavigate } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';

function Navbar({
    scrollToAbout,
    scrollToImpact,
    scrollToProduct,
    scrollToCollab,
    scrollToContact,
    invisible,
}) {

    const [openMobileNav, setOpenMobileNav] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={`${openMobileNav ? `hidden` : `flex`} w-full justify-between items-center px-8 xl:px-[67px] py-[22px] fixed left-0 top-0 ${invisible ? `navbar-faded` : `navbar-white drop-shadow-lg`} z-[8000] navbar-animated`}>
            <DropdownMenu 
                open={openMobileNav}
                onClose={() => setOpenMobileNav(false)}
                scrollToAbout={scrollToAbout}
                scrollToImpact={scrollToImpact}
                scrollToCollab={scrollToCollab}
                scrollToContact={scrollToContact}
                scrollToProduct={scrollToProduct}
            />
            <div className='flex w-[30%] lg:w-[20%] items-center'>
                <button 
                    onClick={() => navigate(`/`)}
                    className={`flex items-center`}
                >
                    <Image 
                        preview={false}
                        src={'/OceanEyesLogo_LG.png'}
                        className={`!w-[40px] !h-[40px] lg:!w-[60px] lg:!h-[60px]`}
                    />
                </button>
            </div>
            <div className='flex w-[30%] justify-end lg:hidden'>
                <button
                    onClick={() => setOpenMobileNav(true)}
                    className='flex w-[32px] h-[32px] items-center text-surface lg:hidden'
                >
                    <RiMenu3Fill 
                        className={`${invisible ? `text-white` : `text-secondary`}`}
                        size={24}
                    />
                </button>
            </div>
            <div className={'hidden lg:flex w-[60%] justify-center items-center'}>
                <div className={`flex gap-x-6 items-center`}>
                    <NavLinks 
                        action={() => navigate('/about')}
                        text={"About Us"}
                        invisible={invisible}
                    />
                    <NavLinks 
                        action={() => navigate('#')}
                        text={"Our Activity"}
                        invisible={invisible}
                    />
                    <NavLinks 
                        action={() => navigate('/product-and-services')}
                        text={"Product And Services"}
                        invisible={invisible}
                    />
                    <NavLinks 
                        action={() => navigate('#')}
                        text={"Contact Us"}
                        invisible={invisible}
                    />
                    <NavLinks 
                        action={() => navigate('#')}
                        text={"Fishermen Testimoni"}
                        invisible={invisible}
                    />
                </div>
            </div>
            <div className='hidden lg:flex w-[20%] justify-center items-center'>

            </div>
        </div>
    )
}

export default Navbar