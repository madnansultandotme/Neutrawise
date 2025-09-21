import React from 'react'

const StepCard = ({
  tags = [],
  title,
  onHide,
  onTry,
  onLearn,
  onAlready,
}) => (
  <div className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col h-[200px] w-[360px]">
    <div className="flex flex-row justify-between items-center mb-3">
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`whitespace-nowrap bg-gradient-to-r from-[#81C82B]/10 to-[#4595D1]/10 text-gray-800 text-xs px-2 py-1 rounded-full font-semibold`}
          >
            {tag.label}
          </span>
        ))}
        
      </div>
      <div>
        <button
          className="whitespace-nowrap text-gray-400 text-xs underline"
          onClick={onHide}
        >
          Hide step
        </button>
      </div>

    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4 text-wrap flex justify-start items-start text-left">{title}</h3>
    <div className="flex gap-1 mt-auto">
      <button
        className="whitespace-nowrap bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-bold py-2 px-3 rounded-lg text-xs"
        onClick={onTry}
      >
        Try this step
      </button>
      <button
        className="whitespace-nowrap border border-[#4595D1] text-[#4595D1] font-bold py-2 px-3 rounded-lg text-xs bg-white"
        onClick={onLearn}
      >
        Learn more
      </button>
      <button
        className="whitespace-nowrap border border-gray-300 text-gray-700 font-bold py-2 px-3 rounded-lg text-xs bg-white"
        onClick={onAlready}
      >
        Already do this
      </button>
    </div>
  </div>
)

export default StepCard