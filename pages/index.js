import Image from 'next/image'
import { Inter } from 'next/font/google'

import Hero from '@/components/Hero'


import About from '@/components/About'
import Teatimonial from '@/components/Teatimonial'
import City from '@/components/City'
import Video from '@/components/Video'
import CarInfo from '@/components/CarInfo'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   
   <Hero />
   <CarInfo />
   <Video />
   <City />
<About />
<Teatimonial />

   </>
  )
}
