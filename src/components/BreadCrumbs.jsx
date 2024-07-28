import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../routes";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <nav aria-label="breadcrumb" className="mb-5">
      <Breadcrumbs
        separator={<NavigateBeforeIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <Link key={index} color="inherit" to={match?.pathname}>
            {breadcrumb.props.children}
          </Link>
        ))}
      </Breadcrumbs>
    </nav>
  );
};

export default BreadCrumbs;
