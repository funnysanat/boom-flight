import classNames from "classnames";
import React, { memo } from "react";

const Card = ({ header, footer, content, theme }) => {
  return (
    <div className="card w-100 border-rounded border-shadow-thick p-16">
      <div>{content}</div>
    </div>
  );
};

export default memo(Card);
