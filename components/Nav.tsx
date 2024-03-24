"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedin = true;
  const [Providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setProviders()
  }, [])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image alt='promptopia-logo' src='/assets/images/logo.svg' width={30} height={30} className='object-contain' />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/*Desktop Navigation*/}
      <div className='sm:flex hidden'>
        {isUserLoggedin ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>
              Make Post
            </Link>
            <button type="button" onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href="/profile">
              <Image src="/assets/images/logo.svg" className='rounded-full' width={40} height={40} alt="profile" ></Image>
            </Link>
          </div>
        ) : (<>
          {Providers && Object.values(Providers).map((provider: any) => (
            <button type="button" key={provider.name} onClick = {signIn(provider.id)} className='black_btn'>
              SIGN IN
            </button>
          ))}
        </>)}
      </div>

      {/*Mobile Navigation*/}
      <div className="sm:hidden flex relative">
        {isUserLoggedin ? (
          <div className="flex">
            <Image alt='promptopia-logo' src='/assets/images/logo.svg' width={37} height={37} className='rounded-full' onClick={() => setToggleDropDown((prev) => !prev)} />
            {toggleDropDown && (
              <div className="dropdown">
                <Link href="/profile" className='dropdown_link' onClick={() => setToggleDropDown(false)}>
                  My profile
                </Link>
                <Link href="/create-prompt" className='dropdown_link' onClick={() => setToggleDropDown(false)}>
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false)
                    signOut()
                  }}
                  className = "mt-5 w-full black_btn"
                  >
                    sign out
                  </button>
              </div>
            )}
          </div>
        ) : (<>
          {Providers && Object.values(Providers).map((provider: any) => (
            <button type="button" key={provider.name} className = "mt-5 w-full bg-black-400">
              SIGN IN
            </button>
          ))}
        </>)}
      </div>
    </nav>
  )
}

export default Nav