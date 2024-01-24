import React from "react";
import Sidenav from "../components/Sidenav";
import { Box, Typography } from "@mui/material";
import Tble from "../components/Tble";

export default function Delivery() {
    return (
      <div>
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box sx={{ 
            marginLeft: "5%",
            marginTop:"10%",
            justifyItems:"center",
            width:"100%"}}>

            <Tble sx={{width:500, height:150}}/>
          </Box>
        </Box>
      </div>
    );
  }