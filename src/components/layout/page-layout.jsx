import React from 'react'
import Footer from './footer/footer'
import Copyrights from './footer/copyright'
import WhatsappChat from '../atoms/chat-whatsapp-button'
import Navbar from './header/navbar'

function PageLayout({
    children,
    footerRef,
    scrollToAbout,
    scrollToImpact,
    scrollToProduct,
    scrollToCollab,
    scrollToContact,
    show,
}) {
    return (
        <div className='block lg:box-border min-h-screen overflow-y-scroll relative landing-page'>
            <Navbar 
                show={show}
                scrollToAbout={scrollToAbout}
                scrollToCollab={scrollToCollab}
                scrollToContact={scrollToContact}
                scrollToImpact={scrollToImpact}
                scrollToProduct={scrollToProduct}
            />
            {children}
            <Footer 
                id={'contact'}
                ref={footerRef}
            />
            <Copyrights />
            <WhatsappChat />
        </div>
    )
}

export default PageLayout