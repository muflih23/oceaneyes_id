import CompanySection from "./section/company-section";
import AboutHeroSection from "./section/hero-section";
import MisionSection from "./section/mision-section";
import TimelineSection from "./section/timeline-section";
import VisionSection from "./section/vision-section";

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full">
            <AboutHeroSection />
            <CompanySection />
            <div className="flex w-full flex-col lg:flex-row">
                <VisionSection />
                <MisionSection />
            </div>
            <TimelineSection />
        </div>
    )
}