import React, { useRef } from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import Separator from '../../../../components/atoms/separator/separator'
import SectionTitle from '../../../../components/atoms/section-title'

function CompanySection() {
    return (
        <SectionLayout>
            <div className="flex flex-col justify-center items-center gap-y-4">
                <SectionTitle 
                    text={"Who is Oceaneyes"}
                />
                <h3 className="font-semibold text-textGray text-base lg:text-lg text-center">Oceaneyes adalah perusahaan teknologi yang mengoptimalkan kecerdasan buatan dan pemodelan laut untuk mendukung perikanan berkelanjutan di Indonesia. Sejak 2019, kami menghadirkan solusi inovatif berbasis data untuk menjaga keseimbangan antara kemajuan teknologi dan kelestarian lingkungan laut.</h3>
            </div>
        </SectionLayout>
    )
}

export default CompanySection