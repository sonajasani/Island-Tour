import React from 'react'
import {GrClose} from 'react-icons/gr';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooking } from '../../../store/bookings';
import {Modal} from '../../../context/Modal'
import comingSoon from '../../../images/comingSoon.jpg'

const BookingModal = ({ setModal, booking, resort }) => {
    const dispatch = useDispatch();
    const { start_date, end_date, id } = booking

    const [toggleDelete, setToggleDelete] = useState(false);
    const image = resort.images[0];
    const start = new Date(start_date)
    const startNew = start.getTime()
    const end = new Date(end_date)
    const endNew = end.getTime()
    const timeSpan = endNew - startNew;
    const numOfDays = timeSpan / (1000 * 60 * 60 * 24)

    const handleDelete = (e, bookingId) => {
        e.preventDefault()
        dispatch(deleteBooking(bookingId))
        setToggleDelete(false)
        setModal(false)
    }


    return (
        <div className="booking-modal">
            {/* <GrClose className="booking-cancel-icons" onClick={() => setModal(false)} /> */}
            <h2>{resort?.name}</h2>
            {resort?.images.length == 0 ?
					<img src={comingSoon} alt="" className="imagesResort-spare" ></img>
					:
                    <img className='booking-image' src={image?.url} alt="home" />
            }
            <h4>Your Reservation:</h4>
            <div className='booking-section'>
                <p>Check-in Date: {start_date.slice(0, 16)}</p>
                <p>Check-out Date:{end_date.slice(0, 16)}</p>
                <p>Location: {resort?.island}, {resort?.country}, {resort?.continent}</p>
                <p>Total: ${numOfDays * resort?.price}</p>
            </div>
            {/* <button className='booking-cancel-btn' onClick={(e) => deleteHandler(e, id)}>Cancel Reservation</button> */}
            <div className='reservation-delete-button'>
                <p className='booking-cancel-btn' onClick={() => setToggleDelete(true)}>Cancel Reservation</p>
            { toggleDelete && 
                <Modal onClose={() => setToggleDelete(false)}>
                <div className='delete-reservation-container'> 
                    <form className='delete-reservation-modal' onClick={(e) => handleDelete(e, id)} >
                        <h2 id='delete-confirmation'>Are you sure you want to Cancel this Reservation?</h2>
                        <button type='submit' className='delete-reservation-btn'>Delete</button>
                    </form>
                </div>
                </Modal>
            }
            </div>
        </div>
    )
}

export default BookingModal
