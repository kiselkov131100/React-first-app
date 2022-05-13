import React, {FC} from "react";
import "./HeaderAuthorization.css";
import Button from "../Button";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/ThemeModeContext'

type HeaderAuthorizationProps = {
  onClick: (name:string) => void;
  tabActive:string;
}

const HeaderAuthorization: FC<HeaderAuthorizationProps> = ({onClick, tabActive}) => {

  const isLoginActive = tabActive === "login"  
  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;
  
  return (
    <div className="titleContainer">
          <Button
            className={classnames(`btnTitle btnLogin`, {
              ["btnTitleActive"]: isLoginActive,
            })}
            btnContent={"Login"}
            onClick={() => onClick("login")}
          />
          <Button
            className={classnames(`btnTitle btnRegistration `, {
              ["btnTitleActive"]: !isLoginActive,
            })}
            btnContent={"Registration"}
            onClick={() => {onClick("registration")}}
          />
        </div>
  );
};

export default HeaderAuthorization;