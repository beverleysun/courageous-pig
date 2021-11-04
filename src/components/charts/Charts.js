import React from "react";
import Pagination from "./Pagination";
import RootLayout from "../RootLayout";
import "../../styles/charts/charts.scss";

const Charts = ({ title, date }) => {
  return (
    <RootLayout title={title} subtitle={`You are viewing ${date}`}>
      <div className="controls">
        <div className="search">
          <label htmlFor="search">Search Artist : </label>
          <input name="search" />
        </div>
        <Pagination
          links={{
            previousDay: "2021-11-04",
            previousWeek: "2021-11-04",
            nextDay: "2021-11-04",
            nextWeek: "2021-11-04",
          }}
        ></Pagination>
      </div>
      <div className="list-items"></div>
      <Pagination
        className="mobile"
        links={{
          previousDay: "2021-11-04",
          previousWeek: "2021-11-04",
          nextDay: "2021-11-04",
          nextWeek: "2021-11-04",
        }}
      ></Pagination>
    </RootLayout>
  );
};

export default Charts;
