import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const navLinks = [
  {
    navItem: "Home",
    to: "/",
  },
  {
    navItem: "Products",
    to: "/",
  },
  {
    navItem: "Our Store",
    to: "/",
  },
];
export const Navbar = () => {
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        sx={{
            width:'100%',
            height: 80,
            backgroundColor: '#333',
            color:'#eee'
          }}
      >
        <Typography variant="h3">Store</Typography>
        {navLinks.map((link, index) => {
          return <Link to={link.to}>{link.navItem}</Link>;
        })}
        <Box>
        <LocalMallIcon sx={{color:"yellowgreen"}}/>
            <Link to="/cart">Cart</Link>
        </Box>
      </Box>
    </Box>
  );
};
