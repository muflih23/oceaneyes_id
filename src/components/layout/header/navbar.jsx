import { Image } from 'antd'
import React, { useState } from 'react'
import DropdownMenu from './dropdown-menu'
import NavLinks from './nav-links'
import { useLocation, useNavigate } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { UNIQUE_ROUTES } from '../../../constants/unique-routes';

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
    const location = useLocation();

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
                        className={`!w-[40px] !h-[40px]`}
                    />
                </button>
            </div>
            <div className='flex w-[30%] justify-end lg:hidden'>
                <button
                    onClick={() => setOpenMobileNav(true)}
                    className='flex w-[32px] h-[32px] items-center text-surface lg:hidden'
                >
                    <RiMenu3Fill 
                        className={`${invisible && !UNIQUE_ROUTES.includes(location.pathname) ? `text-white` : `text-secondary`}`}
                        size={24}
                    />
                </button>
            </div>
            <div className={'hidden lg:flex w-[80%] justify-end items-center'}>
                <div className={`flex gap-x-6 items-center`}>
                    <NavLinks 
                        action={() => navigate('/about')}
                        text={"About Us"}
                        invisible={invisible && !UNIQUE_ROUTES.includes(location.pathname)}
                    />
                    <NavLinks 
                        action={() => navigate('#')}
                        text={"Our Activity"}
                        invisible={invisible && !UNIQUE_ROUTES.includes(location.pathname)}
                    />
                    <NavLinks 
                        action={() => navigate('/product-and-services')}
                        text={"Product And Services"}
                        invisible={invisible && !UNIQUE_ROUTES.includes(location.pathname)}
                    />
                    <NavLinks 
                        action={() => navigate('/contact-us')}
                        text={"Contact Us"}
                        invisible={invisible && !UNIQUE_ROUTES.includes(location.pathname)}
                    />
                    <NavLinks 
                        action={() => navigate('#')}
                        text={"Fishermen Testimoni"}
                        invisible={invisible && !UNIQUE_ROUTES.includes(location.pathname)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar