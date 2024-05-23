import { Typography, Link, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { ArrowForwardIosTwoTone } from "@mui/icons-material";

const Footer = () => {
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleTooltipOpen = () => {
    setOpenTooltip(true);
  };

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  return (
    <footer
      style={{
        backgroundColor: "#900000",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: "100",
      }}
    >
      <Typography variant="body1">{"Made with 🤍 "}</Typography>
    </footer>
  );
};

export default Footer;
