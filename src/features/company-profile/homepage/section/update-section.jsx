import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/atoms/buttons/primary-button";
import SectionTitle from "../../../../components/atoms/section-title";
import Separator from "../../../../components/atoms/separator/separator";

export default function UpdateSection() {

    const navigate = useNavigate();

    return (
        <div className="flex bg-custom-gradient w-full flex-col px-[22px] md:px-[45px] xl:px-[67px] py-10 my-10">
            <div className="flex flex-col justify-center items-center">
                <SectionTitle 
                    text={"Our Update"}
                    className={`!text-white`}
                />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center pt-4 lg:pt-10 gap-y-4 md:gap-x-4 xl:gap-x-8">
                <img src="/card-placeholder.jpg" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px]"/>
                <img src="/card-placeholder.jpg" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px]"/>
                <img src="/card-placeholder.jpg" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px]"/>
            </div>
            <div className="flex flex-col gap-y-6 w-full justify-center items-center pt-6 lg:pt-10">
                <h5 className="font-bold text-white text-base lg:text-lg text-center">Jangan lewatkan setiap kegiatan dan inovasi terbaru kami</h5>
                <PrimaryButton 
                    text={`See More`}
                    className={`!text-base !px-8`}
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}