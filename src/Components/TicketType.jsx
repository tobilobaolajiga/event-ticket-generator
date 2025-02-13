export default function TicketType({
  type,
  amountLeft,
  price,
  ticketOption,
  handleTicketOption,
}) {
  return (
    <div
      className={`flex xs:mb-4 sm:mb-0 flex-col items-start rounded-2xl border border-[#197686]  p-4  justify-evenly cursor-pointer ${
        ticketOption === type ? 'bg-[#12464e]' : ''
      }`}
      onClick={() => {
        handleTicketOption(type);
      }}
    >
      <p className="rounded-md pr-2 font-roboto font-semibold text-[20px]">
        {price}
      </p>
      <p className="font-roboto text-[16px] text-[#fafafa]">{type}</p>
      <p className="font-roboto text-[14px] text-[#d9d9d9] ">{amountLeft}</p>
    </div>
  );
}
