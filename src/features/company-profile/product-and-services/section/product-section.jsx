import { useState } from "react";
import SectionTitle from "../../../../components/atoms/section-title";
import SectionLayout from "../../../../components/layout/section-layout";
import { useNavigate } from "react-router-dom";

export default function PSProductSection() {

    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full py-10 xl:pt-[90px]">
            <SectionLayout classNames={`!py-7 lg:hidden`}>
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
                    <div className="flex flex-col gap-y-5 w-[65%] lg:items-end">
                        <h2 className="font-bold text-foreground text-[25px] xl:text-[40px] lg:text-right">FNavi</h2>
                        <h3 className="font-semibold text-primary text-base lg:text-right">Fnavi, We See The Future of Ocean </h3>
                        <h3 className="font-medium text-textGray text-base lg:text-right">mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan baik itu historikal nya atau forecasting sampai 5 hari dimasa depantampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing Fnavi akan segera hadir disemua system smartphone baik andoroid ataupun IOS Bagaimana Fnavi bisa Memberikan Anda gambaran Kondisi Laut Paling Tepat</h3>
                        <button
                            className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
                        >
                            See More
                        </button>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout classNames={`!py-7 bg-[#F9F9F9] lg:hidden`}>
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
            <SectionLayout classNames={`!py-7 hidden lg:flex !flex-row !justify-center`}>
                <div className="grid grid-cols-2 gap-10 max-w-[934px]">
                    <div className="flex w-full flex-col justify-between">
                        <SectionTitle 
                            text={"Trusted Services for Your Various Fishery Bussiness"}
                            className={`!text-left`}
                        />
                        <div className="flex gap-x-4 justify-start items-center">
                            <div onClick={() => setActiveTab(0)} className={`flex flex-col gap-y-4 p-5 ${activeTab == 0 ? `border-2 border-secondary` : `border-[1px] border-textGray`} rounded-lg min-w-[188.75px] hover:cursor-pointer`}>
                                <span className={`text-sm ${activeTab == 0 ? `text-primary font-bold` : `text-textGray font-normal`}`}>01</span>
                                <h3 className={`text-base font-semibold ${activeTab == 0 ? `text-foreground` : `text-textGray`}`}>FNavi</h3>
                                <h4 className={`text-base font-semibold text-foreground underline`}>Klik Disini</h4>
                            </div>
                            <div onClick={() => setActiveTab(1)} className={`flex flex-col gap-y-4 p-5 ${activeTab == 1 ? `border-2 border-secondary` : `border-[1px] border-textGray`} rounded-lg min-w-[188.75px] hover:cursor-pointer`}>
                                <span className={`text-sm ${activeTab == 1 ? `text-primary font-bold` : `text-textGray font-normal`}`}>02</span>
                                <h3 className={`text-base font-semibold ${activeTab == 1 ? `text-foreground` : `text-textGray`}`}>Fishing Ground Map</h3>
                                <h4 className={`text-base font-semibold text-foreground underline`}>Klik Disini</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className={`${activeTab == 0 ? `opacity-100 visible translate-x-0 transition-all duration-300 flex w-[447px]` : `opacity-0 invisible translate-x-10 w-[447px] transition-all duration-300 absolute`} h-[500px] flex-col rounded-xl shadow-lg bg-[url('../public/product1.jpg')] bg-center bg-cover bg-no-repeat`}>
                            <div className="flex w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-xl p-5 gap-y-8 h-[500px] justify-between">
                                <div className="flex flex-col gap-y-5 w-full">
                                    <h2 className="font-bold text-white text-[25px] text-left">FNavi</h2>
                                    <h3 className="font-semibold text-white text-base">Fnavi, We See The Future of Ocean </h3>
                                    <h3 className="font-medium text-white text-base">Mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan baik itu historikal nya atau forecasting sampai 5 hari dimasa depantampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing Fnavi akan segera hadir disemua system smartphone baik andoroid ataupun IOS Bagaimana Fnavi bisa Memberikan Anda gambaran Kondisi Laut Paling Tepat</h3>
                                </div>
                                <button
                                    onClick={() => navigate('/fnavi')}
                                    className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                        <div className={`${activeTab == 1 ? `opacity-100 visible translate-x-0 transition-all duration-300 flex w-[447px]` : `opacity-0 invisible translate-x-10 w-[447px] transition-all duration-300 absolute`} h-[500px] flex-col rounded-xl shadow-lg bg-[url('../public/product2.jpg')] bg-center bg-cover bg-no-repeat`}>
                            <div className="flex w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-xl p-5 gap-y-8 h-[500px] justify-between">
                                <div className="flex flex-col gap-y-5 w-full">
                                    <h2 className="font-bold text-white text-[25px] text-left">Fishing Ground Map</h2>
                                    <h3 className="font-semibold text-white text-base">We Bring your Fishing Process to be more Efficient and Safe</h3>
                                    <h3 className="font-medium text-white text-base">Fishing Ground Map adalah peta berbasis teknologi canggih yang dirancang untuk membantu nelayan dan pelaku industri perikanan mengidentifikasi lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dibuat melalui analisis mendalam terhadap data kondisi laut, perilaku alami ikan, dan data historis penangkapan yang diproses dengan teknologi AI OceanEyes.</h3>
                                </div>
                                <button
                                    className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}