import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOptions';

const AvailabeAppointments = ({selectedDate}) => {
    const [AppointmentOptions, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect (() =>{
        fetch('AppointmentOption.json')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    AppointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    AppointmentOption={option}
                    setTreatment={setTreatment}
                    
                    ></AppointmentOption>)
                }
            </div>
            {  treatment &&
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailabeAppointments;