import React, { useState } from "react";
import classnames from "classnames";
import Button from "../../components/Button";
import FormLogin from "../../components/FormLogin";
import FormRegistration from "../../components/FormRegistration";
import HeaderAuth from "../../components/HeaderAuthorization";
import Confirmation from "../Confirmation";
import HeaderAuthorization from "../../components/HeaderAuthorization";
import {Theme, useThemeContext} from './../../context/ThemeModeContext'
import ToggleSwitch from "../../components/ToggleSwitch";

const Authorization = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext()
  const isLightTheme = theme === Theme.Light;

  const [activeTab, setActiveTab] = useState("login");
  const [isConfirmed, setConfirmed] = useState(false);

  const onClickLogin = (name: string) => {
    setActiveTab(name);
  };

  const onClickRegister = () => {
    setConfirmed(true);
  }

  return !isConfirmed ? (
    <div
    className={classnames("login", { ["darkContainer"]: !isLightTheme }, { ["container"]: isLightTheme })}>
      <ToggleSwitch/>
      <div className={"loginContainer"}>

        <HeaderAuthorization onClick={onClickLogin} tabActive={activeTab} />

        <div className="formContainer">
          {activeTab === "login" ? (
            <FormLogin onClickConfirm={onClickRegister}/>
          ) : (
            <FormRegistration onClick={onClickLogin}  onClickConfirm={onClickRegister}/>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Confirmation />
  )
};

export default Authorization;