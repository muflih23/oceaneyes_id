import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import { FaCheckCircle } from 'react-icons/fa'

function FishingGroundMapStep() {
  return (
    <SectionLayout
      classNames={`!bg-primaryLGray lg:!py-[80px]`}
    >
      <div className='flex flex-col w-full gap-y-10 items-center'>
        <SectionTitle
          text={`Sesuaikan dengan Kebutuhan dan Temukan Spot Terbaik untuk Tangkapan Maksimal`}
          className={`!text-foreground !font-hero`}
        />
        <h5 className='text-lg text-gray-500 text-center'>Fishing Ground Map dibuat secara khusus untuk setiap pesanan, memastikan setiap peta yang dihasilkan bersifat unik dan sesuai dengan kebutuhan Anda.</h5>
        <div className='flex w-full lg:max-w-[1320px]'>
          <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-10'>
            {/* Step Card 1*/}
            <div className='flex flex-col w-full gap-y-6'>
              {/* <img src='/step1.jpg' className='rounded-md' /> */}
              <div className='flex flex-col w-full gap-y-4'>
                <h5 className='font-semibold text-xl'>Inisiasi Projek</h5>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Diskusi mengenai konfigurasi yang diinginkan</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Penandatanganan perjanjian dasar, termasuk klausul kerahasiaan</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Penerimaan data untuk dievaluasi </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Step Card 2*/}
            <div className='flex flex-col w-full gap-y-6'>
              {/* <img src='/step2.jpg' className='rounded-md' /> */}
              <div className='flex flex-col w-full gap-y-4'>
                <h5 className='font-semibold text-xl'>Pemeriksaan Kelayakan</h5>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Laporan hasil evaluasi data</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Proposal biaya, penandatanganan kontrak pembangunan, dan pembayaran deposit </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Step Card 1*/}
            <div className='flex flex-col w-full gap-y-6'>
              {/* <img src='/step3.jpg' className='rounded-md' /> */}
              <div className='flex flex-col w-full gap-y-4'>
                <h5 className='font-semibold text-xl'>Pembangunan Model</h5>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Pembuatan model memakan waktu 2 - 4 bulan</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Pelaporan akurasi</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Pengoperasian dan pelatihan</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Step Card 1*/}
            <div className='flex flex-col w-full gap-y-6'>
              {/* <img src='/step2.jpg' className='rounded-md' /> */}
              <div className='flex flex-col w-full gap-y-4'>
                <h5 className='font-semibold text-xl'>Deployment</h5>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Model dideploy untuk digunakan</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default FishingGroundMapStep