import React from 'react'
import Navbar from 'scenes/navbar'
import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import FriendListWidget from "scenes/widgets/FriendListWidget";

function Message() {
  const { _id } = useSelector((state) => state.user);
  const { palette } = useTheme();
  return (
    <>
    <Navbar/>
      <Box flexBasis="26%">
        <Box m="2rem 0" />
        <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Messages
      </Typography>
          <FriendListWidget userId={_id} />
      </Box>
    </>
  )
}

export default Message