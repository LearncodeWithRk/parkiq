import React from 'react'
import Image from 'next/image'

const City = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Parking by City</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">ParkIQ is making parking easier in over 3,000 locations across all major cities in Morocco.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                    <div className="flex items-center">
                        <Image className="flex-shrink-0 w-12 h-auto" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685267179/carparking%20website/parking_ixmb77.png" alt="" width={1920} height={1280}/>
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-black">Marrakech</p>
                            <p className="mt-px text-sm text-gray-600">Best Location</p>
                        </div>
                        <svg className="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 mt-7">Online Maps and Apps: Make use of popular online mapping services like Google Maps, Apple Maps, or dedicated parking apps like ParkWhiz, ParkIQ, or SpotHero. These platforms often provide information about nearby parking facilities, their locations, and sometimes even availability.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                    <div className="flex items-center">
                        <Image className="flex-shrink-0 w-12 h-auto" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685267179/carparking%20website/parking_ixmb77.png" alt="" width={1920} height={1280}/>
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-black">Casablanca</p>
                            <p className="mt-px text-sm text-gray-600">Best Location</p>
                        </div>
                        <svg className="block w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 mt-7">Local Authority Websites: Check the official website of your city or local municipality. They may have information on public parking lots, garages, or on-street parking locations in your area.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                    <div className="flex items-center">
                        <Image className="flex-shrink-0 w-12 h-auto" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685267179/carparking%20website/parking_ixmb77.png" alt="" width={1920} height={1280}/>
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-black">Rabat</p>
                            <p className="mt-px text-sm text-gray-600">Best Location</p>
                        </div>
                        <svg className="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 mt-7">Parking Guidance Systems: In some cities, there are parking guidance systems that provide real-time information about available parking spaces. Look for parking signs or electronic boards that display parking availability and directions.</p>
                </div>
            </div>

            </div>

           

           

    </div>
</section>

  )
}

export default City