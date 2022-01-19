import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";

const AddBooking = () => {
  return (
    <div style={{display:'contents'}} className="addBooking">
      <Header />
      <Form title="Reserve Booking Page" btnTxt="Send" />
      <Footer />
    </div>
  );
}

export default AddBooking;
