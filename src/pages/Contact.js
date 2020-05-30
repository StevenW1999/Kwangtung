import React, { Component } from "react";
import "../styling/contact.css";

class Contact extends Component {
  render() {
    return (
        <div className="contact-container">
          <div className="foto"></div>
            <div className="adres">
              <div id="contact" class="text-center">
                
                <div class="contact-item">
                  <h3>Reservations</h3>
                  <p>Please call</p>
                  <p>(887) 654-3210</p>

                  <div class="contact-item">
                    <h3>Address</h3>
                    <p>4321 California St,</p>
                    <p>San Francisco, CA 12345</p>
                  </div>
                 
                  <div class="contact-item">
                    <h3>Opening Hours</h3>
                    <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
                    <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
                  </div>
                  
              </div>
            </div>
          </div>
        </div>
    );
  }
}
 
export default Contact;