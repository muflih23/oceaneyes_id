import { Typography } from 'antd'
import React from 'react'

import "./style.css";

function NavLinks({
    text,
    action,
}) {

    const { Text } = Typography;

    return (
        <button
            onClick={action}
            className='flex acaloca-nav-btn px-1 items-center justify-center'
        >
            <Text className='font-primary text-base font-semibold text-center acaloca-nav-link'>
                {text}
            </Text>
        </button>
    )
}

export default NavLinks