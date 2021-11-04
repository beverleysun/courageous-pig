import React from "react";
import "../styles/rootlayout.scss";

const RootLayout = ({ title, subtitle, children }) => {
  return (
    <div className="root-layout">
      <div className="header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default RootLayout;
