import React, { useRef } from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import Separator from '../../../../components/atoms/separator/separator'

function CompanySection() {
    return (
        <SectionLayout>
            <Separator />
            <div className="flex flex-col justify-center items-center pt-4 lg:pt-10 gap-y-4">
                <h2 className="font-extrabold text-foreground text-[25px] xl:text-[40px] text-center">Who is Oceaneyes</h2>
                <h3 className="font-semibold text-textGray text-base lg:text-[20px] text-center">Oceaneyes adalah perusahaan teknologi yang mengoptimalkan kecerdasan buatan dan pemodelan laut untuk mendukung perikanan berkelanjutan di Indonesia. Sejak 2019, kami menghadirkan solusi inovatif berbasis data untuk menjaga keseimbangan antara kemajuan teknologi dan kelestarian lingkungan laut.</h3>
            </div>
        </SectionLayout>
    )
}

export default CompanySection