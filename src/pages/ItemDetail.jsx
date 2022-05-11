import {
  Paper,
  Container,
  Button,
  Stack,
  Box,
  Typography,
  CardMedia,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useParams, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor:'#134B8A',
  "& .MuiButton-startIcon": {
    margin: 0,
  },  
}));

const ItemDetail = (props) => {
  const { itemId } = useParams();
  const { Data } = props;
  const [attribute, setAttribute] = useState(false);

  const handleMenuInfo = () => {
    setAttribute(false);
  };

  const handleMenuImg = () => {
    setAttribute(true);
  };

  // lazy create component but it work lol !!
  const openingIime = (operation_time) => {
    return operation_time.map(({ day, time_open, time_close }, index) =>
      time_open === "closed" ? (
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "600" }}
          width="470px"
          key={index}
        >
          {day} {time_open}
        </Typography>
      ) : (
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "600" }}
          width="470px"
          key={index}
        >
          {day} {time_open} AM - {time_close} PM
        </Typography>
      )
    );
  };

  return Data.filter(({ id }) => parseInt(itemId) === id).map(
    ({
      id,
      profile_image_url,
      images,
      name,
      address,
      rating,
      operation_time,
    }) => (
      <Container maxWidth="xl" key={id}>
        <Stack spacing={2} mb={{ xs: 2 }}>
          <Box width="100%">
            <StyledButton
              variant="contained"
              sx={{ borderRadius: "30px" }}
              height="39px"
              width="98px"
              startIcon={<KeyboardArrowLeftIcon />}
              component={Link}
              to="/"
            >
              <strong>Back</strong>
            </StyledButton>
          </Box>

          {/* mobile menu */}
          <Box
            display={{ xs: "flex", md: "none" }}
            position="relative"
            sx={{ textAlign: "center" }}
          >
            <Box
              sx={{
                width: "60%",
                bgcolor: attribute ? "white" : "#134B8A",
                color: attribute ? "#134B8A" : "white",
                padding: 1,
                borderRadius: "30px",
                position: "relative",
                zIndex: attribute ? 1005 : 1007,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
                textDecoration: "none",
              }}
              component="a"
              href="#"
              onClick={() => {
                handleMenuInfo();
              }}
            >
              <strong>Information</strong>
            </Box>
            <Box
              sx={{
                width: "60%",
                bgcolor: attribute ? "#134B8A" : "white",
                color: attribute ? "white" : "#134B8A",
                padding: 1,
                borderRadius: "30px",
                position: "absolute",
                right: 0,
                zIndex: attribute ? 1007 : 1005,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
                textDecoration: "none",
              }}
              component="a"
              href="#"
              onClick={() => {
                handleMenuImg();
              }}
            >
              <strong>IMAGE</strong>
            </Box>
          </Box>

          {/* website responsive */}

          <Paper
            sx={{
              display: { xs: "none", md: "flex" },
              height: "1231px",
              bgcolor: "#C4D3E9",
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={3} margin={5}>
              <Box
                width="677px"
                height="760px"
                bgcolor="white"
                borderRadius="10px"
                sx={{ overflow: "hidden" }}
              >
                <CardMedia
                  component="img"
                  image={profile_image_url}
                  style={{ width: "100%", height: "34%", objectFit: "cover" }}
                />
                <Stack>
                  <Grid
                    container
                    columns={{ xs: 1, md: 10 }}
                    margin={5}
                    rowSpacing={2}
                  >
                    <Grid item md={9}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6"><strong>{name}</strong></Typography>
                        <Typography
                          variant="body1"
                          sx={{ display: { md: "inline-flex" }, color:'#134B8A'}}
                        >
                          <FiberManualRecordIcon fontSize="small" /> {rating}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item md={2}>
                      <Typography variant="body1" sx={{ fontWeight: "700" }}>
                        Address:
                      </Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "600" }}
                        width="470px"
                      >
                        {address}
                      </Typography>
                    </Grid>
                    <Grid item md={2}>
                      <Typography variant="body1" sx={{ fontWeight: "700" }}>
                        Opening Hour:
                      </Typography>
                    </Grid>
                    <Grid item md={8}>
                      {openingIime(operation_time)}
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
              <Box
                width="548px"
                height="1084px"
                bgcolor="white"
                borderRadius="10px"
                display="flex"
              >
                <Stack spacing={2} margin="auto">
                  <Typography variant="h5"><strong>Images</strong></Typography>
                  <Box
                    height="974px"
                    width="479px"
                    marginLeft="auto"
                    marginRight="auto"
                    sx={{ overflow: "hidden", borderRadius: "10px" }}
                  >
                    {images.map((el, index) => (
                      <CardMedia
                        component="img"
                        key={index}
                        image={el}
                        style={{
                          width: "100%",
                          height: "34%",
                          objectFit: "cover",
                        }}
                      />
                    ))}
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Paper>

          {/* mobile responsive */}
          <Card
            sx={{
              display: { xs: "block", md: "none" },
              height: "646px",
              borderRadius: "10px",
            }}
          >
            {attribute ? 
              images.map((el, index) => (
                <CardMedia
                  component="img"
                  key={index}
                  image={el}
                  style={{
                    width: "100%",
                    height: "34%",
                    objectFit: "cover",
                  }}
                />
              ))
             : (
              <>
                <CardMedia
                  component="img"
                  image={profile_image_url}
                  sx={{
                    width: "100%",
                    height: "200px",
                    display: { xs: "block", md: "none" },
                  }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h6">
                      <strong>{name}</strong>
                    </Typography>
                    <Typography gutterBottom>
                      <strong>Address :</strong>
                    </Typography>
                    <Typography gutterBottom>
                      <strong>{address}</strong>
                    </Typography>
                    <Typography gutterBottom>
                      <strong>Opening Hour :</strong>
                    </Typography>
                    <Box>{openingIime(operation_time)}</Box>
                  </Stack>
                </CardContent>
              </>
            )}
          </Card>
        </Stack>
      </Container>
    )
  );
};

export default ItemDetail;
