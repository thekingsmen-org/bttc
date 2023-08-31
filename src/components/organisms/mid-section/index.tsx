import './styles.module.scss'
import ContentSection from '@/components/organisms/content-section'
import React from 'react'

export default function MidSection() {
  const items = [
    {
      subtitle: 'faith',
      title: 'Gods Word',
      desc: '',
    },
    {
      subtitle: 'warfare',
      title: 'Prayer',
      desc: '',
    },
    {
      subtitle: 'holiness',
      title: 'Regeneration',
      desc: '',
    },
  ]
  const ItemComp = ({ item }: { item: any }) => (
    <div className="backdrop-blur-3xl p-8 bg-white border rounded shadow-sm">
      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
        <span
          className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          aria-label="Category"
        >
          {item.subtitle}
        </span>{' '}
      </p>
      <div
        aria-label="Article"
        title="Why i love C++"
        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        {item.title}
      </div>
      <p className="mb-5 text-gray-700">{item.desc}</p>
    </div>
  )

  return (
    <ContentSection preset="primary">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {items.map((value, idx) => (
            <ItemComp key={idx} item={value} />
          ))}
        </div>
      </div>
    </ContentSection>
  )
}
