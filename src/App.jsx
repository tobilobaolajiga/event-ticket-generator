import Nav from './Components/Nav';
import Main from './Components/Main';
import { useState } from 'react';
import Ticket from './Components/Ticket';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [ticketSelect, setTicketSelect] = useState(true);
  const [attendeeDetails, setAttendeeDetails] = useState(false);
  const [ticket, setTicket] = useState(false);

  const [ticketOption, setTicketOption] = useState(
    localStorage.getItem('ticketType') || ''
  );
  const [ticketNo, setTicketNo] = useState(
    localStorage.getItem('ticketNo') || '1'
  );

  const showTicket = () => {
    setAttendeeDetails(false);
    setTicket(true);
  };
  const handleTicketOption = (option) => {
    setTicketOption(option);
  };

  const showTicketSelect = () => {
    setTicketSelect(true);
    setAttendeeDetails(false);
    setTicket(false);
    localStorage.clear();
    setTicketOption('');
    setTicketNo('1');
  };

  const goBack = () => {
    setAttendeeDetails(false);
    setTicketSelect(true);
  };

  const showAttendeeDetails = () => {
    if (ticketOption && ticketNo) {
      setTicketSelect(false);
      setAttendeeDetails(true);
      localStorage.setItem('ticketType', ticketOption);
      localStorage.setItem('ticketNo', ticketNo);
      console.log(ticketSelect);
      console.log(attendeeDetails);
    }
    if (!ticketOption) {
      toast.error('Select ticket type', {
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 3000,
        role: 'alert',
      });
    }
  };

  return (
    <div
      className="flex flex-col items-center bg-[#02191D] w-full h-full text-white"
      style={{
        backgroundImage:
          'radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)',
      }}
    >
      <ToastContainer
        aria-label="assertive"
        role="alert"
        closeOnClick
        pauseOnHover
      />
      <Nav />
      <Main
        ticketSelect={ticketSelect}
        attendeeDetails={attendeeDetails}
        showAttendeeDetails={showAttendeeDetails}
        showTicket={showTicket}
        ticketOption={ticketOption}
        handleTicketOption={handleTicketOption}
        setTicketOption={setTicketOption}
        setTicketNo={setTicketNo}
        goBack={goBack}
        ticketNo={ticketNo}
      />
      {ticket && <Ticket ticket={ticket} showTicketSelect={showTicketSelect} />}
    </div>
  );
}

export default App;
