import { Typography } from 'antd'
import React from 'react'

import "./style.css";

function NavLinks({
    text,
    action,
    invisible,
}) {

    const { Text } = Typography;

    return (
        <button
            onClick={action}
            className={`flex px-1 items-center justify-center`}
        >
            <Text className={`font-primary text-base font-semibold text-center ${invisible ? `text-white` : `text-foreground`} hover:text-secondary`}>
                {text}
            </Text>
        </button>
    )
}

export default NavLinks