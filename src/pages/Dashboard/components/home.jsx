import React from 'react'
import StepCard from './StepCard'

const Home = () => {
    // Ref for the horizontal scroll container
  const scrollRef = React.useRef(null);

  // Scroll handler functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  return (
    <>
    
      <div className="w-full flex flex-col items-center mt-10 px-4">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">What next?</h1>
        <div className="bg-gradient-to-r from-[#81C82B]/10 to-[#4595D1]/10 rounded-2xl p-6 max-w-xl w-full mb-6 shadow">
          <p className="text-lg md:text-xl text-gray-800 font-medium text-center">
            Find a new step – Find a step to help the planet. There’s something for every lifestyle and budget.
          </p>
        </div>
        <button className="whitespace-nowrap bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white px-8 py-4 rounded-full text-lg font-bold shadow hover:from-[#81C82B]/90 hover:to-[#4595D1]/90 transition-all duration-300 mb-10">
          Find a step
        </button>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended steps</h2>
        <div className="relative px-5">
          <div
            ref={scrollRef}
            className="flex gap-3 pb-4 pl-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <StepCard
              title="Try a zero waste shop"
              tags={[
                { label: 'Good Impact' },
                { label: 'Cut Back On Plastic' },
              ]}
              onHide={() => { }}
              onTry={() => { }}
              onLearn={() => { }}
              onAlready={() => { }}
            />
            <StepCard
              title="Complete the water saving checklist"
              tags={[
                { label: 'Good Impact' },
                { label: 'Reduce Waste' },
              ]}
              onHide={() => { }}
              onTry={() => { }}
              onLearn={() => { }}
              onAlready={() => { }}
            />
            <StepCard
              title="Complete the water saving checklist"
              tags={[
                { label: 'Good Impact' },
                { label: 'Reduce Waste' },
              ]}
              onHide={() => { }}
              onTry={() => { }}
              onLearn={() => { }}
              onAlready={() => { }}
            />
            <StepCard
              title="Complete the water saving checklist"
              tags={[
                { label: 'Good Impact' },
                { label: 'Save Water' },
              ]}
              onHide={() => { }}
              onTry={() => { }}
              onLearn={() => { }}
              onAlready={() => { }}
            />
          </div>
          {/* Carousel Arrows */}
          <div className="flex justify-center gap-6 mt-4">
            <button
              className="whitespace-nowrap text-2xl text-gray-400 hover:text-[#4595D1]"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <span>&lt;</span>
            </button>
            <button
              className="whitespace-nowrap text-2xl text-gray-400 hover:text-[#4595D1]"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mb-16 px-4">
        <button className="whitespace-nowrap bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white px-8 py-4 rounded-full text-lg font-bold shadow hover:from-[#81C82B]/90 hover:to-[#4595D1]/90 transition-all duration-300 mb-6">
          Find steps
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your footprint</h2>
        <div className="text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent mb-2">7,124</div>
        <div className="text-lg text-gray-700 mb-4">kg of carbon emissions.</div>
        <button className="whitespace-nowrap bg-white border border-[#4595D1] text-[#4595D1] font-bold px-8 py-3 rounded-full shadow hover:bg-[#4595D1]/10 transition-all duration-300">
          Update footprint
        </button>
      </div>
      </>
  )
}

export default Home