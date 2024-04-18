import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import { setFriends } from "state";

const Notifications = () => {
  
  const { palette } = useTheme();
  return (
    <>
    <Navbar/>
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Notifications
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, consequatur.
      </Box>
    </WidgetWrapper>
    </>
  );
};

export default Notifications;