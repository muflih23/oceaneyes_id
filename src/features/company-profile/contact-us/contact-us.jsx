import { useEffect } from "react";
import ContactForm from "./section/contact-form";
import ContactInfoSection from "./section/contact-info-section";
import ContactHeroSection from "./section/hero-section";
import ContactBodySection from "./section/body-section";

export default function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="flex flex-col w-full">
      <ContactHeroSection />
    </div>
  )
}