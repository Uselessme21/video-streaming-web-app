import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

function Navbar() {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link
      href="/"
      className='flex items-center gap-1'>
        <Image
        src="/icons/logo.svg"
        width={32}
        height={32}
        alt='Mr_zooom logo'
        className='max-5 m:size-10'
        />
        <p className="font-extrabold text-white max-sm:hidden text-[26px]">Mr zooom</p>
        <div className="flex-between gap-5">
          <MobileNav/>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar