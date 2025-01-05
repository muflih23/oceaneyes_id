import SectionTitle from "../../../../components/atoms/section-title";
import SectionLayout from "../../../../components/layout/section-layout";
import CustomCarousel from "../../../../components/molecules/custom-carousel/carousel";
import { useNavigate } from 'react-router-dom';

export default function CTASection() {

    const navigate = useNavigate()

    const routeToContactUs = () => {
        navigate('/contact-us')
    }

    const carouselItems = [
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center pb-4">
                        <h5 className="font-extrabold font-foreground text-base lg:text-[18px]">Fishing Company</h5>
                        <h5 className="font-semibold text-textGray text-base lg:text-[18px]">Oceaneyes adalah teknologi yang ideal untuk perusahaan tangkap, meningkatkan efisiensi operasional dan mengurangi risiko secara signifikan. Kami dapat menyesuaikan teknologi ini sesuai karakter dan model bisnis Anda. Hubungi tim kami untuk penawaran lebih lanjut</h5>
                        <div onClick={() => routeToContactUs()} className="font-extrabold font-foreground text-base lg:text-[18px] text-secondary underline lg:no-underline lg:hover:text-primary lg:cursor-pointer w-fit">Hubungi Kami</div>
                    </div>
                </div>
            ),
            title: "Fishing Company",
        },
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center pb-4">
                        <h5 className="font-extrabold font-foreground text-base lg:text-[18px]">Fisher Association</h5>
                        <h5 className="font-semibold text-textGray text-base lg:text-[18px]">Memahami bisnis ikan tangkap sebagai sumber utama penghidupan nelayan adalah langkah tepat untuk meningkatkan ekonomi mereka. Dengan teknologi ini, kami menjamin peningkatan keuntungan dan keamanan melaut. Hubungi tim kami untuk penawaran lebih lanjut</h5>
                        <div onClick={() => routeToContactUs()} className="font-extrabold font-foreground text-base lg:text-[18px] text-secondary underline lg:no-underline lg:hover:text-primary lg:cursor-pointer w-fit">Hubungi Kami</div>
                    </div>
                </div>
            ),
            title: "Fisher Association",
        }
    ]

    return (
        <SectionLayout classNames={`bg-primary`}>
            <SectionTitle 
                text={"Collaborate With Us"}
                className={`text-white`}
            />
            <div className="flex justify-center items-center pt-8 lg:pt-10">
                <CustomCarousel 
                    items={carouselItems}
                    autoSlide={true}
                    autoSlideInterval={8000}
                    colorScheme="secondary"
                />
            </div>
        </SectionLayout>
    )
}