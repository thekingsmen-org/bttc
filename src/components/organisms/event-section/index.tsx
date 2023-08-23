'use client'
import Icon from '@/components/atoms/icon'
import './styles.scss'

export default function EventSection() {
  return (
    <div className="">
          <div className="grid grid-flow-row-dense  md:grid-cols-3 gap-2 grid-cols-1md:px-0 px-3">
        <div className="rounded-xl col-span-2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.7896253956264!2d6.31721514010126!3d4.940651971495442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a043efe6b3b03%3A0x3cc74af38ef756ae!2sTrendy%20Event%20Center!5e0!3m2!1sen!2sng!4v1692787028864!5m2!1sen!2sng"
            width="100%"
            height="450"
            loading="lazy"
            title="map"
            className="rounded-xl"
          ></iframe>
        </div>
        <div className="flex justify-center flex-col space-y-5 md:mt-0 mt-8">
          <div className="flex items-center space-x-3">
            <Icon
              name="material-symbols:home-pin-outline"
              className="text-black dark:text-black"
              size="30"
            />
            <p className="font-semibold">
              Trendy Event Center <br />
              <span className="text-sm font-normal text-gray-700">
                {' '}
                W8R8+8Q7, Mbiama-Yenagoa Road, 569101, Yenagoa. Bayelsa, Nigeria.
              </span>{' '}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Icon
              name="material-symbols:calendar-month-outline-sharp"
              className="text-black dark:text-black"
              size="30"
            />
            <p className="font-semibold ">
              December 12th - 15th, 2023. <br />
              <span className="text-sm font-normal text-gray-700">
                {' '}
                Doors Open at 3:30pm GMT +1.
              </span>
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center md:text-2xl md:mt-16 my-10 italic text-base mx-5">
        Come and experience a total turn around with the King of Kings...{' '}
      </h2>
    </div>
  )
}
