import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Modal } from "../../../context/Modal";

import BookingModal from "./BookingModal";
import './BookingCard.css'
import comingSoon from '../../../images/comingSoon.jpg'


function BookingCard({ booking }) {
  const [modal, setModal] = useState(false)

  const { resort_id, end_date, start_date } = booking;
  const resort = useSelector(state => state.resort.bookings ? state.resort : state.resort[resort_id])


  const { name, island, country, host } = resort;

  // useEffect(()=>{
  //   let modalDiv= document.body.getElementsByClassName("booking-modal")[0]
  //   if(modalDiv){

  //     modalDiv.style.overflowY = modal ? "scroll" : "hidden";
  //   }


  // }, [modal])
  return (
    <>
      <div className="booking-card" onClick={() => setModal(true)}>
        {resort.images.length == 0 ?
        <img src={comingSoon} alt="" className="imagesResort-spare" ></img>
        :
        <img src={resort.images[0].url} alt="booking card"></img>
        }
        <div className="booking-card-info">
          <p className="title">{name}</p>
          <p className="bold">Resort Owner: {host.first_name ? `${host.first_name} ${host.last_name}` : host.username} </p>
          <p>Email: {resort.host.email}</p>
          <br></br>
          <p>Location: {island}, {country}</p>
          <p>From: {start_date.slice(0, 16)} {end_date.slice(0, 16)}</p>
          <p>To: {end_date.slice(0, 16)}</p>
        </div>
      </div>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <BookingModal setModal={setModal}  booking={booking} resort={resort}/>
        </Modal>
      )}
    </>


  )
}

export default BookingCard;
