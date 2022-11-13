import React, { useState } from "react";
import chair from "../../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import backgroundimage from '../../../../assets/images/bg.png'


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
   
  return (
    <header

 className='mt-32'
                style={{
                    background:`url(${backgroundimage})`
                }}
                >
      <div className="hero my-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair} alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-black mr-6">
          <DayPicker 
           mode="single"
           selected={selectedDate}
           onSelect={setSelectedDate}
          
          />;

       
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
