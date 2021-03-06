import "./loginstyle.sass";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password2, setpassword2] = useState("");
  const [floatingClass, setFloatingClass] = useState(
    "FloatingComponentActive FloatingComponent"
  );
  let history = useNavigate();

  const addtolist = async (e) => {
    e.preventDefault();
    // url wehre the data should be post
    axios
      .post("/api/register/", {
        name: name,
        email: email,
        password: password,
        password2: password2,
      })
      .then((res) => {
        console.log("data send" + name);
        if (res.data.error !== "") {
          history("/signup");
          setMessage(res.data.error);
        } else {
          history("/");
        }
      });
  };

  const loginPostdata = async (e) => {
    e.preventDefault();
    const url = "/api/login/";
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("Data sent");
        if (res.data.error !== "") {
          setMessage(res.data.error);
        } else {
          history.push("/");
        }
      });
  };
  const responsesuccessGoogle = async (res) => {
    const api = await fetch("/Dashboard", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        tokenId: res.tokenId,
      }),
    });
    history("/");

    axios({
      method: "POST",
      url: "http://localhost:5000/googlelogin",
      data: { tokenId: res.tokenId },
    }).then((res) => {
      const token = res.data;
      console.log(res.data);

      localStorage.setItem("jwt", token);

      history("/");
    });
  };
  const responsefailureGoogle = (res) => {
    console.log(res);
  };
  const responseFacebook = (res) => {};

  return (
    // <div className={divname}>
    //   <div className="login">
    //     <div className="registered">
    //       <div className="text">
    //         <h1>Log-IN</h1>
    //       </div>
    //       <div className="inputboxwithlabel">
    //         {/* <p>Username: </p> */}
    //     <input
    //       type="textbox"
    //       placeholder="Username"
    //       onChange={(event) => {
    //         setusername(event.target.value);
    //       }}
    //     />
    //   </div>
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     onChange={(event) => {
    //       setpassword(event.target.value);
    //     }}
    //   />
    //   <p className="forgot">
    //     If you have forgotten your password,
    //     <Link className="link" to="/forget">
    //       click here!
    //     </Link>{" "}
    //   </p>
    //   <p style={{ color: "red" }}> {message} </p>
    //   {/* <Link to="/"> */}
    //   <button className="sumbit" onClick={loginPostdata}>
    //     Login
    //   </button>
    //       {/* </Link> */}
    //     </div>

    //     {/* <div className="new">
    //   <div className="text">
    //     <h1>Signup </h1>
    //     <h1>into</h1>
    //     <h1>Digi-Papyrus</h1>
    //     <p>Think Opening Imagination as you turn the pages of book !</p>
    //   </div>

    //       <button onClick={Pressed}>Register now</button>
    //     </div> */}
    //   </div>

    //   <div className="signup">
    //     {/* <div className="registeredCustomer">
    //   <div className="text">
    //     <h1>LOGIN </h1>
    //     <h1>Into</h1>
    //     <h1>Digi-Papyrus</h1>
    //     <p>Think Opening Imagination as you turn the pages of book !</p>
    //   </div>

    //       <button onClick={Pressed}>Login Now</button>
    //     </div> */}

    //     <div className="newCustomer">
    //       <div className="text">
    //         <h1>New Customer</h1>
    //       </div>

    //   <input
    //     type="textbox"
    //     placeholder="Name"
    //     onChange={(event) => {
    //       setname(event.target.value);
    //     }}
    //     required
    //   />
    //   <input
    //     type="email"
    //     placeholder="Email Address"
    //     onChange={(event) => {
    //       setemail(event.target.value);
    //     }}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     onChange={(event) => {
    //       setpassword(event.target.value);
    //     }}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="Confirm Password"
    //     onChange={(event) => {
    //       setpassword2(event.target.value);
    //     }}
    //   />
    //   <p style={{ color: "red" }}> {message} </p>

    //   <button onClick={addtolist} className="sumbit">
    //     Continue
    //   </button>
    //     </div>
    //   </div>
    // </div>

    <div className="LoginPage">
      <div className="Components">
        <div className="Login">
          <h1>Login</h1>
          <input
            type="textbox"
            placeholder="Username"
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />
          <p className="forgot">
            If you have forgotten your password,
            <Link className="link" to="/forget">
              click here!
            </Link>{" "}
          </p>
          <p style={{ color: "red" }}> {message} </p>
          {/* <Link to="/"> */}
          <button className="sumbit" onClick={loginPostdata}>
            Login
          </button>
          <br />
          <div>
            {" "}
            <GoogleLogin
              clientId="602782645460-9d9ognvavgj0vi6ivk92na43ch14mjof.apps.googleusercontent.com"
              buttonText="Login With Google"
              onSuccess={responsesuccessGoogle}
              onFailure={responsefailureGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div>
            <FacebookLogin
              appId="284465773762397"
              autoLoad={false}
              callback={responseFacebook}
            />
          </div>
        </div>
        <div className="Register">
          <h1>Signup</h1>
          <input
            type="textbox"
            placeholder="Name"
            onChange={(event) => {
              setname(event.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            onChange={(event) => {
              setemail(event.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => {
              setpassword2(event.target.value);
            }}
          />
          <p style={{ color: "red" }}> {message} </p>

          <button onClick={addtolist} className="sumbit">
            Continue
          </button>
        </div>
        <div
          className={floatingClass}
          onClick={() => {
            if (floatingClass === "FloatingComponent") {
              setFloatingClass("FloatingComponentActive FloatingComponent");
            } else {
              setFloatingClass("FloatingComponent");
            }
          }}
        >
          {floatingClass === "FloatingComponent" ? (
            <div>
              <h1>LOGIN </h1>
              <h1>Into</h1>
              <h1>Digi-Papyrus</h1>
              <p>Think Opening Imagination as you turn the pages of book !</p>
              <button>Login now</button>
            </div>
          ) : (
            <div>
              <h1>Signup </h1>
              <h1>into</h1>
              <h1>Digi-Papyrus</h1>
              <p>Think Opening Imagination as you turn the pages of book !</p>
              <button>Register now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
