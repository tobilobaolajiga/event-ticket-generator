import Header from './Header';
import PrintTicket from './PrintTicket';

export default function Ticket({ ticket, showTicketSelect }) {
  return (
    <div>
      {ticket && (
        <div className="h-full border border-[#0e464f] rounded-3xl sm:p-8 py-4 min-w-[335px] sm:w-[700px]  mb-8 bg-[#041E23] px-4">
          <Header title="Ready" step="3" />
          <PrintTicket showTicketSelect={showTicketSelect} />
        </div>
      )}
    </div>
  );
}
