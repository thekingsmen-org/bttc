import Link from 'next/link'

export default function TopNavigation() {
  return (
    <header className="w-full sticky top-0">
      <div className="navbar bg-primary">
        <div className="flex-none"></div>
        <div className="flex-1 space-x-4 items-center">
          <Link
            href="/"
            className="btn btn-ghost font-bold normal-case text-xl"
          >
            Work
          </Link>
          <Link href="/about" className="btn btn-ghost normal-case text-base">
            About
          </Link>
        </div>
        <div className="flex-none">
          <Link
            href="/join"
            className="text-lg underline px-2 font-bold tracking-widest"
          >
            Join
          </Link>
          {/* <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  )
}
