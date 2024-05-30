import classNames from "classnames";
import "./table.styles.css";
import React from "react";
import { dateTimeFormat } from "../../../utils/utility";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";

const Table = ({
  theme = "dark",
  columns,
  dataSource,
  linkCell,
  linkText,
  footer = false,
  footerText = { title: "", onClick: () => {} },
}) => {
  const navigate = useNavigate();

  return (
    <>
      <table
        className={classNames(
          "table w-100 border-shadow-thin-light transition",
          {
            "bg-primary text-white": theme === "dark",
            "bg-tertiary text-black": theme === "light",
          }
        )}
      >
        <thead>
          <tr className="">
            {columns.map((column) => (
              <th
                className={classNames("py-16 px-32 transition", {
                  "bg-primary text-white": theme === "dark",
                  "bg-tertiary text-black": theme === "light",
                })}
                key={column.fieldName}
              >
                {column.headerName.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource &&
            dataSource.map((row) => (
              <tr className="border-black text-center" key={row.id}>
                {columns.map((col) => (
                  <td
                    key={col.fieldName}
                    onClick={(e) => {
                      col.fieldName === "flightNumber"
                        ? navigate(`${linkText}/${row.id}`, {
                            state: {
                              id: row.id,
                              flightNumber: row.flightNumber,
                            },
                          })
                        : e.stopPropagation();
                    }}
                    className={classNames("py-16 px-32 transition", {
                      "bg-ternary text-white": theme === "dark",
                      underline: linkCell && col.fieldName === "flightNumber",
                      "success font-800 text-uppercase":
                        col.fieldName === "status" && row.status === "On Time",
                      "blue font-800 text-uppercase":
                        col.fieldName === "status" && row.status === "Delayed",
                      "error font-800 text-uppercase":
                        col.fieldName === "status" && row.status === "Departed",
                      "warning font-800 text-uppercase":
                        col.fieldName === "status" && row.status === "Boarding",
                      "bg-white text-black": theme === "light",
                    })}
                  >
                    {col.fieldName === "departureTime"
                      ? dateTimeFormat(row[col.fieldName])
                      : row[col.fieldName]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
        {footer && (
          <div className="footer pos-rel p-8">
            <Button
              theme={theme}
              title={footerText.title}
              variant="contained"
              onClick={() => footerText.onClick()}
            />
          </div>
        )}
      </table>
      {dataSource.length === 0 && (
        <section
          className={classNames("py-16 px-32 text-center transition", {
            "bg-ternary text-white": theme === "dark",
            "bg-white text-black": theme === "light",
          })}
        >
          No Data Found
        </section>
      )}
    </>
  );
};

export default Table;
