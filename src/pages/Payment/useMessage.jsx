
const useMessage = (info, reserveDays) => {
    const emailBody = `
    Dear Mr. Xxxx,
    Greetings from Ours Travels.
     
    Thank you for choosing to stay with us. We are pleased to confirm the reservation for ${info.userName}.
    ${info.roomPrice * reserveDays}$The details of the booking confirmation are attached along with this Invoice.
    
    Please let us know how we could assist on the above matters. Thank you.

    Your Invoice: 
    
    Best Regards,

    Ours Travels
    Executive, Reservation
    Mobile: +880 1581868984 | E-mail: ourtravels@gmail.com
    Tour and Travel 
    Gulshan, House 19, Road 17, Dhaka 1212, Bangladesh`


    return emailBody
};

export default useMessage;