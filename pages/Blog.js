import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Parking areas may have specific operating hours</p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
                <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <Link href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Image className="object-cover w-full h-full" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685273055/carparking%20website/parkingas_yc6f77.jpg" alt="" width={1920} height={1280}/>
                        </Link>

                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                        </div>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2023 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <Link href="#" title="" className="text-black"> How to Create Account Car Parking. </Link>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Availability: Parking information often includes the number of available parking spaces in a specific parking lot, garage, or area. This can help you determine if there are spaces available before you arrive.</p>
                    <Link href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <Link href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Image className="object-cover w-full h-full" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685273055/carparking%20website/parkingas_yc6f77.jpg" alt="" width={1920} height={1280}/>
                        </Link>

                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Marketing </span>
                        </div>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> April 04, 2023 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <Link href="#" title="" className="text-black"> How to set google map. </Link>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Location: Parking information includes the address or specific location where parking is available. It may also provide directions or landmarks to help you find the parking area easily.</p>
                    <Link href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <Link href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Image className="object-cover w-full h-full" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685273055/carparking%20website/parkingas_yc6f77.jpg" alt="" width={1920} height={1280}/>
                        </Link>

                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Productivity </span>
                        </div>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> jan 12, 2023 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <Link href="#" title="" className="text-black"> Payment methods: </Link>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Payment methods: Information about accepted payment methods for parking fees is often provided. It may include options like cash, credit/debit cards, mobile payment apps, or specific parking passes..</p>
                    <Link href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>

  )
}

export default Blog