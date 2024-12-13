import React from "react";
import SectionLayout from "../../../../components/layout/section-layout";
import Separator from "../../../../components/atoms/separator/separator";

export default function TimelineSection() {
  const events = [
    {
      year: "2019",
      image: "/history.png", // Ganti dengan URL gambar Anda
      title: "Market Research",
      description: [
        "Our first step began with understanding the business landscape and in-depth methods related to fishing habits and industry in Indonesia.",
        "Collaboration with KKP (Ministry of Marine Affairs and Fisheries): Understanding the regulatory landscape of fisheries in Indonesia, including division of regions, catch quotas, and monitoring of illegal fishing.",
        "Pilot Project with Capture Fish Companies (Bitung, Bali, Aceh): Developing technology that suits the needs of business actors.",
      ],
    },
    {
      year: "2020",
      image: "/history.png", // Ganti dengan URL gambar Anda
      title: "Postponed due to COVID-19 Outbreak",
      description: [],
    },
    {
      year: "2023",
      image: "/history.png", // Ganti dengan URL gambar Anda
      title: "Technology Trials with Local Fishermen",
      description: [
        "Ocean Eyes engages various fisher groups in technology trials:",
        "- ASTUIN (Indonesian Tuna Association): Providing critical insights into the tuna fishing industry in Indonesia.",
        "- Binuanegun & Pelabuhan Ratu Fishermen Group: Engaging more than 30 fishermen to test the Fishing Ground Map in the southern sea of Java.",
        "- Palu Fishermen Group: Engaging more than 20 fishermen to collect data and input on fisheries in eastern Indonesia.",
      ],
    },
  ];

  return (
    <SectionLayout classNames={`items-center bg-gradient-to-b from-white from- via-primary via-`}>
        <div className="flex flex-col justify-center items-center py-4 lg:py-10 gap-y-4">
            <h2 className="font-bold text-foreground text-[25px] xl:text-[40px] text-center">Our Story in Indonesia</h2>
        </div>
        <div className="flex flex-col items-center w-fit px-4 bg-white rounded-2xl drop-shadow-xl">
            <div className="flex flex-col items-center py-8 lg:max-w-[816px]">
                {events.map((event, index) => (
                    <div
                    key={index}
                    className="relative w-full max-w-3xl mb-12 flex items-start"
                    >
                        {/* Line */}
                        <div className="absolute left-[94px] md:left-[120px] top-0 h-[calc(100%+48px)] w-0.5 border-r-[2px] border-textGray border-dashed"></div>
                        {/* Year */}
                        <div className="absolute left-[22px] md:left-[45px] transform -translate-x-1/3 md:-translate-x-2/3 text-textGray font-bold text-[25px]">
                            {event.year}
                        </div>
                        {/* Circle */}
                        <div className="absolute left-[82px] md:left-[110px] top-2 h-6 w-6 rounded-full bg-primary"></div>
                        {/* Horizontal Line */}
                        <div className="absolute left-[94px] md:left-[120px] top-5 h-0.5 w-8 md:w-12 border-t-[2px] border-primary"></div>
                        {/* Content */}
                        <div className={`ml-10 pl-[85px] md:pl-[125px]`}>
                            <img
                            src={event.image}
                            alt={`${event.year} illustration`}
                            className="mb-4 w-full rounded-lg drop-shadow-md"
                            />
                            <h3 className="text-lg font-extrabold lg:text-[20px] text-foreground">{event.title}</h3>
                            <ul className="mt-2 space-y-2 text-lg text-textGray font-semibold lg:text-[20px]">
                            {event.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SectionLayout>
  );
};
