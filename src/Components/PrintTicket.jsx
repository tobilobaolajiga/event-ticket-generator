import DomToImage from 'dom-to-image';
import TicketTemplate from './TicketTemplate';
import { ClipLoader } from 'react-spinners';
import { useRef, useState } from 'react';

export default function PrintTicket({ showTicketSelect }) {
  const [loading, setLoading] = useState(false);
  const ticketRef = useRef();
  const downloadTicket = async () => {
    setLoading(true);
    if (ticketRef.current) {
      const heading = ticketRef.current.querySelector('#heading');
      const location = ticketRef.current.querySelector('#location');
      const calendar = ticketRef.current.querySelector('#calendar');
      const pin = ticketRef.current.querySelector('#pin');
      const date = ticketRef.current.querySelector('#date');

      heading.style.fontSize = '20px';
      heading.style.textAlign = 'center';
      heading.style.fontWeight = 'bold';
      heading.style.width = '200px';
      heading.style.marginBottom = '2px';
      location.style.textAlign = 'center';
      location.style.width = '200px';
      date.style.width = '200px';
      date.style.textAlign = 'center';
      pin.style.display = 'none';
      calendar.style.display = 'none';

      document.fonts.ready.then(() => {
        DomToImage.toPng(ticketRef.current)
          .then((dataUrl) => {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'ticket.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            heading.style.fontSize = '34px';
            heading.style.fontWeight = '';
            heading.style.width = '';
            heading.style.marginBottom = '';
            location.style.textAlign = '';
            location.style.width = '';
            pin.style.display = '';
            calendar.style.display = '';
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error capturing ticket:', error);
          });
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center xs:w-[300px] sm:w-[600px] ">
      <div className="my-8 text-center">
        <p className="xs:text-[24px] sm:text-[32px] font-alatsi">
          Your Ticket is booked!
        </p>
        <p className="font-roboto text-[16px] mt-2">
          Check your email for a copy or you can{' '}
          <span className="font-bold">download</span>
        </p>
      </div>

      <TicketTemplate ticketRef={ticketRef} />

      <div className="flex items-center justify-between mt-8 px-[4px] w-full sm:-mr-6 xs:flex xs:flex-col-reverse sm:flex sm:flex-row xs:gap-4 sm:gap-0">
        <button
          className="py-2 px-6 border border-[#24a0b5] text-[#24a0b5] xs:w-[100%] sm:w-[48%] rounded-lg  cursor-pointer outline-none"
          onClick={showTicketSelect}
        >
          Book Another Ticket
        </button>
        <button
          className="py-2 px-6 text-white bg-[#24a0b5] rounded-lg xs:w-[100%] sm:w-[48%] cursor-pointer outline-none"
          onClick={downloadTicket}
        >
          {loading ? (
            <>
              <ClipLoader color="#fff" size={12} className="mr-2" />{' '}
              Downloading...
            </>
          ) : (
            'Download Ticket'
          )}
        </button>
      </div>
    </div>
  );
}
