import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";

import Button from "../../components/common/button/button.component";
import Card from "../../components/common/card/card.component";
import Table from "../../components/common/table/table.component";

import { flightColumns, flightDataSource } from "../../data/data-mocks";
import PageHeader from "../../components/pageHeader/page-header.component";
import { constants } from "../../utils/constants";

const Flight = () => {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme] = useOutletContext();

  const getFlightList = async () => {
    const url = `${constants.BASE_URL}/flights`;
    try {
      setLoading(true);
      const response = await axios(url);
      if (response.data.length !== 0 && response.data) {
        setFlightData(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFlightList();
    let flightInterval = setInterval(getFlightList, 5000);
    return () => {
      clearInterval(flightInterval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center align-center gap-4">
      <PageHeader content={constants.FLIGHT_SCHEDULED.toUpperCase()} />
      <Card
        content={
          <Table
            theme={theme}
            columns={flightColumns}
            dataSource={flightData}
            linkCell="true"
            linkText="/flights"
          />
        }
      />
    </div>
  );
};

export default Flight;
