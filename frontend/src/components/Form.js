import React from "react";

//Style
import "./Form.css";

//Component
import { HEROKU } from "../components/Dependency";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: null,
      email: null,
      phone: null,
      date_from: null,
      date_to: null,
      msgSucces: "Thank you for your submission !",
    };
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    if (name === "name") {
      this.setState({
        name: value,
      });
    } else if (name === "email") {
      this.setState({
        email: value,
      });
    } else if (name === "phone") {
      this.setState({
        phone: value,
      });
    } else if (name === "date_from") {
      this.setState({
        date_from: value,
      });
    } else if (name === "date_to") {
      this.setState({
        date_to: value,
      });
    }
  }

  handleClick(event) {
    event.preventDefault();
    let title = document.querySelector(".form");

    let dataUser = new URLSearchParams();
    dataUser.append("name", this.state.name);
    dataUser.append("email", this.state.email);
    dataUser.append("phone", this.state.phone);
    dataUser.append("date_from", this.state.date_from);
    dataUser.append("date_to", this.state.date_to);

    fetch(`${HEROKU}/saveBooking`, {
      method: "POST",
      body: dataUser,
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.succes) {
          title.innerHTML = this.state.msgSucces;
          title.setAttribute(
            "style",
            "text-align:center;margin:auto;color:black;font-weight: bold;"
          );
          // console.log(this.state);
        }
      })
      .catch((error) => {
        title.innerHTML = error;
        title.setAttribute(
          "style",
          "text-align:center;margin:auto;color:red;font-weight: bold;"
        );
      });
  }

  render() {
    return (
      <div>
        <p className="title">{this.props.title}</p>
        <form className="form" action="" method="POST">
          <div className="form-user-name">
            <label>Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              autoFocus={true}
              placeholder="Jhon Doe"
            />
          </div>

          <div className="form-user-name">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Jhon.Doe@email"
            />
          </div>

          <div className="form-user-phone">
            <label>Phone Number</label>
            <input
              onChange={this.handleChange}
              type="number"
              name="phone"
              placeholder="0000 111 222"
            />
          </div>

          <div className="form-user-date">
            <label>Date from</label>
            <input onChange={this.handleChange} type="date" name="date_from" />
          </div>

          <div className="form-user-time">
            <label>Date to</label>
            <input onChange={this.handleChange} type="date" name="date_to" />
          </div>

          <div className="form-btn">
            <button onClick={this.handleClick}>{this.props.btnTxt}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
