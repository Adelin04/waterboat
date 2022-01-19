import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../src/pages/Homepage";
import BookingList from "../src/pages/BookingList";
import AddBooking from "../src/pages/AddBooking";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/Bookinglist">
            <BookingList />
          </Route>

          <Route path="/Addbooking">
            <AddBooking />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
