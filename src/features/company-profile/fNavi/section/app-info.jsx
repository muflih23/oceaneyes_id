import SectionTitle from "../../../../components/atoms/section-title";
import SectionLayout from "../../../../components/layout/section-layout";

export default function AppInfoSection() {
  return (
    <SectionLayout classNames={`items-center`}>
      <div className="flex flex-col-reverse lg:flex-row w-full lg:max-w-[934px] justify-center items-center">
        <img src="/appInfo.webp" className="w-[467px]"/>
        <SectionTitle 
          className={`lg:!text-left`}
          text={<h5 className="text-foreground">We'll be Ready on Your Smartphone, <span className="text-textGray">Soon</span></h5>}
        />
      </div>
    </SectionLayout>
  )
}