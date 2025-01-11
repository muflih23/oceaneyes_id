import HeroTitle from "../../../../components/atoms/hero-title"
import SectionTitle from "../../../../components/atoms/section-title"
import SectionLayout from "../../../../components/layout/section-layout"
import { LuArrowUpRight } from "react-icons/lu";

export default function FNaviHeader() {
  return (
    <SectionLayout classNames={`!pt-[86px] pb-10`}>
      <div className="flex items-center justify-between w-full h-[calc(100vh-86px)] lg:h-[90vh] rounded-3xl p-4 lg:p-10 bg-[url('../public/fnavi.jpg')] bg-cover bg-no-repeat relative">
        <div className="flex w-fit flex-col gap-y-2">
          <SectionTitle
            className={`!flex !text-white drop-shadow-lg`}
            text={"FNavi"}
          />
          <HeroTitle
            className={`!flex !text-white drop-shadow-lg`}
            text={"We See the Future of Ocean"}
          />
        </div>
        <div className="hidden lg:flex flex-col gap-y-10 p-4 rounded-lg bg-white bg-opacity-20 backdrop-blur-md w-[300px]">
          <div className="flex w-[70%]">
            <img src="/card-placeholder.jpg" className="w-full rounded-lg" />
          </div>
          <div className="flex w-full justify-between items-center">
            <button className="bg-transparent border-[1px] border-white rounded-full p-1">
              <LuArrowUpRight className="text-white font-light text-2xl" />
            </button>
            <h5 className="text-white font-semibold">Learn More about FNavi</h5>
          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-0 right-0 bg-white w-fit gap-x-10 p-10 rounded-tl-3xl">
          <div className="flex flex-col gap-y-2 w-[200px]">
            <h4 className="text-foreground text-[32px] font-semibold">1000+</h4>
            <h5 className="text-textGray">Nelayan di Jepang pengguna tetap FNavi</h5>
          </div>
          <div className="flex flex-col gap-y-2 w-[200px]">
            <h4 className="text-foreground text-[32px] font-semibold">100+</h4>
            <h5 className="text-textGray">Nelayan di Indonesia telah mencoba</h5>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-y-10 w-full mt-[40px]">
        <div className="flex flex-col gap-y-2 w-full items-center">
          <h4 className="text-foreground text-[32px] font-semibold text-center">1000+</h4>
          <h5 className="text-textGray text-center">Nelayan di Jepang pengguna tetap FNavi</h5>
        </div>
        <div className="flex flex-col gap-y-2 w-full items-center">
          <h4 className="text-foreground text-[32px] font-semibold text-center">100+</h4>
          <h5 className="text-textGray text-center">Nelayan di Indonesia telah mencoba</h5>
        </div>
      </div>
    </SectionLayout>
  )
}