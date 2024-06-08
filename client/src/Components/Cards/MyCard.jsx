import React, { useState } from "react";
import { Card, Typography, Button, Box, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const MyCard = ({ sheyar }) => {
  const [expanded, setExpanded] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = async () => {
    navigator.clipboard
      .writeText(sheyar)
      .then(() => {
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <>
      <Card
        onClick={handleExpandClick}
        sx={{
          position: "relative",
          margin: 2,
          padding: 1,
          border: 1,
          borderRadius: 1.5,
          borderColor: "white",
          maxWidth: "70vw",
          minWidth: "70vw",
          boxShadow: "4px 4px 0px 1px #F9F4DA",
          cursor: "pointer",
        }}
      >
        <Box sx={{ position: "absolute", top: 0, right: 0 }}>
          <Button
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            sx={{
              minWidth: "auto",
              padding: "5px 23px",
              color: "#231F20",
              backgroundColor: "#FCBA28",
              "&:hover": {
                backgroundColor: "#DE1E3A",
              },
            }}
          >
            Copy
          </Button>
        </Box>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: expanded ? "visible" : "hidden",
            WebkitLineClamp: expanded ? "none" : 4,
            fontSize: 20,
          }}
        >
          {sheyar}
        </Typography>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Copied to clipboard
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default MyCard;
