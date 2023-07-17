import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  console.log(typeof email);

    async function submit(e) {
      e.preventDefault();

      try{
        const response = await axios.post("https://node-assign4-data.onrender.com/Client/login", {
          email, pass
        })
        const data = response.data;
        localStorage.setItem('token',data.token);
      }
      catch(err){
        console.log(err);
      }
    }

  
  return (
    <div>
      <section id="midparts">
        <h3>Login Page!</h3>
        <form action="">
          <label>
            
            Email:
            <input type="email"  placeholder="Enter your Email" autoComplete="off" onChange={(e)=>{
              setEmail(e.target.value)
            }} />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter password" autoComplete="off" onChange={(e)=>{
              setPass(e.target.value)
            }} />
          </label>
          <button id="submit" onClick={submit}>Submit</button>
        </form>

        <p
          onClick={() => {
            navi("/signup");
          }}
          className="shift"
        >
          Goto Ragistration Page
        </p>
      </section>
    </div>
  );
}

export default Login;
