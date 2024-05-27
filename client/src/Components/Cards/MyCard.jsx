import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const MyCard = ({ sheyar }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(sheyar);
  };

  return (
    <Card
      sx={{
        position: "relative",
        margin: 2,
        padding: 2,
        border: 1,
        borderRadius: 1.5,
        borderColor: "white",
        maxWidth: "70vw",
        minWidth: "70vw",
        boxShadow: "4px 4px 0px 1px #F9F4DA", // Adjust offset and shadow properties
      }}
    >
      <Box sx={{ position: "absolute", top: 0, right: 0 }}>
        <Button
          size="small"
          onClick={handleCopy}
          sx={{
            minWidth: "auto",
            padding: "5px 23x",
            color: "#231F20",
            backgroundColor: "#FCBA28",
            "&:hover": {
              backgroundColor: "#DE1E3A",
            },
          }}
        >
          copy
        </Button>
      </Box>
      <Typography variant="h5"> {sheyar} </Typography>
    </Card>
  );
};

export default MyCard;
