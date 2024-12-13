import Separator from "../../../../components/atoms/separator/separator";
import CustomCarousel from "../../../../components/molecules/custom-carousel/carousel";

export default function ServiceSection() {

    const carouselItems = [
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center">
                        <h5 className="font-extrabold font-foreground text-base lg:text-[18px]">FNavi</h5>
                        <h5 className="font-semibold text-textGray text-base lg:text-[18px]">Mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan. tampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing</h5>
                    </div>
                </div>
            ),
            title: "FNavi",
        },
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center">
                        <h5 className="font-extrabold font-foreground text-base lg:text-[18px]">Fishing Ground Map</h5>
                        <h5 className="font-semibold text-textGray text-base lg:text-[18px]">Fishing Ground Map adalah peta berbasis teknologi yang menyediakan informasi akurat tentang lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dihasilkan melalui kombinasi dan analisis data kondisi laut, perilaku alami ikan, serta data historis penangkapan, yang diproses menggunakan teknologi AI dari OceanEyes.</h5>
                    </div>
                </div>
            ),
            title: "Fishing Ground Map",
        }
    ]

    return (
        <div className="flex w-full flex-col px-[22px] md:px-[45px] xl:px-[67px] py-20 lg:py-[90px]">
            <div className="flex flex-col justify-center items-center pt-4 lg:pt-10">
                <h2 className="font-bold text-foreground text-[40px] text-center">Check Out Our Best Products</h2>
            </div>
            {/* Showcase Opt */}
            <div className="flex flex-col w-full justify-center items-center gap-y-8 lg:gap-y-[60px] pt-8 lg:pt-[90px]">
                <div className="flex flex-col lg:flex-row lg:gap-x-10 xl:gap-x-[100px] items-center w-full gap-y-6">
                    <img src="/product-placeholder.png" className="w-full rounded-xl md:w-[300px] xl:w-[440px]"/>
                    <div className="flex flex-col gap-y-4">
                        <h5 className="font-semibold text-foreground text-[28px] xl:text-[36px]">FNavi</h5>
                        <p className="font-regular text-textGray text-base xl:text-[20px]">mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan  </p>
                        <p className="font-regular text-textGray text-base xl:text-[20px]">tampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing   </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row lg:gap-x-10 xl:gap-x-[100px] items-center w-full gap-y-6">
                    <div className="flex flex-col gap-y-4">
                        <h5 className="font-semibold text-foreground text-[28px] xl:text-[36px]">Fishing Ground Map</h5>
                        <p className="font-regular text-textGray text-base xl:text-[20px]">Fishing Ground Map adalah peta berbasis teknologi yang menyediakan informasi akurat tentang lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dihasilkan melalui kombinasi dan analisis data kondisi laut, perilaku alami ikan, serta data historis penangkapan, yang diproses menggunakan teknologi AI dari OceanEyes.</p>
                    </div>
                    <img src="/product-placeholder.png" className="w-full rounded-xl md:w-[300px] xl:w-[440px]"/>
                </div>
            </div>
            {/* Carousel Opt */}
            {/* <div className="flex justify-center items-center pt-8 lg:pt-10">
                <CustomCarousel 
                    items={carouselItems}
                    autoSlide={true}
                    autoSlideInterval={5000}
                />
            </div> */}
            <div className="flex w-full justify-center items-center pt-6 lg:pt-10">
                <button
                    className="bg-secondary rounded-[50px] py-3 flex justify-center items-center w-[141px] md:w-[288px] text-white font-bold text-sm lg:text-[20px]"
                >
                    See More
                </button>
            </div>
        </div>
    )
}