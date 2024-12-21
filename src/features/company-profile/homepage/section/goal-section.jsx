import CustomCarousel from "../../../../components/molecules/custom-carousel/carousel";

export default function GoalSection() {

    const carouselItems = [
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center">
                        <h5 className="font-extrabold font-foreground text-base lg:text-[18px]">Optimalisasi Bisnis Penangkapan</h5>
                        <h5 className="font-semibold text-textGray text-base lg:text-[18px]">Tingginya biaya penangkapan ikan, terutama bahan bakar yang mencapai 30% pengeluaran, ditambah ketidakpastian hasil tangkapan dan perubahan iklim, meningkatkan risiko nelayan. Oceaneyes menggunakan teknologi AI untuk memberikan rekomendasi lokasi dan waktu penangkapan yang aman dan tepat.</h5>
                    </div>
                </div>
            ),
            title: "Optimalisasi",
        },
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center">
                        <h5 className="font-extrabold font-foreground text-base lg:text-[18px]">Sustainability</h5>
                        <h5 className="font-semibold text-textGray text-base lg:text-[18px]">Menggunakan teknologi AI dan data satelit, kami menyediakan solusi aman, efisien, dan ramah lingkungan, membantu nelayan menemukan lokasi ikan sesuai peraturan dan prinsip keberlanjutan untuk menjaga ekosistem.</h5>
                    </div>
                </div>
            ),
            title: "Sustainability",
        }
    ]

    return (
        <div className="flex w-full flex-col px-[22px] md:px-[45px] xl:px-[67px] py-20 lg:py-[90px] bg-gradient-to-b from-primaryL to-white">
            <div className="flex flex-col justify-center items-center pt-4 lg:pt-10">
                <h2 className="font-bold text-foreground text-[40px] text-center">What Problem We Try To Solve</h2>
            </div>
            <div className="flex justify-center items-center pt-8 lg:pt-10">
                <CustomCarousel 
                    items={carouselItems}
                    autoSlide={true}
                    autoSlideInterval={5000}
                />
            </div>
        </div>
    )
}