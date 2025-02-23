import React, { useState } from "react";
import { Container, Button, Tabs, Tab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SignUpPage: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    e.preventDefault();
    setValue(newValue);
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
      <p>Map 자리</p>
      <Button variant="contained" color="error" sx={{ width: "30%" }}>
        Alert
      </Button>
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
