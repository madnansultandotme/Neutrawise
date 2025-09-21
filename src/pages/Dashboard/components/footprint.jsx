import React from 'react'
import StepCard from './StepCard';
import { useState } from 'react';

const FootprintCard = ({ category, status, title, description, onUpdate }) => (
    <div className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col h-[200px] w-[360px]">
        <div className="flex flex-row justify-between items-center mb-3">
            <span className="whitespace-nowrap bg-gradient-to-r from-[#81C82B]/10 to-[#4595D1]/10 text-gray-800 text-xs px-2 py-1 rounded-full font-semibold">
                {category}
            </span>
            <span className="text-gray-400 text-xs">{status}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-wrap flex justify-start items-start text-left">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 text-left">{description}</p>
        <div className="flex gap-1 mt-auto">
            <button
                className="whitespace-nowrap bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-bold py-2 px-4 rounded-lg text-xs"
                onClick={onUpdate}
            >
                Update
            </button>
        </div>
    </div>
);

const Footprint = () => {
    // State for the tabs and filters
    const [activeTab, setActiveTab] = useState('All steps');
    const [selectedStatus, setSelectedStatus] = useState(['Decent Impact']);
    const [selectedCategory, setSelectedCategory] = useState(['Community action', 'Greener finance']);

    // Pre-defined lists for filters
    const statusOptions = ['Need Information', 'Requires Updating','Recently Updated' , 'Doesn\'t Apply'];
    const categoryOptions = [
        'Home','Food','Purchases','Services','Transport','Trees'
    ];

    const toggleFilter = (filterType, filterValue) => {
        let newFilters;
        if (filterType === 'status') {
            newFilters = selectedStatus.includes(filterValue)
                ? selectedStatus.filter(f => f !== filterValue)
                : [...selectedStatus, filterValue];
            setSelectedStatus(newFilters);
        } else {
            newFilters = selectedCategory.includes(filterValue)
                ? selectedCategory.filter(f => f !== filterValue)
                : [...selectedCategory, filterValue];
            setSelectedCategory(newFilters);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 mt-10 mb-16">
            <div className="w-full mt-24 text-center flex flex-col items-center font-dm-sans">
                <h1 className='text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] mb-10 bg-clip-text text-transparent'>Footprint</h1>

                {/* Tab Navigation */}
                <div className="flex justify-center border-b border-gray-300 mb-8">
                    <button
                        className={`pb-2 px-24 transition-all duration-300 ease-in-out font-semibold font-dm-sans ${activeTab === 'All steps'
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#81C82B] to-[#4595D1] border-b-2 border-[#81C82B]'
                            : 'text-black'
                            }`}
                        onClick={() => setActiveTab('All steps')}>
                        Data
                    </button>
                    <button
                        className={`pb-2 px-24 transition-all duration-300 ease-in-out font-semibold font-dm-sans ${activeTab === 'Steps completed'
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#81C82B] to-[#4595D1] border-b-2 border-[#81C82B]'
                            : 'text-black'
                            }`}
                        onClick={() => setActiveTab('Steps completed')}>
                        Insights
                    </button>
                </div>
                <div className="mb-10 max-w-xl text-center">
                    <p className="text-2xl font-semibold text-gray-800">
                        Your current carbon footprint is <span className="font-bold text-[#4595D1]">7,124kg</span>.
                    </p>
                </div>

                {/* Filters Section */}
                <div className="max-w-4xl flex flex-col justify-center items-center">
                    {/* Select a status */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Select by Status</h3>
                    <div className="flex flex-wrap gap-2 items-center justify-center mb-8">
                        {statusOptions.map(status => (
                            <button
                                key={status}
                                onClick={() => toggleFilter('status', status)}
                                className={`flex items-center text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${selectedStatus.includes(status)
                                    ? 'bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white border-[#4595D1]'
                                    : 'bg-white text-black border-gray-300'}`}
                            >
                                {selectedStatus.includes(status) && <span className="mr-1">✓</span>}
                                {status}
                            </button>
                        ))}
                    </div>

                    {/* Select a category */}
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Select a Category</h3>
                    <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
                        {categoryOptions.map(category => (
                            <button
                                key={category}
                                onClick={() => toggleFilter('category', category)}
                                className={`flex items-center text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${selectedCategory.includes(category)
                                    ? 'bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white border-[#4595D1]'
                                    : 'bg-white text-black border-gray-300'}`}
                            >
                                {selectedCategory.includes(category) && <span className="mr-1">✓</span>}
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FootprintCard
                        category="Services"
                        status="Doesn't apply to me"
                        title="Accommodation"
                        description="You have not yet provided any data on this topic"
                    />
                    <FootprintCard
                        category="Transport"
                        status="Doesn't apply to me"
                        title="Bus"
                        description="You have not yet provided any data on this topic"
                    />
                </div>
            </div>
        </div>
    )
}

export default Footprint
