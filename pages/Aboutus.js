import React from 'react'




const Aboutus = () => {
  return (
   <>
   <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">About Us</h2>

        <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
                <div className="py-9">
                    <p className="text-xl font-semibold text-black">Car Parking</p>
                    <p className="mt-3 text-base text-gray-600">Availability: Parking information often includes the number of available parking spaces in a specific parking lot, garage, or area. This can help you determine if there are spaces available before you arrive</p>
                    <p className="mt-3 text-base text-gray-600">Location: Parking information includes the address or specific location where parking is available. It may also provide directions or landmarks to help you find the parking area easily.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">Regulations: </p>
                    <p className="mt-3 text-base text-gray-600">This refers to the rules and regulations governing parking in a specific area. It can include details about time limits, parking permits, handicapped parking spaces, loading zones, and any restrictions or prohibitions.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">Fees parking</p>
                    <p className="mt-3 text-base text-gray-600">Fees: Parking information may provide details about parking fees, such as hourly rates, daily rates, or monthly rates. It can also indicate if there are any discounts available or if parking is free during specific times or events.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">
                    Information about accepted payment methods for parking fees is often provided. It may include options like cash, credit/debit cards, mobile payment apps, or specific parking passes. <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

   </>
  )
}

export default Aboutus