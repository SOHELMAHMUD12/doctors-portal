import React from "react";

const AppointmentOptions = ({ AppointmentOption }) => {
  const { name, slots } = AppointmentOption;
  return (
    <div className="card  shadow-xl ">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
        <p className="text-black">{ slots.length > 0? slots[0]:"Try Another Day"}</p>
        <p className="text-black">{slots.length } { slots.length > 1 ? 'Spaces': 'space'} Availabe </p>
        <div className="card-actions justify-center">
          

          <label htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>

        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
