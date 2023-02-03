/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/Border.module.css";
import Link from "next/link";

const Contact = () => {
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

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
        setTimeout(() => {
          router.push(`/`);
        }, 3000);
      });
  };

  if (submitted) {
    return (
      <div className="h-screen w-sreen flex flex-col justify-center items-center gap-y-5">
        <div className="text-6xl">Thank you!</div>
        <div className="text-3xl">We'll be in touch soon.</div>
        <div className="text-2xl">
          You will be redirect to main page in 3 seconds
        </div>
        <button className="text-2xl w-3/6 py-5 bg-[#0083FF] rounded-xl">
          <Link href={"/"}>To main page</Link>
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <div className={styles.inputContainer}>
        <h1 className="text-4xl font-semibold text-[#0083FF] my-10">
          Contact me!
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start px-5 lg:ml-0 lg:items-center gap-y-8"
        >
          <div className="w-3/6 flex justify-start">
            <h2 className="text-2xl font-semibold text-[#0083FF] mb-2 text-left">
              Your name:
            </h2>
          </div>
          <div className="w-5/6 lg:w-3/6 mb-3 pt-0 flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:gap-x-28">
            <input
              type="text"
              placeholder="Firstname"
              className="text-xl w-full lg:w-52 h-14 lg:h-11 bg-inputBorder border border-[#0083FF] rounded-xl px-1"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              className="text-xl w-full lg:w-52 h-14 lg:h-11 bg-inputBorder border border-[#0083FF] rounded-xl px-1"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="w-3/6 flex justify-start">
            <h2 className="text-2xl font-semibold text-[#0083FF] mb-2 text-left">
              Your email:
            </h2>
          </div>
          <div className="w-5/6 lg:w-3/6 mb-3 pt-0">
            <input
              type="email"
              placeholder="Email"
              className="text-xl w-full h-14 lg:h-11 bg-inputBorder border border-[#0083FF] rounded-xl px-1"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-3/6 flex justify-start">
            <h2 className="text-2xl font-semibold text-[#0083FF] mb-2 text-left">
              Your phone number:
            </h2>
          </div>
          <div className="w-5/6 lg:w-3/6 mb-3 pt-0">
            <input
              type="text"
              placeholder="Phone number"
              value={number}
              className="text-xl w-full h-14 lg:h-11 bg-inputBorder border border-[#0083FF] rounded-xl px-1"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="w-3/6 flex justify-start">
            <h2 className="text-2xl font-semibold text-[#0083FF] mb-2 text-left">
              Your message:
            </h2>
          </div>
          <div className="w-5/6 lg:w-3/6 mb-3 pt-0">
            <textarea
              className="text-xl w-full h-24 bg-inputBorder border border-[#0083FF] rounded-xl px-1 py-2"
              placeholder="Your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="w-5/6 lg:w-2/6 mb-10 pt-0 self-center">
            <button
              className="text-xl w-full py-5 bg-[#0083FF] rounded-xl"
              type="submit"
            >
              <p className="text-2xl"> Send a message</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
