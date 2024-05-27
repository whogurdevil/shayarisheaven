import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { Container, Modal } from "@mui/material";
import navbarimg from "../../assets/navbarimg.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("authtoken"); // Remove authentication token
    localStorage.removeItem("userId"); // Remove user ID or any other relevant data
    toast("Successfully logged out");
    navigate("/login");
    setOpen(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const shouldShowLogoutButton = !(
    location.pathname.endsWith("/login") ||
    location.pathname.endsWith("/signup")
  );
  const shouldShowBackButton = !(
    location.pathname.endsWith("/login") ||
    location.pathname.endsWith("/signup")
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} margin={0}>
        <AppBar
          position="relative"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Container
              sx={{
                width: "100vw",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" component="div" color={"primary"}>
                {"Shayar's Heaven"}
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
