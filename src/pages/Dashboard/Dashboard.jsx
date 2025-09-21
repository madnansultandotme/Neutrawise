import React from 'react'
import Home from './components/home'
import FindSteps from './components/findSteps';
import MySteps from './components/mySteps';
import Footprint from './components/footprint';


const Dashboard2 = () => {
  const [selectedTab, setSelectedTab] = React.useState('home');

  // Add a simple fade/scale animation to the selected tab
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-dmsans flex items-center flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 max-w-[1400px] py-4 bg-white shadow">
        <div className='flex flex-row justify-center w-[200px] items-center'>
            <img src="Icon1.png" className='pb-2' height={50} width={50} alt="Logo" />
            <div className='font-dmsans'>
              <h1 className='text-3xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1]  bg-clip-text text-transparent'>Neutrawise</h1>
            </div>
          </div>
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          {['home', 'find-steps', 'my-steps', 'footprint'].map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`relative transition-all duration-300 px-2
                ${selectedTab === tab
                  ? 'text-[#4595D1] scale-110 font-bold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-gradient-to-r after:from-[#81C82B] after:to-[#4595D1] after:rounded-full'
                  : 'text-gray-800 hover:text-[#4595D1] scale-100'
                }`}
              style={{ transition: 'color 0.3s, transform 0.3s' }}
            >
              {tab === 'home' && 'Home'}
              {tab === 'find-steps' && 'Find Steps'}
              {tab === 'my-steps' && 'My Steps'}
              {tab === 'footprint' && 'Footprint'}
            </button>
          ))}
        </nav>
        <div className="flex w-[200px] justify-end items-center gap-4 relative">
          <button className="text-[#4595D1] text-2xl" title="Help/Notifications">
            {/* Bell icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="ml-2" title="Profile">
            <img
              src="https://ui-avatars.com/api/?name=User&background=81C82B&color=fff&rounded=true"
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-[#4595D1] object-cover"
            />
          </button>
          <button
            className="text-gray-700 text-2xl"
            title="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span role="img" aria-label="menu">☰</span>
          </button>
          {/* Animated menu */}
          {menuOpen && (
            <div
              className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 animate-fade-in"
              style={{
                minWidth: 160,
                zIndex: 50,
                animation: 'fadeInScale 0.3s'
              }}
            >
              {['home', 'find-steps', 'my-steps', 'footprint'].map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setSelectedTab(tab);
                    setMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded transition-all duration-200 ${
                    selectedTab === tab
                      ? 'bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-bold'
                      : 'hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  {tab === 'home' && 'Home'}
                  {tab === 'find-steps' && 'Find Steps'}
                  {tab === 'my-steps' && 'My Steps'}
                  {tab === 'footprint' && 'Footprint'}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>
      <div className="flex-1">
        <div
          key={selectedTab}
          className="transition-all duration-500 ease-in-out animate-fade-in"
        >
          {selectedTab === 'home' && <Home />}
          {selectedTab === 'find-steps' && <FindSteps/>}
          {selectedTab === 'my-steps' && <MySteps />}
          {selectedTab === 'footprint' && <Footprint />}
        </div>
      </div>
      {/* Add fadeInScale animation */}
      <style>
        {`
          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.95);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-fade-in {
            animation: fadeInScale 0.3s;
          }
        `}
      </style>
    </div>
  )
}

export default Dashboard2