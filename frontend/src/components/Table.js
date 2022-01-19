import React from "react";

//Style
import "./Table.css";

//Components
import { HEROKU } from "../components/Dependency";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    fetch(`${HEROKU}/getBooking`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data.Users,
          isLoading: true,
        });
      })
      .catch((err) => {
        this.setState({
          message: err,
        });
        document.querySelector(".loading").innerHTML = `${err}`;
        //console.log(err);
      });
  }

  render() {
    //let dataUser = {};
    let TableLine = "";
    let Table = [];

    const { users, isLoading } = this.state;

    users.forEach((user, index) => {
      /*       dataUser = {
        user_name: user.user_name,
        date_from: user.booking_date,
        data_to: user.booking_time,
        user_phone: user.user_phone,
      }; */
      //console.log(dataUser);
      //console.log(users);
      TableLine = (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.user_name}</td>
          <td>{user.booking_date}</td>
          <td>{user.booking_time}</td>
          <td>{user.user_email}</td>
          <td>{user.user_phone}</td>
        </tr>
      );
      Table.push(TableLine);
    });
    if (isLoading !== true) {
      return (
        <div>
          <p className="loading">Loading...</p>
        </div>
      );
    } else {
      return (
        <div className="body-booking-list">
          <p className="title-list">Booking item list</p>
          <table className="table">
            <tbody>
              <tr>
                <th>Nr</th>
                <th>Name</th>
                <th>Date from</th>
                <th>Date to</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              {Table}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Table;
