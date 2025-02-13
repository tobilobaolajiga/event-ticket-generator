export default function TicketTemplate({ ticketRef }) {
  const photo = localStorage.getItem('photo');
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const ticketType = localStorage.getItem('ticketType');
  const ticketNo = localStorage.getItem('ticketNo');
  const request = localStorage.getItem('request');

  return (
    <div ref={ticketRef}>
      <div className="my-4 relative">
        <img src="src\assets\ticket.svg" alt="" />

        <div className="border-[#24a0b5] border bg-[#031e21]/10 rounded-2xl flex flex-col items-center justify-center absolute top-0 mt-6 mb-4 mx-4 py-4">
          <h2 className="font-road text-[34px] -mb-2" id="heading">
            Techember Fest '25{' '}
          </h2>
          <p className="font-roboto text-[10px] leading-6" id="location">
            <i className="ri-map-pin-line mr-[3px]" id="pin"></i>
            11 Oxford Avenue, Lekki, Lagos
          </p>
          <p className="font-roboto text-[10px]" id="date">
            <i className="ri-calendar-line mr-[4px]" id="calendar"></i>March 15,
            2025 <span className="mx-2">|</span>7:00 PM
          </p>

          <img
            src={photo}
            alt=""
            className="rounded-xl my-4 border border-[#24a0b5]/50 w-[120px] h-[120px] "
          />

          <div className="rounded-xl bg-[#08343c] border-[#133d44] flex flex-col  px-2 mx-2 mt-2">
            <div className="grid grid-cols-2 border-b border-[#12464e] ">
              <p className="text-[10px] border-r  border-[#12464e] py-2 leading-4 w-[118px] overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="font-roboto  opacity-[33%] ">Name</span> <br />{' '}
                <span className="font-roboto font-bold text-[12px] ">
                  {name}
                </span>
              </p>

              <p className="text-[10px] py-2 leading-4 overflow-hidden text-ellipsis whitespace-nowrap pl-2 w-[118px]">
                <span className="font-roboto  opacity-[33%] ">Email</span>{' '}
                <br />{' '}
                <span className="font-roboto font-bold text-[12px] ">
                  {email}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 border-b border-[#12464e] mt-0">
              <p className="text-[10px] border-r  border-[#12464e] py-2 leading-4 w-[118px]">
                <span className="font-roboto  opacity-[33%] text-[10px]">
                  {' '}
                  Ticket Type
                </span>
                <br />{' '}
                <span className="font-roboto font-bold ">{ticketType}</span>
              </p>
              <p className="text-[10px] py-2 leading-4 pl-2 w-[118px]">
                <span className="font-roboto  opacity-[33%] text-[10px]">
                  Ticket for:
                </span>{' '}
                <br />{' '}
                <span className="font-roboto font-bold ">{ticketNo}</span>
              </p>
            </div>
            <div>
              <p className="font-roboto  opacity-[33%] text-[10px] py-2">
                Special request?
              </p>
              <p className="font-roboto text-[10px] pb-4">{request}</p>
            </div>
          </div>
        </div>
        <img
          src="src\assets\barcode.svg"
          className="absolute bottom-[24px] left-8 "
        />
      </div>
    </div>
  );
}
