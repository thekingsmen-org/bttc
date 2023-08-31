import Link from 'next/link'
import './styles.scss'

export default function HeroSection() {
  return (
    <section className="hero-section bg-primary w-full p-8 md:px-24 flex items-center justify-center flex-col space-y-9">
      {/*<section className="relative flex h-screen w-screen flex-col dark:bg-gray-900 overflow-hidden tails-selected-element">*/}
      {/*  <div className="absolute right-0 opacity-50 bottom-0 h-full w-1/2">*/}
      {/*    <img*/}
      {/*      src="https://cdn.devdojo.com/images/january2023/blurry-gradient-top-right.png"*/}
      {/*      className="absolute right-0 top-0 z-10 h-full w-auto translate-x-1/2 -translate-y-40 opacity-100"*/}
      {/*    />*/}
      {/*    <div className="absolute inset-0 z-20 bg-gradient-to-t from-white dark:hidden" />*/}
      {/*  </div>*/}

      {/*  <div className="absolute left-0 opacity-50 top-0 h-full w-1/2">*/}
      {/*    <img*/}
      {/*      src="https://cdn.devdojo.com/images/january2023/blurry-gradient-bottom-left.png"*/}
      {/*      className="absolute left-0 bottom-0 z-10 h-full w-auto translate-y-32 -translate-x-1/2 opacity-100"*/}
      {/*    />*/}
      {/*    <div className="absolute inset-0 z-20 bg-gradient-to-b from-white dark:hidden" />*/}
      {/*  </div>*/}
      {/*</section>*/}
      <div className="flex justify-between items-center w-full max-w-4xl mt-24">
        <h2 className="font-semibold text-md">Yenagoa, BY</h2>
        <h2 className="text-md font-semibold">MMXXIII</h2>
        <h2 className="text-md font-semibold">DEC 12th - 15th</h2>
      </div>
      <h1 className="font-['Inter'] mt-32 text-black text-5xl md:text-7xl lg:text-9xl font-black max-w-7xl text-center tracking-widest main-header-text">
        THE CROSS <span className="bg-black text-white">CONFERENCE</span> 2023
      </h1>
      <div className="flex items-center justify-center max-w-2xl">
        <span>
          <p className="text-lg text-center">
            A call to repentance and faith in Jesus -
          </p>
          <blockquote className="text-lg text-center">
            “The time is fulfilled, and the kingdom of God is at hand; repent
            and believe in the gospel.” - Mark 1:15
          </blockquote>
        </span>
      </div>
      <div className="flex items-center justify-center max-w-2xl space-x-3">
        <Link
          href="/attend"
          className="text-2xl font-black underline text-black"
        >
          Register
        </Link>
      </div>
    </section>
  )
}
