import SectionLayout from "../../../../components/layout/section-layout";
import { PiShieldStar } from "react-icons/pi";
import { BsShieldCheck } from "react-icons/bs";
import { HiArrowsPointingIn } from "react-icons/hi2";

export default function ProvideSection() {
    return (
        <div className="flex flex-col w-full">
            <SectionLayout classNames={`bg-[#F9F9F9] !py-[60px]`}>
                <h2 className="font-bold text-foreground text-[25px] xl:text-[40px] text-center">Your Trust is Our Commitment</h2>
            </SectionLayout>
            <SectionLayout>
                <div className="flex flex-col w-full justify-center items-center gap-y-[30px]">
                    <div className="flex flex-col lg:flex-row lg:gap-x-[218px] w-full justify-center items-center lg:items-start gap-y-[30px]">
                        <div className="flex flex-col items-center gap-y-4 max-w-[331px]">
                            <PiShieldStar size={59} className="text-primary"/>
                            <h5 className="text-secondary font-bold text-[20px] text-center">Exclusivity</h5>
                            <h6 className="text-foreground text-base text-center">The model will be built only for 1 company based on the company's own data catch.</h6>
                        </div>
                        <div className="flex flex-col items-center gap-y-4 max-w-[331px]">
                            <BsShieldCheck size={59} className="text-primary"/>
                            <h5 className="text-secondary font-bold text-[20px] text-center">Data Security</h5>
                            <h6 className="text-foreground text-base text-center">Every data only will use to build the own company model. We guarantee that we will not share or use to other's occasion</h6>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-4 max-w-[331px]">
                        <HiArrowsPointingIn size={59} className="text-primary"/>
                        <h5 className="text-secondary font-bold text-[20px] text-center">Accurate</h5>
                        <h6 className="text-foreground text-base text-center">The more catch data you have, the higher accuration you will have. The area cover will only be around the data catch history and customer Request </h6>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}