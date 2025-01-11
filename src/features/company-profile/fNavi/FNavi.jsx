import FNaviHeader from "./section/FNavi-header";
import AppInfoSection from "./section/app-info";
import FeatureSection from "./section/feature-section";
import TrialInfoSection from "./section/trial-info";

export default function FNaviPage() {
  return (
    <div className="flex flex-col w-full">
      <FNaviHeader />
      <FeatureSection />
      <AppInfoSection />
      <TrialInfoSection />
    </div>
  )
}