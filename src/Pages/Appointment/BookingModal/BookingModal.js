import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking ={
      AppointmentDate: date,
      treatment: name,
      patient: slot,
      email,
      phone,
    }
    setTreatment(null);

    console.log(booking);

 
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-black">{name}</h3>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              className="input w-full input-bordered text-black "
            />
            <select name="slot" className="select select-bordered w-full text-black">
              <option  selected>
              </option>
             {
              slots.map((slot,i) => <option
               value={slot}
               key ={i}
               >{slot}</option>)
             }
            </select>
            <input
              type="text" name="name"
              placeholder="Your Name"
              className="input w-full input-bordered text-black"
            />
            <input
              type="email" name="email"
              placeholder="Email Address"
              className="input w-full input-bordered text-black "
            />
            <input
              type="text" name="phone"
              placeholder="Phone Number"
              className="input w-full  input-bordered text-black"
            />
            <input
              type="text" name="cell"
              placeholder="Cell-Phone"
              className="input w-full  input-bordered text-black"
            />
            <br />
            <input
              className=" btn btn-primary w-full "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
