import { format } from 'date-fns';
import React from 'react';

const AvailabeAppointments = ({selectedDate}) => {
    return (
        <section className='mt-16'>
            <p className='text-center text-primary font-bold'>Availabe Appointments on {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailabeAppointments;