import SectionLayout from "../../../../components/layout/section-layout";

export default function OverviewSection() {
    return (
        <div className="flex flex-col w-full">
            <SectionLayout>
                <div className="flex flex-col justify-center items-center py-4 lg:py-10 gap-y-4 pb-10">
                    <h2 className="font-bold text-foreground text-[25px] xl:text-[40px] text-center">Elevate Your Bussiness to the Next Level and Make More with Us</h2>
                </div>
            </SectionLayout>
            <SectionLayout classNames={`bg-primary md:bg-white !py-[60px] md:!py-5`}>
                <div className="flex flex-col w-full gap-y-7 justify-center items-center md:items-start md:rounded-2xl md:bg-primary md:shadow-xl md:p-10">
                    <h3 className="font-semibold text-white text-[28px] text-left">Avoid Risk and Increase your Safety</h3>
                    <div className="flex w-full flex-col gap-y-7 md:flex-row gap-x-12">
                        <img src="/card-placeholder.jpg" className="w-[331px] md:w-[200px] lg:w-[368px] rounded-lg"/>
                        <img src="/card-placeholder.jpg" className="w-[331px] md:w-[200px] lg:w-[368px] rounded-lg"/>
                    </div>
                    <h4 className="text-white text-base">Dengan teknologi canggih dan akses data satelit, kami mampu membuat pemodelan yang presisi dengan berbagai indikator. Pemodelan ini memberikan informasi lengkap tentang kondisi laut terkini hingga perkiraan hingga 5 hari ke depan. Informasi tersebut dapat dimanfaatkan oleh nelayan untuk merancang rute, mengambil keputusan, atau mempertimbangkan faktor keamanan selama melaut.</h4>
                    <button
                    className='w-fit px-4 flex justify-center items-center py-3 rounded-[50px] text-white font-bold bg-secondary text-base'
                    >
                       Pelajari Lebih Lanjut
                    </button>
                </div>
            </SectionLayout>
            <SectionLayout classNames={`bg-white !py-[60px] md:!py-5`}>
                <div className="flex flex-col w-full gap-y-7 justify-center items-center md:bg-[#DEE5E8] md:items-end md:rounded-2xl md:shadow-xl md:p-10">
                    <h3 className="font-semibold text-foreground text-[28px] text-left md:text-right">More Efficient with Lower Effort, Time and Cost </h3>
                    <div className="flex w-full flex-col gap-y-7 md:flex-row md:justify-end gap-x-12">
                        <img src="/card-placeholder.jpg" className="w-[331px] md:w-[200px] lg:w-[368px] rounded-lg"/>
                        <img src="/card-placeholder.jpg" className="w-[331px] md:w-[200px] lg:w-[368px] rounded-lg"/>
                    </div>
                    <h4 className="text-foreground text-base md:text-right">Perubahan kondisi laut yang cepat, akibat berbagai faktor, turut memengaruhi kebiasaan ikan. Oleh karena itu, melalui pemodelan kami, informasi akurat terkait kondisi laut dan lokasi terbaik untuk menangkap ikan dapat diperoleh. Dengan teknologi ini, waktu yang dibutuhkan untuk menangkap ikan berkurang signifikan, sehingga secara langsung menekan biaya operasional.</h4>
                    <button
                        className='w-fit px-4 flex justify-center items-center py-3 rounded-[50px] text-white font-bold bg-secondary text-base'
                    >
                       Pelajari Lebih Lanjut
                    </button>
                </div>
            </SectionLayout>
        </div>
    )
}