import React, { useState } from 'react'
import StepCard from './StepCard'

const FindSteps = () => {
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

    // State for the tabs and filters
    const [activeTab, setActiveTab] = useState('All steps');
    const [selectedImpacts, setSelectedImpacts] = useState(['Decent Impact']);
    const [selectedThemes, setSelectedThemes] = useState(['Community action', 'Greener finance']);

    // Pre-defined lists for filters
    const impactOptions = ['Small Impact', 'Good Impact', 'Decent Impact', 'Big Impact', 'Planet saver'];
    const themeOptions = [
        'Buy responsibly', 'Community action', 'Cut back on plastic', 'Eat sustainably',
        'Green travel', 'Greener finance', 'Grow your knowledge', 'Recycling', 'Reduce waste', 'Reuse'
    ];

    const toggleFilter = (filterType, filterValue) => {
        let newFilters;
        if (filterType === 'impact') {
            newFilters = selectedImpacts.includes(filterValue)
                ? selectedImpacts.filter(f => f !== filterValue)
                : [...selectedImpacts, filterValue];
            setSelectedImpacts(newFilters);
        } else {
            newFilters = selectedThemes.includes(filterValue)
                ? selectedThemes.filter(f => f !== filterValue)
                : [...selectedThemes, filterValue];
            setSelectedThemes(newFilters);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4  mb-16">
             <h1 className='text-4xl font-black bg-gradient-to-r text-center pt-16 from-[#81C82B] to-[#4595D1] mb-10 bg-clip-text text-transparent'>Recommended steps</h1>
            <div className="relative px-5">
                <div
                    ref={scrollRef}
                    className="flex gap-3 pb-4 pl-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                    style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <StepCard
                        title="Try a zero waste shop"
                        tags={[
                            { label: 'Good Impact', color: 'pink' },
                            { label: 'Cut Back On Plastic', color: 'gray' },
                        ]}
                        onHide={() => { }}
                        onTry={() => { }}
                        onLearn={() => { }}
                        onAlready={() => { }}
                    />
                    <StepCard
                        title="Complete the water saving checklist"
                        tags={[
                            { label: 'Good Impact', color: 'pink' },
                            { label: 'Reduce Waste', color: 'gray' },
                        ]}
                        onHide={() => { }}
                        onTry={() => { }}
                        onLearn={() => { }}
                        onAlready={() => { }}
                    />
                    <StepCard
                        title="Complete the water saving checklist"
                        tags={[
                            { label: 'Good Impact', color: 'pink' },
                            { label: 'Reduce Waste', color: 'gray' },
                        ]}
                        onHide={() => { }}
                        onTry={() => { }}
                        onLearn={() => { }}
                        onAlready={() => { }}
                    />
                    <StepCard
                        title="Complete the water saving checklist"
                        tags={[
                            { label: 'Good Impact', color: 'pink' },
                            { label: 'Save Water', color: 'gray' },
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
            <div className="w-full mt-24 text-center flex flex-col items-center font-dm-sans">
              <h1 className='text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] mb-10 bg-clip-text text-transparent'>Find Steps</h1>

                {/* Tab Navigation */}
                <div className="flex justify-center border-b border-gray-300 mb-8">
                    <button
                        className={`pb-2 px-6 transition-all duration-300 ease-in-out font-semibold font-dm-sans ${activeTab === 'All steps'
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#81C82B] to-[#4595D1] border-b-2 border-[#81C82B]'
                            : 'text-black'
                            }`}
                        onClick={() => setActiveTab('All steps')}>
                        All steps
                    </button>
                    <button
                        className={`pb-2 px-6 transition-all duration-300 ease-in-out font-semibold font-dm-sans ${activeTab === 'Steps completed'
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#81C82B] to-[#4595D1] border-b-2 border-[#81C82B]'
                            : 'text-black'
                            }`}
                        onClick={() => setActiveTab('Steps completed')}>
                        Steps completed
                    </button>
                    <button
                        className={`pb-2 px-6 transition-all duration-300 ease-in-out font-semibold font-dm-sans ${activeTab === 'Steps you already do'
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#81C82B] to-[#4595D1] border-b-2 border-[#81C82B]'
                            : 'text-black'
                            }`}
                        onClick={() => setActiveTab('Steps you already do')}>
                        Steps you already do
                    </button>
                </div>

                {/* Filters Section */}
                <div className="max-w-4xl flex flex-col justify-center items-center">
                    {/* Select an impact */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Select an impact</h3>
                    <div className="flex flex-wrap gap-2 items-center justify-center mb-8">
                        {impactOptions.map(impact => (
                            <button
                                key={impact}
                                onClick={() => toggleFilter('impact', impact)}
                                className={`flex items-center text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${selectedImpacts.includes(impact)
                                    ? 'bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white border-[#4595D1]'
                                    : 'bg-white text-black border-gray-300'}`}
                            >
                                {selectedImpacts.includes(impact) && <span className="mr-1">✓</span>}
                                {impact}
                            </button>
                        ))}
                    </div>

                    {/* Select a theme */}
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Select a theme</h3>
                    <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
                        {themeOptions.map(theme => (
                            <button
                                key={theme}
                                onClick={() => toggleFilter('theme', theme)}
                                className={`flex items-center text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${selectedThemes.includes(theme)
                                    ? 'bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white border-[#4595D1]'
                                    : 'bg-white text-black border-gray-300'}`}
                            >
                                {selectedThemes.includes(theme) && <span className="mr-1">✓</span>}
                                {theme}
                            </button>
                        ))}
                    </div>
                    <button className="bg-white border border-[#4595D1] text-[#4595D1] font-bold py-2 px-6 rounded-full">Show more themes</button>
                </div>

                {/* Grid of Steps */}
                <div className="mt-16 flex flex-row flex-wrap gap-4">
                    {/* Example cards to populate the grid */}
                    <StepCard
                        title="Change to plastic free periods"
                        tags={[
                            { label: 'Decent Impact' },
                            { label: 'Cut Back On Plastic' },
                        ]}
                        onHide={() => { }}
                        onTry={() => { }}
                        onLearn={() => { }}
                        onAlready={() => { }}
                    />
                    <StepCard
                        title="Check for greenwash when buying a product"
                        tags={[
                            { label: 'Decent Impact' },
                            { label: 'Grow Your Knowledge' },
                        ]}
                        onHide={() => { }}
                        onTry={() => { }}
                        onLearn={() => { }}
                        onAlready={() => { }}
                    />
                    <StepCard
                        title="Switch to a green energy supplier"
                        tags={[
                            { label: 'Big Impact' },
                            { label: 'Save Energy' },
                        ]}
                        onHide={() => { }}
                        onTry={() => { }}
                        onLearn={() => { }}
                        onAlready={() => { }}
                    />
                    <StepCard
                        title="Reduce food waste"
                        tags={[
                            { label: 'Good Impact' },
                            { label: 'Eat Sustainably' },
                        ]}
                        onHide={() => { }}
                        onTry={() => { }}
                        onLearn={() => { }}
                        onAlready={() => { }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FindSteps