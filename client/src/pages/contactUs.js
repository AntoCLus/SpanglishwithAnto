import React, { useEffect, useState } from 'react';
import "./contactUs.css"
import "../components/footer.css"


function ContactForm() {


  return (
    <div className="formContainer">
      <div className="form1">
        <h1 className="my-3 text-3xl font-semibold text-gray-100">
          Contact Us
        </h1>
        <p>Fill up the form below to send us a message.</p>
    </div>
    
      <div className="inputDiv">
        <form
          action="https://api.web3forms.com/submit"
          method="POST">
        
          <input
                type="hidden"
                name="access_key"
                value="8080de1d-6812-4b24-a711-a96ac94a028b"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
             

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="phone"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1 (555) 1234-567"
                  required
                  className="phone"
                />
              </div>
          <div className="mb-6">
          <div class="mb-6">
            <label for="message" class="message1"></label>
            <textarea rows="8" name="message" id="message" placeholder="Your Message" class="message :outline-none" required></textarea>
          </div>
            <button
              type="submit"
              className="addProductBtn"
            >
              Send Message
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result"></p>
        </form>
      </div>
    </div>
  );
}



export default ContactForm;