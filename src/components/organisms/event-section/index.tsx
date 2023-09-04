'use client'
import './styles.scss'
import ContentSection from '@/components/organisms/content-section'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function EventSection() {
  return (
    <ContentSection preset="black" noPadding>
      <div className="grid grid-flow-row-dense md:grid-cols-4 gap-2 grid-cols-1">
        <div className="col-span-2 flex  flex-col space-y-5 md:mt-0 mt-8 py-10 pl-10">
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase text-gray-50">Event center</span>
            <h3 className="text-3xl text-white font-bold">
              Trendy Event Center
            </h3>
            <p className="my-6 text-gray-50">
              W8R8+8Q7, Mbiama-Yenagoa Road, 569101, Yenagoa. Bayelsa, Nigeria.
            </p>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <span className="text-xs uppercase text-gray-50">
              Event Date/Time
            </span>
            <h3 className="text-3xl text-white font-bold">Add To Calender</h3>
            <div className="flex">
              <p className="text-gray-50 text-[95px] font-black">T</p>
              <div>
                <p className="leading-none mt-8 text-gray-50 text-[60px] font-black">
                  uesday
                </p>
                <p className="text-gray-50 leading-none h-0 text-[20px] font-black">
                  20-12-2023
                </p>
              </div>
            </div>
            <div className="flex float-right">
              <p className="text-gray-50 text-[95px] font-black">W</p>
              <div>
                <p className="leading-none mt-8 text-gray-50 text-[60px] font-black">
                  ednesday
                </p>
                <p className="text-gray-50 leading-none h-0 text-[20px] font-black">
                  20-12-2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.7896253956264!2d6.31721514010126!3d4.940651971495442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a043efe6b3b03%3A0x3cc74af38ef756ae!2sTrendy%20Event%20Center!5e0!3m2!1sen!2sng!4v1692787028864!5m2!1sen!2sng"
            width="100%"
            loading="lazy"
            title="map"
            className="h-[80vh]"
          ></iframe>
        </div>
      </div>
    </ContentSection>
  )
}
