export default function SectionLayout({ children, classNames }) {
    return (
        <div className={`flex w-full flex-col px-[22px] md:px-[45px] xl:px-[67px] pt-20 lg:pt-[90px] ${classNames}`}>
            {children}
        </div>
    )
}