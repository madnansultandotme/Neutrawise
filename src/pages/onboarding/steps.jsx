import React from 'react'

const Steps = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#81C82B] rounded-full opacity-20 -translate-x-24 -translate-y-24"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#4595D1] rounded-full opacity-20 translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4595D1] rounded-full opacity-20 -translate-x-36 translate-y-36"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#81C82B]  rounded-full opacity-20 translate-x-36"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className='flex flex-row justify-center items-center mb-10'>
            <img src="Icon1.png" height={80} width={80} alt="Logo" />
            <div className='font-dmsans'>
              <h1 className='text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mb-4">Find your first step</h2>
          <p className="text-black mb-8 max-w-2xl mx-auto">
            Steps in Giki Zero help you develop greener habits, find lots of ways to cut carbon and discover new things to try.
          </p>
          <h3 className="text-xl font-bold text-black mb-8">
            Why not try one of our most popular steps to get started
          </h3>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <span className="inline-block bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white text-xs px-3 py-1 rounded-full mb-4">Good Impact</span>
            <h4 className="font-bold text-black text-lg mb-3">Always use the dishwasher eco settings</h4>
            <p className="text-black text-sm mb-6">Save energy and water with every wash cycle by switching to eco mode.</p>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Try this step</button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors">Read more</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <span className="inline-block bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white text-xs px-3 py-1 rounded-full mb-4">Save Water</span>
            <h4 className="font-bold text-black text-lg mb-3">Take shorter showers</h4>
            <p className="text-black text-sm mb-6">Reduce your water usage and energy consumption with quicker showers.</p>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Try this step</button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors">Read more</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <span className="inline-block bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white text-xs px-3 py-1 rounded-full mb-4">Good Impact</span>
            <h4 className="font-bold text-black text-lg mb-3">Avoid giving unwanted presents</h4>
            <p className="text-black text-sm mb-6">Reduce waste by choosing thoughtful gifts that recipients will actually use.</p>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Try this step</button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors">Read more</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <span className="inline-block bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white text-xs px-3 py-1 rounded-full mb-4">Save Energy</span>
            <h4 className="font-bold text-black text-lg mb-3">Complete the work from home checklist</h4>
            <p className="text-black text-sm mb-6">Optimize your home office setup to reduce energy consumption while working.</p>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Try this step</button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors">Read more</button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <p className="text-black mb-6 max-w-xl mx-auto">
            Not for you? We've got loads more so you can find the one you're most motivated to do.
          </p>
          <button className="bg-gradient-to-r from-[#81C82B] to-[#4595D1] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium mb-4 transition-opacity">
            See more suggestions
          </button>
          <div>
            <a href="/dashboard2" className="text-gray-500 text-sm underline">Not right now, continue</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps