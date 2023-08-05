import Head from 'next/head'
import React from 'react'
import { getSession, useSession } from "next-auth/react";
import Login from "@/components/Login";
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Home = () => {

  const { data: session } = useSession()
  if (!session) return <Login />

  return (
    <>
      <Head>
        <title>Webntertenmaint</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="flex justify-center items-center mt-14 mb-7">
          <p className="uppercase text-2xl">Choose your entertainment</p>
        </div>
        <div className="flex justify-center items-center">
          {/* Grid Div 1 */}
          <div className="grid grid-cols-2 gap-4">
            <Link href="/StoryTeller">
              <div className="storyteller p-4">
                <p className="footer-text">Story Teller</p>
              </div>
            </Link>

            {/* Grid Div 2 */}
            <Link href="/Musicon">
              <div className="musicon p-4">
                <p className="footer-text">Musicon</p>
              </div>
            </Link>
           
            {/* Grid Div 3 */}
            <Link href="/LifeStyle">
              <div className="lifestyle p-4">
                <p className="footer-text"> Life Style</p>
              </div>
            </Link>
            {/* Grid Div 4 */}

            <Link href="/SoundTrack">
              <div className="soundtrack p-4">
                <p className="footer-text"> Sound Track</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>

  )
}

export default Home