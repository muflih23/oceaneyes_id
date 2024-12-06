import { Image, Typography } from 'antd'
import React, { useRef } from 'react'
import Contacts from '../../atoms/contacts';
import Separator from '../../atoms/separator/separator';

function Footer({
    id,
    ref
}) {

    const { Text } = Typography;

    return (
        <div className='flex flex-col w-full bg-white px-[22px] md:px-8 xl:px-[67px] py-12 gap-y-10'>
            <Separator />
            <div className='flex w-full flex-col md:flex-row gap-4 md:gap-8'>
                <div className='flex flex-col gap-y-4 md:w-[50%]'>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-foreground text-[20px]'>Ocean Eyes,.co.:Ltd</h3>
                        <h4 className='font-semibold text-textGray text-base'>Perusahaan pengembang teknologi AI dibiang Maritime dan Perikanan Tangkap</h4>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-foreground text-[20px]'>Alamat</h3>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='font-semibold text-textGray text-base'>Kyoto office : Kyoto City, Nakagyo Ward, Uraideyama-cho 308 Yamachu Building 26</li>
                            <li className='font-semibold text-textGray text-base'>Tokyo Office : 402 Taiyo Building, 3-27-1 Kanda Sakumacho, Chiyoda-ku, Tokyo 101-0025</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4 md:w-[50%]'>
                    <h3 className='font-bold text-foreground text-[20px]'>Quick Links</h3>
                    <div className='flex flex-col gap-y-2'>
                        <h5 className='font-semibold text-textGray'>Hubungi Kami</h5>
                        <h5 className='font-semibold text-textGray'>Profil Perusahaan</h5>
                        <h5 className='font-semibold text-textGray'>Product Kami</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer