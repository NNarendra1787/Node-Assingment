import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://node-assign4-data.onrender.com/Client/signup",
        { name, email, phone, pass }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <section id="midpart">
        <h3>Ragistration Hear First.</h3>
        <form >

          <label className="inp">
            Name:
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              value={name}
              autoComplete="off"
              onChange={(e) => {
                setName(e.target.value);
              }}
              />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              value={email}
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              />
          </label>
          <label>
            Contact No:
            <input
              type="number"
              name="Call"
              placeholder="Enter Your Phone Number"
              value={phone}
              autoComplete="off"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={pass}
              autoComplete="off"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              />
          </label>
        
        </form>

        <button id="submit" onClick={submit}>
          Submit
        </button>

        <p
          onClick={() => {
            navigate("/login");
          }}
          className="shift"
        >
          If you already ragister goto login page
        </p>
      </section>
    </div>
  );
}

export default Signup;
