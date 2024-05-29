import React from "react";
import { Switch } from "antd";

const Toggle = ({ changeTheme }) => {
  const onChange = (checked) => {
    changeTheme(checked);
  };
  return <Switch defaultChecked onChange={onChange} />;
};
export default Toggle;
