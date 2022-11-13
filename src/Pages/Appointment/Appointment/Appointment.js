import React, { useState } from 'react';
import AvailabeAppointments from '../AvailabeAppointments/AvailabeAppointments';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailabeAppointments
            selectedDate={selectedDate}></AvailabeAppointments>
        </div>
    );
};

export default Appointment;