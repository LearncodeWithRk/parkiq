import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-orange-300 2xl:py-24 2xl:bg-white">
    <div className="px-4 mx-auto overflow-hidden bg-orange-300 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Parking. Pay. Go.</h2>
                    <p className="mt-4 text-base text-black-50">When you are on the go, the free ParkIQ app makes it easy to find and pay for parking without running back to feed the meter. And for added convenience, you can reserve spots ahead of time.</p>

                    <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                        <Link href="#" title="" className="flex" role="button">
                            <Image className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" width={1920} height={1280}/>
                        </Link>

                        <Link href="#" title="" className="flex" role="button">
                            <Image className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" width={1920} height={1280}/>
                        </Link>
                    </div>
                </div>

                <div className="relative px-12">
                    <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-500 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    <Image className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685263412/carparking%20website/carparking_aldjsi.png" alt="" width={1920} height={1280}/>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Hero