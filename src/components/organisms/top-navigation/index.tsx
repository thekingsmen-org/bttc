import Link from 'next/link'

export default function TopNavigation() {
  return (
    <header className="w-full absolute top-0">
      <div className="navbar bg-primary">
        <div className="flex-none"></div>
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Work
          </Link>
        </div>
        <div className="flex-none">
          <Link
            href="/join"
            className="text-lg underline px-2 font-bold tracking-widest"
          >
            Join
          </Link>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
