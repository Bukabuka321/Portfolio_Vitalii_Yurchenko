/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/api/messages", {
        firstname,
        lastname,
        number,
        email,
        message,
      })
      .then((response) => response.data)
      .then(() => {
        setSubmitted(true);
      });
  };
  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <div className="w-screen h-screen">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Your first name"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your lastname"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="number"
              placeholder="Phone number"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Your message"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="mb-3 pt-0">
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
