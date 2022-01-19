import React from "react";

//Style
import "./BookingList.css";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";

function BookingList() {
  return (
    <div className="bookingList">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default BookingList;
