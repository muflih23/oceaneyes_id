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
    <div className='flex flex-col w-full bg-primary px-[22px] md:px-8 xl:px-[67px] py-12 gap-y-10'>
      <Separator />
      <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 xl:gap-10'>
        <div className='flex flex-col gap-y-4 w-full'>
          <div className='flex flex-col'>
            <h3 className='font-bold text-secondary text-[20px]'>Ocean Eyes,.co.:Ltd</h3>
            <h4 className='font-light text-white text-sm'>OceanEyes adalah solusi inovatif yang menyediakan layanan analitik berbasis teknologi untuk mendukung pengelolaan sumber daya laut secara efisien dan berkelanjutan. Dengan AI, big data, dan penginderaan satelit, OceanEyes membantu perusahaan, pemerintah, dan organisasi dalam pengambilan keputusan, optimasi operasi, dan kepatuhan regulasi lingkungan.</h4>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-bold text-secondary text-[20px]'>Alamat</h3>
          <ul className='flex flex-col gap-y-4'>
            <li className='font-light text-white text-sm'>Kyoto office : Kyoto City, Nakagyo Ward, Uraideyama-cho 308 Yamachu Building 26</li>
            <li className='font-light text-white text-sm'>Tokyo Office : 402 Taiyo Building, 3-27-1 Kanda Sakumacho, Chiyoda-ku, Tokyo 101-0025</li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-4 w-full'>
          <h3 className='font-bold text-secondary text-[20px]'>Quick Links</h3>
          <div className='flex flex-col gap-y-2'>
            <h5 className='font-light text-sm text-white hover:cursor-pointer hover:text-primaryL'>Hubungi Kami</h5>
            <h5 className='font-light text-sm text-white hover:cursor-pointer hover:text-primaryL'>Profil Perusahaan</h5>
            <h5 className='font-light text-sm text-white hover:cursor-pointer hover:text-primaryL'>Product Kami</h5>
          </div>
        </div>
        <div className='flex w-full items-start'>
          <video className='w-2/3 md:w-1/2 lg:w-full' autoPlay muted loop>
            <source src='https://storage.oceaneyes.id/oceaneyes/footage/Adventure%20Instagram%20Post.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Footer