import React from "react";
import "./grid.styles.css";

const Grid = ({ content }) => {
  return (
    <div>
      <section>
        {Object.entries(content).map(([key, value]) => (
          <div className="flex align-center justify-space-around gap-16">
            <div className="text-center">{key}</div>
            <div>{value}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Grid;
