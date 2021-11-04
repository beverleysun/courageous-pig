import React from "react";
import Pagination from "./Pagination";
import RootLayout from "../RootLayout";
import Artist from "./artist/Artist";
import "../../styles/charts/charts.scss";

const Charts = ({ title, date }) => {
  return (
    <>
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
        <div className="artists">
          <Artist />
          <Artist />
        </div>
      </RootLayout>
      <Pagination
        className="mobile"
        links={{
          previousDay: "2021-11-04",
          previousWeek: "2021-11-04",
          nextDay: "2021-11-04",
          nextWeek: "2021-11-04",
        }}
      ></Pagination>
    </>
  );
};

export default Charts;
