import React, { useEffect, useState } from "react";
import Modal from "../../components/common/modal/modal.component";
import Button from "../../components/common/button/button.component";
import Card from "../../components/common/card/card.component";
import PageHeader from "../../components/pageHeader/page-header.component";
import Grid from "../../components/common/grid/grid.component";
import Table from "../../components/common/table/table.component";

import { useNavigate, useOutletContext } from "react-router-dom";
import { constants } from "../../utils/constants";
import { flightColumns, flightDataSource } from "../../data/data-mocks";

import axios from "axios";

const FlightDetails = () => {
  const [theme] = useOutletContext();
  const [flightDetailsData, setFlightDetailsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathName = window.location.pathname.split("/")[2];
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };

  const footerText = {
    title: "Back",
    onClick: navigateBack,
  };

  const getFlightDetails = async () => {
    const url = `${constants.BASE_URL}/flights/${Number(pathName)}`;
    try {
      setLoading(true);
      const response = await axios(url);
      if (response.data.length !== 0 && response.data) {
        console.log(response.data);
        setFlightDetailsData(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFlightDetails();
  }, []);

  return (
    flightDetailsData.length !== 0 && (
      <div className="flex flex-col justify-center align-center gap-4">
        <PageHeader
          content={`${constants.FLIGHT_DETAILS.toUpperCase()} - ${
            flightDetailsData["flightNumber"]
          }`}
          color="black"
        />
        <div>
          <Card
            content={
              <Table
                theme={theme}
                columns={flightColumns}
                dataSource={[flightDetailsData]}
                footer="true"
                footerText={footerText}
              />
            }
          />
        </div>
        {/* <Button
          theme={theme}
          title="back"
          variant="contained"
          onClick={() => navigateBack}
        /> */}
      </div>
    )
  );
};

export default FlightDetails;
