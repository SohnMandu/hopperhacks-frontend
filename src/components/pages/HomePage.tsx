import React, { useState } from "react";
import {
  Container,
  Button,
  Tabs,
  Tab,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SignUpPage: React.FC = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "80vh",
    borderRadius: "1rem",
    overflow: "hidden",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    e.preventDefault();
    setValue(newValue);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = (confirmed: boolean) => {
    setOpen(false);
    if (confirmed) {
      console.log("Confirmed!");
    } else {
      console.log("Cancelled!");
    }
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", height: "80vh" }}>
        <LoadScript googleMapsApiKey="AIzaSyDaJxSlku3EfQzz7K4sYcllE4FzbiQxqOM">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Box>
      <Button variant="contained" color="error" onClick={handleOpenDialog}>
        Alert
      </Button>
      <Dialog open={open} onClose={() => handleCloseDialog(false)}>
        <DialogTitle>
          Are you sure you need help?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleCloseDialog(false)} color="primary">
            No
          </Button>
          <Button onClick={() => handleCloseDialog(true)} color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
        centered
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          boxShadow: 3,
        }}
      >
        <Tab icon={<HomeIcon />} />
        <Tab icon={<SearchIcon />} />
        <Tab icon={<ModeCommentIcon />} />
        <Tab icon={<AccountCircleIcon />} />
      </Tabs>
    </Container>
  );
};

export default SignUpPage;
