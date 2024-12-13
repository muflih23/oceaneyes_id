import Separator from "../../../../components/atoms/separator/separator";

export default function UpdateSection() {
    return (
        <div className="flex bg-custom-gradient w-full flex-col px-[22px] md:px-[45px] xl:px-[67px] py-20 lg:py-[90px]">
            <div className="flex flex-col justify-center items-center pt-4 lg:pt-10">
                <h2 className="font-bold text-background text-[40px] text-center">Our Update</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center pt-4 lg:pt-10 gap-y-4 md:gap-x-4 xl:gap-x-8">
                <img src="/card-placeholder.jpg" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px]"/>
                <img src="/card-placeholder.jpg" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px]"/>
                <img src="/card-placeholder.jpg" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px]"/>
            </div>
            <div className="flex flex-col gap-y-6 w-full justify-center items-center pt-6 lg:pt-10">
                <h5 className="font-bold text-white text-base lg:text-lg text-center">Jangan lewatkan setiap kegiatan dan inovasi terbaru kami</h5>
                <button
                    className="bg-secondary rounded-[50px] py-3 flex justify-center items-center w-[141px] md:w-[288px] text-white font-bold text-sm lg:text-[20px]"
                >
                    Our Update
                </button>
            </div>
        </div>
    )
}