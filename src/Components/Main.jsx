import React from 'react';
import Header from './Header';
import TicketSelection from './TicketSelection';
import AttendeeDetails from './AttendeeDetails';

export default function Main({
  ticketSelect,
  attendeeDetails,
  showAttendeeDetails,
  showTicket,
  ticketOption,
  setTicketOption,
  handleTicketOption,
  setTicketNo,
  goBack,
  ticketNo,
}) {
  return (
    <div>
      {ticketSelect && (
        <div className=" h-fit border border-[#0e464f] rounded-3xl p-8 mx-6 sm:mx-0 bg-[#08252b] max-w-[335px] sm:max-w-[700px] mb-8">
          <Header title="Ticket Selection" step="1" />

          <TicketSelection
            showAttendeeDetails={showAttendeeDetails}
            ticketOption={ticketOption}
            handleTicketOption={handleTicketOption}
            setTicketOption={setTicketOption}
            setTicketNo={setTicketNo}
            ticketNo={ticketNo}
          />
        </div>
      )}
      {attendeeDetails && (
        <AttendeeDetails
          attendeeDetails={attendeeDetails}
          showTicket={showTicket}
          goBack={goBack}
        />
      )}
    </div>
  );
}
