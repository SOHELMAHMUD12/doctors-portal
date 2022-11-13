import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOptions';

const AvailabeAppointments = ({selectedDate}) => {
    const [AppointmentOptions, setAppointmentOption] = useState([])

    useEffect (() =>{
        fetch('AppointmentOption.json')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-primary font-bold'>Availabe Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    AppointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    AppointmentOption={option}
                    
                    ></AppointmentOption>)
                }
            </div>
            <BookingModal></BookingModal>
        </section>
    );
};

export default AvailabeAppointments;