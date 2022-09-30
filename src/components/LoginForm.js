import React, {useState} from "react";
import logo from "../images/logo2.png";
import "../App.css";
/*import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";*/
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button"
import Icons from "@mui/material/Icon"

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="logo"><img src={logo} alt=""/></div>
        {(error !== "")?(<div className="error">{error}</div>): ""}
        <div className="form-group">
          <InputLabel htmlFor="name" id="name">Name:</InputLabel>
          <Input type="text" name="name" id="name" onChange={e=> setDetails({details, name: e.target.value})} value={details.name} />
        </div>
        <div className="form-group">
          <InputLabel htmlFor="email" id="email">Email:</InputLabel>
          <Input type="email" name="email" id="email" onChange={e=> setDetails({details, email: e.target.value})} value={details.email} />
        </div>
        <div className="form-group">
          <InputLabel htmlFor="password" id="password">Password:</InputLabel>
          <Input type="password" name="password" id="password" onChange={e=> setDetails({details, password: e.target.value})} value={details.password} />
        </div>
        <Button type="submit" value="Login" variant="contained">Login</Button>
      </div>
    </form>
  );
}

export default LoginForm;
