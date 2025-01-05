import { lazy, useEffect } from "react"
import ProvideSection from "./section/provide-section"
import CTASection from "./section/cta-section"
import PSProductSection from "./section/product-section"
const ProductAndServicesHero = lazy(() => import("./section/hero-section"))
const OverviewSection = lazy(() => import("./section/overview-section"))


export default function ProductAndServices() {

    useEffect(() => {
        window.scrollTo(0,0)
    })    

    return (
        <div className="flex flex-col w-full">  
            <ProductAndServicesHero />
            <OverviewSection />
            <ProvideSection />
            <PSProductSection />
            <CTASection />
        </div>
    )
}