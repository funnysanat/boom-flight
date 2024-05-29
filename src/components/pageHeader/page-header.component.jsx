import classNames from "classnames";
import React from "react";

const PageHeader = ({ content, color = "black" }) => {
  return (
    <div className="flex justify-space-around align-center">
      <h2
        className={classNames("", {
          "text-black": color === "black",
          blue: color === "blue",
        })}
      >
        {content}
      </h2>
    </div>
  );
};

export default PageHeader;
