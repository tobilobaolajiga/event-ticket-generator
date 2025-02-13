import React from 'react';
import logo from '../assets/logo.svg';
import arrow from '../assets/right-arrow.svg';
export default function Nav() {
  return (
    <div className="min-w-[340px] sm:min-w-[90%] flex justify-between items-center border border-[#197686] rounded-2xl mt-6 mb-8 p-2 backdrop-blur-[2px]">
      <img src={logo} alt="Logo" />

      <div className=" sm:items-center sm:gap-6 sm:text-[#B3B3B3] sm:text-[18px] sm:font-jeju hidden sm:flex">
        <p>Events</p>
        <p>My Tickets</p>
        <p>About Project</p>
      </div>

      <div className="flex gap-[5px] items-center bg-white text-[#0A0C11] py-2 px-3 rounded-md text-[16px] font-jeju">
        MY TICKETS <img src={arrow} />
      </div>
    </div>
  );
}
