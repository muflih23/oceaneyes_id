import { lazy } from "react"
const ProductAndServicesHero = lazy(() => import("./section/hero-section"))
const OverviewSection = lazy(() => import("./section/overview-section"))


export default function ProductAndServices() {

    return (
        <div className="flex flex-col w-full">  
            <ProductAndServicesHero />
            <OverviewSection />
        </div>
    )
}