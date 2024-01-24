import React from "react";

import Sidenav from "../components/Sidenav";
import Storagetable from "../components/Storagetable"
import { Box, Typography } from "@mui/material";



export default function Delivery() {
    return (
      <div>
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box sx={{marginTop:15,marginLeft:10}}>
                <Storagetable/>
          </Box>
          
        </Box>
      </div>
    );
  }