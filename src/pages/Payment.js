import React, { useState } from "react";
import styled from "styled-components";

// import "./Payment.css";

const Wrapper = styled.section`
  padding: 1rem 5rem;
  text-align: center;

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    border-radius: 2rem;
    height: 70rem;
    margin: 1rem 2rem;
    background-color: rgb(234, 205, 230);
    /* width: 41rem; */
  }
  .perfect-card-with-you {
    text-align: left;
    float: right;
    width: 80%;
    padding: 1%;
    margin: 100px;
  }
  .p {
    word-spacing: 5px;
  }
  .btn {
    border-radius: 2rem;
    border: 0.1rem solid rgb(170 170 170 / 40%);
    background-color: red;
    color: white;
    width: 10rem;
    height: 4rem;
  }

  .form {
    margin: 10rem 0rem;
  }
  .btn1 {
    border-radius: 2rem;
    border: 0.1rem solid rgb(170 170 170 / 40%);
    background-color: red;
    color: white;
    width: 10rem;
    height: 4rem;
    margin: 0rem 20rem;
  }
  .input {
    border-radius: 5rem;
    width:30rem;
    margin: 0px 80px;
  }
  .div {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    border-radius: 2rem;
    margin: 2rem 2rem;
    background-color: rgb(255, 255, 255);

  }

  .container {
    margin-top: 6rem;

    .register-form {
      max-width: 50rem;
      margin: auto;

      .register-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Payment = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postRegister = async (event) => {
    event.preventDefault();
    const { email, password, name } = user;

    const res = await fetch("http://localhost:8888/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Profile");
      console.log("Invalid Profile");
    } else {
      window.alert("Profile Successful");
      console.log(" Successful");
    }
  };

  return (
    <Wrapper className="section">
      <div className="container grid grid-two-column">
      <div className="paymet">
        <div className="card">
          <form className="form">
            <div className="div">
              <h2 className="common-heading">Register!</h2>
              <div className="container">
                <div className="register-form">
                  <form method="POST" className="register-inputs">
                    <input
                      className="input"
                      type="text"
                      placeholder="Name"
                      name="name"
                      required
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                    />
                    <br></br>
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      required
                      value={user.email}
                      onChange={handleInputs}
                    />
                    <br></br>
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                      required
                      value={user.password}
                      onChange={handleInputs}
                    />
                    <br></br>
                    <button
                      type="submit"
                      value="Submit"
                      onClick={postRegister}
                      className="btn1"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </form>
        </div>
        </div>

        <div className="perfect-card-with-you">
          <h2>Perfect Card With You</h2>
          <p>
            with our card,you can top up your account anywhere, anytime. It's
            convenint and esay to use.Plus,there are no credit checks required.
            So if you're looking for a simple, convenient way to pay for your
            everyday expenses, playment planet card is the way to go{" "}
          </p>
          <button type="submit" value="Submit" className="btn">
            sign up
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Payment;
