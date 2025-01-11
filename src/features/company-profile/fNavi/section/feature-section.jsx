import { useState } from "react";
import SectionLayout from "../../../../components/layout/section-layout";
import SectionTitle from "../../../../components/atoms/section-title";

export default function FeatureSection() {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <SectionLayout>
        <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-8 rounded-lg shadow-lg p-8 lg:rounded-none lg:shadow-none lg:p-0">
          <h4 className="text-[28px] text-foreground">
            We offer quality, <span className="text-textGray">with the best features and services</span>
          </h4>
          <h4 className="text-base text-textGray">
            Fnavi membantu Anda memahami kondisi laut dengan presisi, mempermudah keputusan, serta menghindari risiko keamanan dan kerugian operasional saat melaut
          </h4>
        </div>
      </SectionLayout>
      <SectionLayout classNames={`bg-primaryLGray items-center`}>
        <div className="flex lg:grid lg:grid-cols-2 lg:gap-10 lg:max-w-[934px]">
          <div className="hidden lg:flex w-full flex-col justify-between">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div onClick={() => setActiveTab(0)} className={`flex flex-col gap-y-4 p-5 ${activeTab == 0 ? `bg-white shadow-lg` : `border-[1px] border-textGray`} rounded-full justify-center items-center w-[200px] h-[200px] hover:cursor-pointer`}>
                <h3 className={`text-base font-semibold text-foreground`}>Cloud Removal</h3>
                <h4 className={`text-base font-semibold text-foreground text-center underline`}>Lihat Detail</h4>
              </div>
              <div onClick={() => setActiveTab(1)} className={`flex flex-col gap-y-4 p-5 ${activeTab == 1 ? `bg-white shadow-lg` : `border-[1px] border-textGray`} rounded-full justify-center items-center w-[200px] h-[200px] hover:cursor-pointer`}>
                <h3 className={`text-base font-semibold text-center text-foreground`}>Temperature Dalam Jangkauan Luas</h3>
                <h4 className={`text-base font-semibold text-foreground text-center underline`}>Lihat Detail</h4>
              </div>
              <div onClick={() => setActiveTab(2)} className={`flex flex-col gap-y-4 p-5 ${activeTab == 2 ? `bg-white shadow-lg` : `border-[1px] border-textGray`} rounded-full justify-center items-center w-[200px] h-[200px] hover:cursor-pointer`}>
                <h3 className={`text-base font-semibold text-center text-foreground`}>Arah dan Kecepatan Arus Laut</h3>
                <h4 className={`text-base font-semibold text-foreground text-center underline`}>Lihat Detail</h4>
              </div>
              <div onClick={() => setActiveTab(3)} className={`flex flex-col gap-y-4 p-5 ${activeTab == 3 ? `bg-white shadow-lg` : `border-[1px] border-textGray`} rounded-full justify-center items-center w-[200px] h-[200px] hover:cursor-pointer`}>
                <h3 className={`text-base font-semibold text-foreground text-center`}>Kepadatan Klorofil, Siome dan sea level anomaly</h3>
                <h4 className={`text-base font-semibold text-foreground text-center underline`}>Lihat Detail</h4>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-full">
            <div className={`${activeTab == 0 ? `opacity-100 visible translate-x-0 transition-all duration-300 flex w-[447px]` : `flex opacity-0 invisible translate-x-10 w-[447px] transition-all duration-300 absolute`} h-[500px] flex-col justify-end rounded-xl shadow-lg bg-[url('../public/feature.jpg')] bg-bottom bg-cover bg-no-repeat`}>
              <div className="flex flex-col gap-y-5 w-full bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-b-xl">
                <h3 className="font-semibold text-white text-base">Cloud Removal</h3>
                <h3 className="font-medium text-white text-base">Teknologi pencitraan satelit terbatas karena lebih dari 60% permukaan laut terhalang awan. Oceaneyes hadir dengan teknologi AI canggih yang merekonstruksi dan melengkapi data suhu permukaan laut di area tertutup awan, menghasilkan informasi kondisi laut yang lebih presisi dan akurat.</h3>
              </div>
            </div>
            <div className={`${activeTab == 1 ? `opacity-100 visible translate-x-0 transition-all duration-300 flex w-[447px]` : `flex opacity-0 invisible translate-x-10 w-[447px] transition-all duration-300 absolute`} h-[500px] flex-col justify-end rounded-xl shadow-lg bg-[url('../public/feature1.jpg')] bg-center bg-cover bg-no-repeat`}>
              <div className="flex flex-col gap-y-5 w-full bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-b-xl">
                <h3 className="font-semibold text-white text-base">Temperature dalam Jangkauan Luas</h3>
                <h3 className="font-medium text-white text-base">Oceaneyes menyediakan data temperatur permukaan laut mencakup hampir seluruh Asia Pasifik, termasuk perairan Indonesia, dengan pembaruan setiap 4 jam dan ramalan hingga 5 hari ke depan. Data ini dapat disesuaikan hingga kedalaman 200 meter, membantu nelayan memetakan area potensial memancing berdasarkan karakter ikan yang ditargetkan.</h3>
              </div>
            </div>
            <div className={`${activeTab == 2 ? `opacity-100 visible translate-x-0 transition-all duration-300 flex w-[447px]` : `flex opacity-0 invisible translate-x-10 w-[447px] transition-all duration-300 absolute`} h-[500px] flex-col justify-end rounded-xl shadow-lg bg-[url('../public/feature2.jpg')] bg-center bg-cover bg-no-repeat`}>
              <div className="flex flex-col gap-y-5 w-full bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-b-xl">
                <h3 className="font-semibold text-white text-base">Arah dan Kecepatan arus Laut</h3>
                <h3 className="font-medium text-white text-base">Oceaneyes menyajikan data arah dan kecepatan arus laut yang mencakup seluruh Asia Pasifik, termasuk Indonesia, dengan pembaruan setiap 4 jam dan ramalan hingga 5 hari ke depan. Data ini membantu nelayan memetakan rute dan menghindari arus deras yang dapat mengganggu atau merusak proses memancing.</h3>
              </div>
            </div>
            <div className={`${activeTab == 3 ? `opacity-100 visible translate-x-0 transition-all duration-300 flex w-[447px]` : `flex opacity-0 invisible translate-x-10 w-[447px] transition-all duration-300 absolute`} h-[500px] flex-col justify-end rounded-xl shadow-lg bg-[url('../public/feature3.jpg')] bg-center bg-cover bg-no-repeat`}>
              <div className="flex flex-col gap-y-5 w-full bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-b-xl">
                <h3 className="font-semibold text-white text-base">Kepadatan Klorofil, Siome dan sea level anomaly </h3>
                <h3 className="font-medium text-white text-base">data data lain yang anda butuhkan terkait kondisi laut akan tersedia di fnavi dan secara terus menerus akan terus ditambah menyesuaikan kebutuhan para nelayan ataupun pelaku usaha lain di sektor maritime.</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:hidden w-full gap-y-5">
            <div className={`flex w-full h-[500px] flex-col justify-end rounded-xl shadow-lg bg-[url('../public/feature.jpg')] bg-bottom bg-cover bg-no-repeat`}>
              <div className="flex flex-col gap-y-5 w-full bg-black bg-opacity-20 backdrop-blur-lg p-4 rounded-b-xl">
                <h3 className="font-semibold text-white text-base">Cloud Removal</h3>
                <h3 className="font-medium text-white text-base">Teknologi pencitraan satelit terbatas karena lebih dari 60% permukaan laut terhalang awan. Oceaneyes hadir dengan teknologi AI canggih yang merekonstruksi dan melengkapi data suhu permukaan laut di area tertutup awan, menghasilkan informasi kondisi laut yang lebih presisi dan akurat.</h3>
              </div>
            </div>
            <div className={`flex w-full h-[500px] flex-col justify-end rounded-xl shadow-lg bg-[url('../public/feature1.jpg')] bg-bottom bg-cover bg-no-repeat`}>
              <div className="flex flex-col gap-y-5 w-full bg-black bg-opacity-20 backdrop-blur-lg p-4 rounded-b-xl">
                <h3 className="font-semibold text-white text-base">Temperature dalam Jangkauan Luas</h3>
                <h3 className="font-medium text-white text-base">Oceaneyes menyediakan data temperatur permukaan laut mencakup hampir seluruh Asia Pasifik, termasuk perairan Indonesia, dengan pembaruan setiap 4 jam dan ramalan hingga 5 hari ke depan. Data ini dapat disesuaikan hingga kedalaman 200 meter, membantu nelayan memetakan area potensial memancing berdasarkan karakter ikan yang ditargetkan.</h3>
              </div>
            </div>
            <div className={`flex w-full h-[500px] flex-col justify-end rounded-xl shadow-lg bg-[url('../public/feature2.jpg')] bg-bottom bg-cover bg-no-repeat`}>
              <div className="flex flex-col gap-y-5 w-full bg-black bg-opacity-20 backdrop-blur-lg p-4 rounded-b-xl">
                <h3 className="font-semibold text-white text-base">Arah dan Kecepatan arus Laut</h3>
                <h3 className="font-medium text-white text-base">Oceaneyes menyajikan data arah dan kecepatan arus laut yang mencakup seluruh Asia Pasifik, termasuk Indonesia, dengan pembaruan setiap 4 jam dan ramalan hingga 5 hari ke depan. Data ini membantu nelayan memetakan rute dan menghindari arus deras yang dapat mengganggu atau merusak proses memancing.</h3>
              </div>
            </div>
            <div className={`flex w-full h-[500px] flex-col justify-end rounded-xl shadow-lg bg-[url('../public/feature3.jpg')] bg-bottom bg-cover bg-no-repeat`}>
              <div className="flex flex-col gap-y-5 w-full bg-black bg-opacity-20 backdrop-blur-lg p-4 rounded-b-xl">
                <h3 className="font-semibold text-white text-base">Kepadatan Klorofil, Siome dan sea level anomaly </h3>
                <h3 className="font-medium text-white text-base">data data lain yang anda butuhkan terkait kondisi laut akan tersedia di fnavi dan secara terus menerus akan terus ditambah menyesuaikan kebutuhan para nelayan ataupun pelaku usaha lain di sektor maritime.</h3>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}