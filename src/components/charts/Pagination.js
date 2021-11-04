import React from "react";
import { Link } from "gatsby";
import ArrowDoubleLeft from "../../assets/arrow-double-left.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import ArrowDoubleRight from "../../assets/arrow-double-right.svg";
import "../../styles/charts/pagination.scss";

const Pagination = ({ links, className }) => {
  return (
    <div className={`pagination-container ${className ? className : ""}`}>
      <Link
        className={links.previousWeek ? "" : "disabled-link"}
        to={`/charts/${links.previousWeek}`}
      >
        <div className="link">
          <ArrowDoubleLeft />
          Prev. Week
        </div>
      </Link>
      <Link
        className={links.previousDay ? "" : "disabled-link"}
        to={`/charts/${links.previousDay}`}
      >
        <div className="link">
          <ArrowLeft />
          Prev. Day
        </div>
      </Link>
      <Link
        className={links.nextDay ? "" : "disabled-link"}
        to={`/charts/${links.nextDay}`}
      >
        <div className="link">
          <ArrowRight />
          Next. Day
        </div>
      </Link>
      <Link
        className={links.nextWeek ? "" : "disabled-link"}
        to={links.nextWeek ? `/charts/${links.nextWeek}` : ""}
      >
        <div className="link">
          <ArrowDoubleRight />
          Next. Week
        </div>
      </Link>
    </div>
  );
};

export default Pagination;
