import { Stack, Grid, CardMedia, Typography, Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Cartwebsite = (props) => {
  const {Rating, Profile , ItemImages, Times, Name} = props;

  const CheckDate = () =>{
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = new Date();
    let d = days[day.getDay()];
    return d
  } 


  let dayOpening = Times.filter(({ day }) => day === CheckDate())

  return (
    <>
      <Stack direction="row" spacing={2} mb={2}>
        <CardMedia
          component="img"
          image={Profile}
          sx={{
            width: "60px",
            height: "60px",
            display: { xs: "none", md: "block" },
            borderRadius: "10px",
          }}
        />
        <Stack sx={{ width: { xs: "100%", md: "79%" } }}>
          <Typography
            variant="subtitle1"
            component="div"
            gutterBottom
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            {Name}
          </Typography>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography
              variant="subtitle1"
              component="div"
              display="flex"
              gutterBottom
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              <CalendarMonthIcon />
              {dayOpening[0].time_open} AM - {dayOpening[0].time_close} PM
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              display="flex"
              alignItems="center"
              sx={{ display: { xs: "none", md: "inline-flex" }, color:'#134B8A'}}
            >
              <FiberManualRecordIcon fontSize="small" /> {Rating}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Grid
        container
        columns={{ md: 3 }}
        sx={{
          height: { xs: "176px", md: "120px" },
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <Grid item md={1} height="100%">
          <CardMedia
            component="img"
            image={ItemImages[0]}
            sx={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid item md={1} height="100%">
          <CardMedia
            component="img"
            image={ItemImages[1]}
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", md: "inline" },
            }}
          />
        </Grid>
        <Grid item md={1} height="100%">
          <CardMedia
            component="img"
            image={ItemImages[2]}
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", md: "inline" },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Cartwebsite;
