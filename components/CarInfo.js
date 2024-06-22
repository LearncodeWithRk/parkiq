import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CarInfo = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">The Smarter Way to Park</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">ParkIQ puts the power to park in your hands. Whether you are looking for a spot now or reserving a spot for later, ParkIQ has you covered.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
            <div className="overflow-hidden bg-white rounded-md">
                <div className="px-5 py-6">
                    <div className="flex items-center justify-between">
                        <Image className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685266002/carparking%20website/avatar1_hvtgxi.png" alt="" width={1920} height={1280} />
                        <div className="min-w-0 ml-3 mr-auto">
                            <p className="text-base font-semibold text-black truncate">Enter Your</p>
                            <p className="text-sm text-gray-600 truncate">Zone Number</p>
                        </div>
                        <Link href="#" title="" className="inline-block text-sky-500">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                               
                            </svg>
                        </Link>
                    </div>
                    <blockquote className="mt-5">
                        <p className="text-base text-gray-800">
                            You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            <span className="block text-sky-500">#Time Zone</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
                <div className="px-5 py-6">
                    <div className="flex items-center justify-between">
                        <Image className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685266002/carparking%20website/avatar2_o1y23y.png" alt="" width={1920} height={1280}/>
                        <div className="min-w-0 ml-3 mr-auto">
                            <p className="text-base font-semibold text-black truncate">Set Your Time</p>
                            <p className="text-sm text-gray-600 truncate">Slot Book With Time</p>
                        </div>
                        <Link href="#" title="" className="inline-block text-sky-500">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                               
                            </svg>
                        </Link>
                    </div>
                    <blockquote className="mt-5">
                        <p className="text-base text-gray-800">
                        Parking apps or websites: Many parking facilities and services offer online platforms or mobile apps that allow you to book and pay for parking slots in advance. Heres a general process to follow:
                            <span className="block text-sky-500">#Slot booking</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
                <div className="px-5 py-6">
                    <div className="flex items-center justify-between">
                        <Image className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685266002/carparking%20website/avatar3_fjtz4d.png" alt="" width={1920} height={1280}/>
                        <div className="min-w-0 ml-3 mr-auto">
                            <p className="text-base font-semibold text-black truncate">Select Your</p>
                            <p className="text-sm text-gray-600 truncate">Vehicle</p>
                        </div>
                        <Link href="#" title="" className="inline-block text-sky-500">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              
                            </svg>
                        </Link>
                    </div>
                    <blockquote className="mt-5">
                        <p className="text-base text-gray-800">
                        Create an account if required and provide the necessary information, such as your vehicle details and payment method.
                            <span className="block text-sky-500">#vehicle</span>
                        </p>
                    </blockquote>
                </div>
            </div>

           

            

            <div className="overflow-hidden bg-white rounded-md">
                <div className="px-5 py-6">
                    <div className="flex items-center justify-between">
                        <Image className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685266002/carparking%20website/avatar4_bul83l.png" alt="" width={1920} height={1280}/>
                        <div className="min-w-0 ml-3 mr-auto">
                            <p className="text-base font-semibold text-black truncate">Pay & Go</p>
                            <p className="text-sm text-gray-600 truncate">Parking</p>
                        </div>
                        <Link href="#" title="" className="inline-block text-sky-500">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              
                            </svg>
                        </Link>
                    </div>
                    <blockquote className="mt-5">
                        <p className="text-base text-gray-800">
                        Complete the payment process and receive confirmation of your booking, which may include a digital ticket or a QR code.
                            <span className="block text-sky-500">#Payment</span>
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default CarInfo