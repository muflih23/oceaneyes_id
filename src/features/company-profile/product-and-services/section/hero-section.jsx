export default function ProductAndServicesHero() {
    return (
        <div
            className="w-full h-screen flex justify-center items-center bg-[url('../public/products-banner.png')] bg-center lg:bg-center bg-cover bg-no-repeat"
        >
            <div className='w-full h-full flex flex-col justify-center bg-[rgba(0,0,0,0.5)] px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px]'>
                <div className='flex max-w-[1120px]'>
                    <h1 className='font-hero font-semibold text-[36px] xl:text-[72px] text-white text-left'>Our Best Products and Services</h1>
                </div>
            </div>
        </div>
    )
}