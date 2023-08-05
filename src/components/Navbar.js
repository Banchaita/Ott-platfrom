import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const router = useRouter();
  const isIndexPage = router.pathname === "/"; // Check if the current page is the index page
  const isStoryTellerPage = router.pathname === "/StoryTeller"; // Check if the current page is the index page
  const isMusiconrPage = router.pathname === "/musicon"; // Check if the current page is the index page

  return (
    <nav>
      <div className="container flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-10">
          {/* Logo and Home link */}
          <Link href="/">
            <p className="h-auto w-[100px] text-4xl">WE</p>
          </Link>
          {!isStoryTellerPage || isIndexPage  &&  ( // Hide this UL on the index page
            <ul className="hidden space-x-4 md:flex">
              <Link href="/">
                <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
                  Home
                </li>
              </Link>
              <Link href="/StoryTeller">
                <li className="headerLink">Story Teller</li>
              </Link>
              <Link href="/musicon">
                <li className="headerLink">Musicon</li>
              </Link>
              <Link href="/LifeStyle">
                <li className="headerLink">Life Style</li>
              </Link>
              <Link href="/SoundTrack">
                <li className="headerLink">Sound Track</li>
              </Link>
            </ul>
          )}
          <ul className="hidden space-x-4 md:flex">
              {isStoryTellerPage && (
                <>
                  <Link href="/StoryTeller">
                    <li className="headerLink cursor-pointer font-semibold text-white hover:text-black">Home</li>
                  </Link>
                  <li className="headerLink">Best Movies</li>
                  <li className="headerLink">New & Popular</li>
                  <li className="headerLink">TV Shows</li>
                  <li className="headerLink">My List</li>
                </> 
              )}
          </ul>

          <ul className="hidden space-x-4 md:flex">
              {isMusiconrPage && (
                <>
                  <Link href="/StoryTeller">
                    <li className="headerLink cursor-pointer font-semibold text-white hover:text-black">Home</li>
                  </Link>
                  <li className="headerLink">Top Musicon </li>
                  <li className="headerLink">New & Popular</li>
                  <li className="headerLink">Best Musicon</li>
                  <li className="headerLink">My List</li>
                </> 
              )}
          </ul>
          
        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <BiSearch className="sm hidden h-6 w-6 sm:inline" />
          {!isIndexPage && <p className="hidden lg:inline">Kids</p>} {/* Show this only on other pages */}
          <BsBellFill className="h-6 w-6" />
          {isIndexPage && ( // Show this only on the index page
            <BiLogInCircle
              className="h-6 w-6 cursor-pointer rounded"
              onClick={() => signOut()}
            />
          )}
          {!isIndexPage && (
            <BiLogInCircle
              className="h-6 w-6 cursor-pointer rounded"
              onClick={() => signOut()}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
