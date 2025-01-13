import { Drawer, Dropdown, Image } from 'antd'
import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

import "./style.css";
import { useNavigate } from 'react-router-dom'

function DropdownMenu({
  open,
  onClose,
  scrollToAbout,
  scrollToImpact,
  scrollToProduct,
  scrollToCollab,
  scrollToContact,
}) {

  const navigate = useNavigate()

  const items = [
    {
      key: '1',
      label: (
        <span
          onClick={() => {
            navigate('/')
            onClose();
          }}
          className='font-semibold text-primary text-base'>
          Home
        </span>
      )
    },
    {
      key: '2',
      label: (
        <span
          onClick={() => {
            navigate('/about')
            onClose();
          }}
          className='font-semibold text-primary text-base'>
          About
        </span>
      )
    },
    {
      key: '3',
      label: (
        <span
          onClick={() => {
            navigate('/news')
            onClose();
          }}
          className='font-semibold text-primary text-base'>
          Our Updates
        </span>
      )
    },
    {
      key: '4',
      label: (
        <span
          onClick={() => {
            navigate('/product-and-services')
            onClose();
          }}
          className='font-semibold text-primary text-base'>
          Product and Services
        </span>
      )
    },
    {
      key: '5',
      label: (
        <span
          onClick={() => {
            navigate('/contact-us')
            onClose();
          }}
          className='font-semibold text-primary text-base'>
          Contact Us
        </span>
      )
    },
  ]

  return (
    <Drawer
      placement='top'
      width={"fit-content"}
      className='w-screen lg:hidden'
      open={open}
      closable={false}
    >
      <div className='flex w-full flex-col gap-y-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex items-center w-[136px] h-[30px]'>
            <Image
              preview={false}
              src={'/OceanEyesLogo_LG.png'}
              className={`!w-[40px] !h-[40px] lg:!w-[60px] lg:!h-[60px]`}
            />
          </div>
          <button
            className='flex items-center justify-center text-primary'
            onClick={onClose}
          >
            <AiOutlineClose
              size={20}
            />
          </button>
        </div>
        <div className='flex flex-col w-full gap-y-4 pt-6'>
          {items.map((record, index) => (
            <>
              {record.label}
            </>
          ))}
        </div>
      </div>
    </Drawer>
  )
}

export default DropdownMenu