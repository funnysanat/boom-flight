import React, { memo } from "react";
import classNames from "classnames";
import "./button.styles.css";

const Button = ({
  title,
  color = "primary",
  variant = "contained",
  onClick,
  theme,
}) => {
  return (
    <button
      className={classNames(
        "px-16 py-8 border-rounded border-shadow-light btn transition",
        {
          "bg-primary text-white":
            color === "primary" && variant === "contained" && theme === "dark",
          "bg-tertiary text-black":
            color === "primary" && variant === "contained" && theme === "light",
          "bg-tertiary text-black":
            color === "tertiary" && variant === "outlined" && theme === "dark",
          "bg-ternary text-black":
            color === "tertiary" && variant === "outlined" && theme === "light",
        }
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default memo(Button);
