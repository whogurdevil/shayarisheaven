//TODO:change font style of main title, check mycard style after adding more charaters in sheyar, check after adding more sheyars

import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Container,
  Typography,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import MyCard from "../Components/Cards/MyCard";
import topleft from "../assets/topleft.png";
import topright from "../assets/topright.png";
const API_URL =
  import.meta.env === "production"
    ? import.meta.env.VITE_PROD_BASE_URL
    : import.meta.env.VITE_DEV_BASE_URL;

const categories = ["Love", "Sad", "Funny", "Friendship", "Atitude", "Other"];
const languages = ["Punjabi", "Hindi", "Urdu", "English"];

const Home = () => {
  const [sheyars, setSheyars] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchSheyars(page);
  }, [page, language, category]);

  const fetchSheyars = async (page) => {
    try {
      const response = await axios.get(`${API_URL}sheyar/getSheyars`, {
        params: { page, limit: 20, language, category },
      });
      console.log("API Response:", response.data);
      const newSheyars = response.data.sheyars;
      if (newSheyars && newSheyars.length > 0) {
        setSheyars((prevSheyars) =>
          page === 1 ? newSheyars : [...prevSheyars, ...newSheyars],
        );
        setHasMore(page < response.data.pages);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching sheyars:", error);
      toast.error("Error fetching sheyars");
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setPage(1); // Reset to first page on filter change
    setSheyars([]); // Clear sheyars on filter change
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setPage(1); // Reset to first page on filter change
    setSheyars([]); // Clear sheyars on filter change
  };

  return (
    <Box
      sx={{
        boxShadow: "inset 0 0 0 0.7rem #F9F4DA",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0", // Adjusted to start from the top
          left: 0,
          width: "200px", // Adjust this width for smaller screens
          height: "200px", // Adjust this height for smaller screens
          background: `url(${topleft})`,
          backgroundSize: "cover",
          zIndex: 9999,
          "@media (min-width: 768px)": {
            // Adjust the min-width value based on your laptop screen size
            width: "500px", // Adjust the width for larger screens
            height: "500px", // Adjust the height for larger screens
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "0", // Adjusted to start from the top
          right: 0,
          width: "200px", // Adjust this width for smaller screens
          height: "200px", // Adjust this height for smaller screens
          background: `url(${topright})`,
          backgroundSize: "cover",
          zIndex: 9999,
          "@media (min-width: 768px)": {
            // Adjust the min-width value based on your laptop screen size
            width: "500px", // Adjust the width for larger screens
            height: "500px", // Adjust the height for larger screens
          },
        }}
      />
      {/* Main content */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          fontFamily={"cursive"}
          fontSize={"4rem"}
          justifyContent={"space-around"}
          textAlign={"center"}
          alignContent={"center"}
        >
          {"Sheyars's Heaven"}
        </Typography>
        <Grid container spacing={2} justifyContent="space-evenly" marginY={2}>
          <Grid item>
            <FormControl sx={{ minWidth: 120 }}>
              <TextField
                select
                label={"Language"}
                value={language}
                onChange={handleLanguageChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {languages.map((language, index) => (
                  <MenuItem key={index} value={language}>
                    {language}{" "}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ minWidth: 120 }}>
              <TextField
                select
                label={"Category"}
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}{" "}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
        </Grid>
        <div style={{ overflowY: "scroll", height: "500px" }}>
          <InfiniteScroll
            dataLength={sheyars.length}
            next={() => setPage((prevPage) => prevPage + 1)}
            hasMore={hasMore}
            loader={<CircularProgress />}
            endMessage={
              <Typography variant="body2">No more sheyars</Typography>
            }
          >
            {sheyars.length > 0 ? (
              sheyars.map((sheyar, index) => (
                <div key={index}>
                  <MyCard sheyar={sheyar.text} />
                </div>
              ))
            ) : (
              <Typography variant="body2">No sheyars available</Typography>
            )}
          </InfiniteScroll>
        </div>
        <ToastContainer />
      </Container>
    </Box>
  );
};

export default Home;
