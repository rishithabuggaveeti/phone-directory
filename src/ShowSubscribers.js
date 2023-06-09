import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";

class ShowSubscribers extends Component {
  
  render() {
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Shilpa Bhat",
    //     phone: "8888888888",
    //   },
    //   {
    //     id: 2,
    //     name: "Srishti",
    //     phone: "9999999999",
    //   },
    // ];
    

    

    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {this.props.subscribersList.map((sub) => {
            return (
              <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
