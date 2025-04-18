import TicketType from './TicketType';

export default function TicketSelection({
  showAttendeeDetails,
  ticketOption,
  setTicketOption,
  handleTicketOption,
  ticketNo,
  setTicketNo,
}) {
  return (
    <div>
      <div className="sm:border sm:border-[#0e464f] rounded-2xl my-8 min-w-[300px] sm:w-[650px] -ml-4 sm:-ml-2 bg-[#08252b] sm:px-6">
        <div
          className="flex items-center flex-col justify-center gap-2 border-2 border-[#07373F] py-4 rounded-2xl my-4 backdrop-blur-[7px] min-w-[280px] shadow-2xl "
          style={{
            background:
              'radial-gradient(57.42% 106.59% at 14.02% 32.06%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), rgba(10, 12, 17, 0.10)',
          }}
        >
          <h2 className="text-[54px] sm:text-[62px] font-road -mb-2">
            Techember Fest '25
          </h2>
          <p className="font-roboto text-[14px] sm:text-[16px] text-center mx-4 w-[200px] sm:w-[350px]">
            Join us for an unforgettable experience at Techember! Secure your
            spot now.
          </p>
          <div className="font-roboto text-[16px] flex-col flex items-center justify-center sm:flex sm:flex-row mt-4 sm:mt-0 font-light">
            <p>📍Oniru, Lekki</p>
            <div className="flex">
              <p className="mx-[6px] hidden sm:block">||</p>
              <p>March 15, 2025</p>
              <p className="mx-[6px]"> |</p>
              <p>7:00PM</p>
            </div>
          </div>
        </div>
        <hr className="border border-[#07373F] my-8" />

        <p className="font-roboto text-[16px] mb-2">Select Ticket Type:</p>

        <div className="sm:grid sm:grid-cols-3  border items-center justify-evenly border-[#07373F] bg-[#052228] rounded-2xl p-4 gap-4 mb-6  ">
          <TicketType
            type="REGULAR ACCESS"
            amountLeft="20/52"
            price="Free"
            ticketOption={ticketOption}
            handleTicketOption={handleTicketOption}
          />
          <TicketType
            type="VIP ACCESS"
            amountLeft="20/52"
            price="$50"
            ticketOption={ticketOption}
            handleTicketOption={handleTicketOption}
          />
          <TicketType
            type="VVIP ACCESS"
            amountLeft="20/52"
            price="$150"
            ticketOption={ticketOption}
            handleTicketOption={handleTicketOption}
          />
        </div>

        <p className="font-roboto text-[16px] mb-2">Number of Tickets</p>
        <select
          className="border w-full rounded-md py-2 border-[#07373F]  mb-6 px-2 box-border text-white  outline-none bg-[#08252b]  "
          value={ticketNo}
          onChange={(e) => setTicketNo(e.target.value)}
        >
          <option value="1" className="hover:bg-[#12464e]">
            1
          </option>
          <option value="2" className="hover:bg-[#12464e]">
            2
          </option>
          <option value="3" className="hover:bg-[#12464e]">
            3
          </option>
          <option value="4" className="hover:bg-[#12464e]">
            4
          </option>
          <option value="5" className="hover:bg-[#12464e]">
            5
          </option>
        </select>

        <div className=" flex flex-col-reverse sm:flex sm:flex-row items-center justify-between mb-8 mt-6 w-full gap-4">
          <button
            className="py-2 px-6 border border-[#24a0b5] text-[#24a0b5] rounded-lg xs:w-[100%] sm:w-[48%]  cursor-pointer outline-none hover:bg-[#24a0b5] hover:text-white"
            onClick={() => {
              setTicketOption(null);
            }}
          >
            Cancel
          </button>
          <button
            className="py-2 px-6  bg-[#24a0b5] rounded-lg w-[100%] sm:w-[48%] cursor-pointer text-white outline-none hover:bg-[#24a0b5] hover:text-white focus:bg-[#24a0b5] focus:text-white "
            onClick={showAttendeeDetails}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
