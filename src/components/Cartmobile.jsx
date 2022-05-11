import {Box, Typography,IconButton,Stack,CardMedia} from '@mui/material'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useState } from 'react';

const Cartmobile = (props) => {
  const { Times,ItemImages,Name } = props

  const [imageNumber, setImageNumber] = useState(0)
  const CheckDate = () =>{
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = new Date();
    let d = days[day.getDay()];
    return d
  } 

  let dayOpening = Times.filter(({ day }) => day === CheckDate())

  const handleClickImageRight = () => {
    if(ItemImages.length - 1 > imageNumber){
      setImageNumber(imageNumber => imageNumber+1)
    }
  };

  const handleClickImageLeft = () => {
    if(imageNumber !== 0){
      setImageNumber(imageNumber => imageNumber-1)
    }
  };

  return (
    <Box sx={{margin : "auto" }}>
      <Typography
        variant="caption"
        component="div"
        sx={{ display: { xs: "block", md: "none" }, fontWeight: "bold" }}
      >
        {Name}
      </Typography>
      <Typography
        variant="subtitle2"
        component="div"
        sx={{
          display: {
            xs: "inline-flex",
            md: "none",
            fontSize: "0.75rem",
            fontWeight: "bold",
            alignItems: "center",
          },
        }}
      >
        <CalendarMonthIcon sx={{ width: "14px", marginRight: 1 }} />
        {dayOpening[0].time_open} AM - {dayOpening[0].time_close} PM
      </Typography>
      <Box sx={{ position: "relative", display: { sx: "block", md: "none" }}}>
        <Box sx={{ position: "absolute", top: "40%", width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ margin: "10px" }}
          >
            <IconButton
              sx={{ bgcolor: "white", color: "#757575" }}
              disableRipple
              onMouseDown={event => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                handleClickImageLeft()
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              sx={{ bgcolor: "white", color: "#757575" }}
              disableRipple
              onMouseDown={event => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                handleClickImageRight()
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </Box>
        <CardMedia
          component="img"
          image={ItemImages[imageNumber]}
          sx={{
            width: "331px",
            height: "176px",
            display: { xs: "block", md: "none" },
            borderRadius: "10px",
            margin:'auto'
          }}
          />
      </Box>
    </Box>
  );
};

export default Cartmobile;
