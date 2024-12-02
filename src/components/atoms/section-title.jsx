import { Typography } from 'antd'
import React from 'react'

function SectionTitle({
    children,
    centered,
}) {

    const { Text } = Typography;

    return (
        <h2 className={`font-black text-[36px] lg:text-[64px] font-primary text-brown ${centered ? `text-center` : `text-left`}`}>{children}</h2>
    )
}

export default SectionTitle