import { Image, Typography } from 'antd'
import React, { useRef } from 'react'
import PrimaryText from '../atoms/primary-text';
import SpanTextPrimary from '../atoms/span-text';
import SectionTitle from '../atoms/section-title';
import Impact from '../data/impact-data';
import ImpactCard from '../atoms/impact-card';
import ProductCard from '../atoms/product-card';
import coconutOil from '../data/coconut-oil';
import virginOil from '../data/virgin-oil';

function ProductSection({
    id,
    ref,
}) {

    const { Text } = Typography;

    return (
        <div 
            id={id}
            ref={ref}
            className={`flex flex-col w-full py-[48px] lg:gap-x-[64px] lg:py-[64px] lg:justify-center lg:items-center xl:px-0`}
        >
            <div className='flex flex-col max-w-[1120px] px-8 gap-y-[48px] lg:gap-y-[64px]'>
                <SectionTitle centered>Which Product is Right for You</SectionTitle>
                <ProductCard 
                    image={'/product-photoshoot-min.png'}
                    title={'Premium Coconut Cooking Oil'}
                    description={'Coconut cooking oil made by extracting the oil from copra  (dried coconut flesh). the copra is mechanically pressed to squeeze out the oil, which is then filtered. The resulting coconut cooking oil is known for its pleasant aroma, natural flavor, and versatility in various cooking applications.'}
                    imageCollection={coconutOil}
                />
                <ProductCard 
                    image={'/product-photoshoot-min.png'}
                    title={'Premium Virgin Coconut Oil'}
                    description={'Experience the natural goodness and purity of our Virgin Coconut Oil, a treasure trove of wellness straight from the tropical paradise. Crafted with utmost care from the finest handpicked coconuts, our Virgin Coconut Oil is the embodiment of quality, health, and versatility.'}
                    imageCollection={virginOil}
                />
            </div>
        </div>
    )
}

export default ProductSection