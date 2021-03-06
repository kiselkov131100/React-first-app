import React, { FC, useEffect, useState } from "react";
import "./FormLogin.css";
import Input from "../Input";
import Button from "../Button";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/ThemeModeContext'

type FormLoginProps = {
  onClickConfirm: () => void;
};

const FormLogin: FC<FormLoginProps> = ({ onClickConfirm }) => {

  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailErr, setEmailErr] = useState("This field must not be empty");
  const [passwordErr, setPasswordErr] = useState("This field must not be empty");

  const [formValid, setFormValid] = useState(false);

useEffect(() =>{
  if(emailErr || passwordErr){
    setFormValid(false)
  } else{
    setFormValid(true)
  }

}, [emailErr, passwordErr])


  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErr("Email is not correct");
    } else {
      setEmailErr("");
    }
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 15) {
      setPasswordErr("Password must contain at least 8 symbols and no more than 15 symbols");
      if(!e.target.value){
        setPasswordErr("This field must not be empty");
      }
    } else {
      setPasswordErr("");
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <form className="loginForm">
      <div className="input">
        {emailDirty && emailErr && (
          <div style={{ color: "red" }}>{emailErr}</div>
        )}
        <span>Email</span>
        <Input
          value={email}
          onBlur={(e: any) => blurHandler(e)}
          onChange={(e: any) => emailHandler(e)}
          type="email"
          name="email"
        />
      </div>
      <div className="input">
        {passwordDirty && passwordErr && (
          <div style={{ color: "red" }}>{passwordErr}</div>
        )}
        <span>Password</span>
        <Input
          value={password}
          onBlur={(e: any) => blurHandler(e)}
          onChange={(e: any) => passwordHandler(e)}
          type="password"
          name="password"
        />
      </div>

      <Button  disabled={!formValid} 
      className={classnames(!isLightTheme ? 'buttonDark': 'button')} 
      btnContent="Login" onClick={onClickConfirm} />

      <div className="resetLogin">
        <span>Forgot your password?</span>
        <Button
          className={"btnReset"}
          btnContent={"Reset password"}
          onClick={() => {}}
        />
      </div>
    </form>
  );
};

export default FormLogin