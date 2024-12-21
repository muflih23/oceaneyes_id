import SectionLayout from "../../../../components/layout/section-layout";

export default function PSProductSection() {
    return (
        <div className="flex flex-col w-full py-10 xl:pt-[90px]">
            <SectionLayout classNames={`!py-7`}>
                <div className="flex flex-col w-full gap-y-5 lg:hidden">
                    <h2 className="font-bold text-foreground text-[25px] xl:text-[40px]">FNavi</h2>
                    <h3 className="font-semibold text-primary text-base">Fnavi, We See The Future of Ocean </h3>
                    <div className="flex w-full md:justify-center md:items-center">
                        <img src="/product-placeholder.png" className="md:w-[300px]"/>
                    </div>
                    <h3 className="font-medium text-textGray text-base">mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan baik itu historikal nya atau forecasting sampai 5 hari dimasa depantampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing Fnavi akan segera hadir disemua system smartphone baik andoroid ataupun IOS Bagaimana Fnavi bisa Memberikan Anda gambaran Kondisi Laut Paling Tepat</h3>
                    <button
                        className="bg-secondary rounded-[50px] py-3 flex justify-center items-center w-[141px] text-white font-bold text-sm lg:text-[20px]"
                    >
                        See More
                    </button>
                </div>
                <div className="hidden justify-between w-full gap-x-5 lg:flex">
                    <div className="flex md:justify-center md:items-center">
                        <img src="/product-placeholder.png" className="md:w-[300px]"/>
                    </div>
                    <div className="flex flex-col gap-y-5 w-[65%]">
                        <h2 className="font-bold text-foreground text-[25px] xl:text-[40px]">FNavi</h2>
                        <h3 className="font-semibold text-primary text-base">Fnavi, We See The Future of Ocean </h3>
                        <h3 className="font-medium text-textGray text-base">mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan baik itu historikal nya atau forecasting sampai 5 hari dimasa depantampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing Fnavi akan segera hadir disemua system smartphone baik andoroid ataupun IOS Bagaimana Fnavi bisa Memberikan Anda gambaran Kondisi Laut Paling Tepat</h3>
                        <button
                            className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
                        >
                            See More
                        </button>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout classNames={`!py-7 bg-[#F9F9F9]`}>
                <div className="flex flex-col w-full gap-y-5 lg:hidden">
                    <h2 className="font-bold text-foreground text-[25px] xl:text-[40px]">Fishing Ground Map</h2>
                    <h3 className="font-semibold text-primary text-base">We Bring your Fishing Process to be more Efficient and Safe</h3>
                    <div className="flex w-full md:justify-center md:items-center">
                        <img src="/product-placeholder.png" className="md:w-[300px]"/>
                    </div>
                    <h3 className="font-medium text-textGray text-base">Fishing Ground Map adalah peta berbasis teknologi canggih yang dirancang untuk membantu nelayan dan pelaku industri perikanan mengidentifikasi lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dibuat melalui analisis mendalam terhadap data kondisi laut, perilaku alami ikan, dan data historis penangkapan yang diproses dengan teknologi AI OceanEyes.</h3>
                    <button
                        className="bg-secondary rounded-[50px] py-3 flex justify-center items-center w-[141px] text-white font-bold text-sm lg:text-[20px]"
                    >
                        See More
                    </button>
                </div>
                <div className="hidden justify-between w-full gap-x-5 lg:flex">
                    <div className="flex flex-col gap-y-5 w-[65%]">
                        <h2 className="font-bold text-foreground text-[25px] xl:text-[40px]">Fishing Ground Map</h2>
                        <h3 className="font-semibold text-primary text-base">We Bring your Fishing Process to be more Efficient and Safe</h3>
                        <h3 className="font-medium text-textGray text-base">Fishing Ground Map adalah peta berbasis teknologi canggih yang dirancang untuk membantu nelayan dan pelaku industri perikanan mengidentifikasi lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dibuat melalui analisis mendalam terhadap data kondisi laut, perilaku alami ikan, dan data historis penangkapan yang diproses dengan teknologi AI OceanEyes.</h3>
                        <button
                            className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
                        >
                            See More
                        </button>
                    </div>
                    <div className="flex md:justify-center md:items-center">
                        <img src="/product-placeholder.png" className="md:w-[300px]"/>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}