import React from "react";
import "./FormRegistration.css";
import Input from "../Input";
import Button from "../Button";

const FormRegistration = () => {
  return (
    <form>
      <div className="formInput">
      <span>User name</span>
      <Input type="text"/>
    </div>
    <div className="formInput">
      <span>Email</span>
      <Input type="email"/>
    </div>
    <div className="formInput">
      <span>Password</span>
      <Input type="password"/>
    </div>
    <div className="formInput">
      <span>Confirm password</span>
      <Input type="password"/>
    </div>
    <Button className="button" btnContent="Login" />
    </form>
  )
};

export default FormRegistration