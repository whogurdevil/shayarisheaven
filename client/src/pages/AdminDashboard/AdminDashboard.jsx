import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const API_URL =
  import.meta.env.VITE_ENV === "production"
    ? import.meta.env.VITE_PROD_BASE_URL
    : import.meta.env.VITE_DEV_BASE_URL;

const categories = ["Love", "Sad", "Funny", "Friendship", "Atitude", "Other"];
const languages = ["Punjabi", "Hindi", "Urdu", "English"];

const TrainingNames = () => {
  const [sheyarData, setSheyarData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSheyarData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(sheyarData);
    setLoading(true);
    try {
      const token = localStorage.getItem("authtoken");
      const url = `${API_URL}admin/newSheyar`;
      const response = await axios.post(url, sheyarData, {
        headers: {
          "auth-token": token,
        },
      });
      if (response.data.success) {
        toast.success("Sheyar updated successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating sheyar:", error);
      toast.error("Error updating sheyar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        marginX: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
        marginBottom: "100px",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add New Sheyar
      </Typography>
      <TextField
        select
        fullWidth
        label="Language"
        name="language"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        disabled={loading}
      >
        {languages.map((language) => (
          <MenuItem value={language}>{language}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        fullWidth
        label="Category"
        name="category"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        disabled={loading}
      >
        {categories.map((category) => (
          <MenuItem value={category}>{category} </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        label="Sheyar"
        name="sheyar"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        disabled={loading}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={loading}
        sx={{ marginTop: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : "Submit"}
      </Button>
      <ToastContainer />
    </Container>
  );
};

export default TrainingNames;
