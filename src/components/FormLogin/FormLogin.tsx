import React from "react";
import "./FormLogin.css";
import Input from "../Input";
import Button from "../Button";

const FormLogin = () => {
  return (
    <form>
    <div className="formInput">
      <span>Email</span>
      <Input type="email"/>
    </div>
    <div className="formInput">
      <span>Password</span>
      <Input type="password"/>
    </div>
    <Button className="button" btnContent="Login" />
    </form>
  )
};

export default FormLogin