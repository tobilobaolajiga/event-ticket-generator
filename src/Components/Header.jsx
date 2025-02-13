export default function Header({ title, step }) {
  return (
    <div>
      <div className="sm:flex justify-between items-center w-full flex-wrap">
        <p className="font-jeju text-[24px] sm:text-[32px]">{title}</p>
        <p className="font-roboto text-[16px] ">Step {step} of 3</p>
      </div>
      <div className="flex my-4">
        <div
          className={`w-[35%] h-[4px] rounded-l-full ${
            step >= 1 ? 'bg-[#24A0B5]' : 'bg-[#0E464F]'
          }`}
        ></div>
        <div
          className={`w-[35%] h-[4px] rounded-full ${
            step >= 2 ? 'bg-[#24A0B5]' : 'bg-[#0E464F]'
          }`}
        ></div>
        <div
          className={`w-[30%] h-[4px] rounded-r-full ${
            step == 3 ? 'bg-[#24A0B5]' : 'bg-[#0E464F]'
          }`}
        ></div>
      </div>
    </div>
  );
}
