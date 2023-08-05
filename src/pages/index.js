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
          <div className="grid grid-cols-2 gap-4">
            {/* Grid Div 1 */}
            <div className="storyteller p-4">
              <Link href="/StoryTeller">
                <p className="footer-text">Story Teller</p>
              </Link>
              
            </div>
            {/* Grid Div 2 */}
            <div className="musicon p-4">
              <Link href="/musicon">
                <p className="footer-text">Musicon</p>
              </Link>
            </div>
            {/* Grid Div 3 */}
            <div className="lifestyle p-4">
              <p className="footer-text-second"> Life Style</p>
            </div>
            {/* Grid Div 4 */}
            <div className="soundtrack p-4">
              <p className="footer-text-second"> Sound Track</p>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}

export default Home