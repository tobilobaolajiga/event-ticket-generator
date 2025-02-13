import React from 'react';

export default function Nav() {
  return (
    <div className="xs:min-w-[335px] md:w-[80%] w-full flex justify-between items-center border border-[#197686] rounded-2xl mt-6 mb-8 p-2 backdrop-blur-[2px]">
      <img src="src\assets\logo.svg" alt="" />

      <div className="flex items-center gap-6 text-[#B3B3B3] text-[18px] font-jeju xs:hidden sm:flex">
        <p>Events</p>
        <p>My Tickets</p>
        <p>About Project</p>
      </div>

      <div className="flex gap-[5px] items-center bg-white text-[#0A0C11] py-2 px-3 rounded-md text-[16px] font-jeju">
        MY TICKETS <img src="src\assets\right-arrow.svg" />
      </div>
    </div>
  );
}
