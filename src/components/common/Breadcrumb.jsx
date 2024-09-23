import React from "react";
import IconHome from "../Icon/IconHome";
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="flex gap-3">
      <Link to="/" className="text-primary">
        <IconHome />
      </Link>
      <h1 className="capitalize text-sm font-semibold">/ {pageName}</h1>
    </div>
  );
};

export default Breadcrumb;
