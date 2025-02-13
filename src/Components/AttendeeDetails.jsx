import Form from './Form';
import Header from './Header';
import Ticket from './Ticket';

export default function AttendeeDetails({
  attendeeDetails,
  showTicket,
  goBack,
}) {
  return (
    <div>
      {attendeeDetails && (
        <div className=" h-full border border-[#0e464f] bg-[#041e23] min-w-[335px] sm:max-w-[700px] rounded-3xl p-8 mb-8">
          <Header title="Attendee Details" step="2" />
          <Form showTicket={showTicket} goBack={goBack} />
        </div>
      )}
    </div>
  );
}
