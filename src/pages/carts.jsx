import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Stack,
  IconButton,
  Container,
  CardActionArea,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

// component
import SearchItem from "../components/Search";
import FilterItem from "../components/FilterItem";
import Cartmobile from "../components/Cartmobile";
import Cartwebsite from "../components/Cartwebsite";

// icon
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState, useRef } from "react";

const PraticeCardResponsive = (props) => {
  const { Data } = props;
  const [datas, setDatas] = useState(Data);
  const [categoriess, setCategoriess] = useState("");
  const [numberPage, setNumberPage] = useState(1);
  const [itemRespon, setItemRespon] = useState([0, 9]);
  const [searchItem, setSearchItem] = useState("");
  const myRef = useRef();

  const handleClickNextPage = () => {
    if (itemRespon[1] < datas.length) {
      myRef.current.scrollIntoView();
      setNumberPage(numberPage + 1);
      setItemRespon([itemRespon[0] + 9, itemRespon[1] + 9]);
    }
  };

  const handleClickBackPage = () => {
    if (itemRespon[0] !== 0) {
      myRef.current.scrollIntoView();
      setNumberPage(numberPage - 1);
      setItemRespon([itemRespon[0] - 9, itemRespon[1] - 9]);
    }
  };

  const SelectCategory = (category, SearchName) => {
    // selected ไปแล้วไม่ว่าง
    if (category !== "") {
      // filter ในขณะที่มี input search ค้างอยู่
      if (SearchName) {
        console.log("select name send", SearchName);
        const filtername = Data.filter(
          ({ categories, name }) =>
            name.toLowerCase().indexOf(SearchName) !== -1 &&
            categories.some((element) => element === category.toLowerCase())
        );
        setDatas(filtername);
        setCategoriess(category);
      } else {
        const categoryFilter = Data.filter(({ categories }) =>
          categories.some((element) => element === category.toLowerCase())
        );
        setDatas(categoryFilter);
        setCategoriess(category);
      }
    } else {
      setSearchItem("");
      setDatas(Data);
      setCategoriess(category);
    }
  };

  const SearchName = (TextSearch) => {
    // reset to first page
    const Update = Data.filter((element) => {
      if (element.name.toLowerCase().indexOf(TextSearch.toLowerCase()) !== -1) {
        return element;
      }
      return 0;
    });

    // first filter all category
    if (Update.length !== 0 && TextSearch !== "") {
      setSearchItem(TextSearch);
      setNumberPage(1);
      setItemRespon([0, 9]);
      setDatas(Update);
    } else {
      setSearchItem(TextSearch);
      if (categoriess === "") {
        setDatas([]);
        if (TextSearch === "") {
          setDatas(Data);
        }
      } else {
        // second filter specify category
        if (TextSearch !== "") {
          const Update = datas.filter((element) => {
            if (
              element.name.toLowerCase().indexOf(TextSearch.toLowerCase()) !==
              -1
            ) {
              return element;
            }
            return 0;
          });
          if (Update.length === 0) {
            setDatas([]);
          }
        } else {
          const categoryFilter = Data.filter(({ categories }) =>
            categories.some((element) => element === categoriess.toLowerCase())
          );
          setDatas(categoryFilter);
        }
      }
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid container columns={{ xs: 1, md: 3 }} spacing={{ xs: 0, md: 2 }}>
        <Grid
          item
          xs={1}
          md={3}
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box
            sx={{ width: { xs: "100%", md: "33%" } }}
            display="flex"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                width: { xs: "100%", md: "400px" },
                marginBottom: { xs: 2, md: 0 },
              }}
              textAlign={{ xs: "center", md: "left" }}
              ref={myRef}
            >
              Place List
            </Typography>
          </Box>
          <Box
            sx={{ width: { xs: "100%", md: "66%" } }}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "space-between", md: "end" }}
            alignItems="center"
            mr={{ xs: 0, md: 5 }}
            mb={{ xs: 2, md: 0 }}
            height={{ xs: "90px", md: "40px" }}
          >
            <FilterItem
              SelectCategory={SelectCategory}
              SearchItem={searchItem}
            />
            <Divider />
            <SearchItem SearchName={SearchName} categoriess={categoriess} />
          </Box>
        </Grid>
        {datas.length !== 0 ? (
          datas
            .slice(itemRespon[0], itemRespon[1])
            .map(
              ({
                id,
                name,
                images,
                profile_image_url,
                rating,
                operation_time,
              }) => (
                <Grid
                  key={id}
                  item
                  xs={1}
                  md={1}
                  mb={{ xs: 2 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Card
                    sx={{
                      width: { xs: "357px", md: "357px" },
                      height: { xs: "321px", md: "225px" },
                    }}
                  >
                    <CardActionArea
                      component={Link}
                      to={`cart/${id}`}
                      sx={{
                        width: { xs: "357px", md: "357px" },
                        height: { xs: "321px", md: "225px" },
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          image={profile_image_url}
                          sx={{
                            width: "100%",
                            height: "87px",
                            display: { xs: "block", md: "none" },
                          }}
                        />
                        <Box
                          sx={{
                            borderRadius: "20px",
                            width: "67px",
                            height: "31px",
                            position: "absolute",
                            bgcolor: "#134B8A",
                            bottom: "-16px",
                            right: "16px",
                            display: { xs: "flex", md: "none" },
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography color="white">{rating}</Typography>
                        </Box>
                      </Box>
                      <Stack>
                        <Cartmobile
                          Times={operation_time}
                          ItemImages={images}
                          Name={name}
                        />
                      </Stack>
                      <CardContent
                        sx={{ display: { xs: "none", md: "block" } }}
                      >
                        <Cartwebsite
                          Times={operation_time}
                          Rating={rating}
                          Profile={profile_image_url}
                          ItemImages={images}
                          Name={name}
                        />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            )
        ) : (
          <Box
            width="100%"
            height={{ xs: "400px", md: "800px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2" component="div" textAlign="center">
              404 can't find Item
            </Typography>
          </Box>
        )}
      </Grid>
      <Stack direction="row" justifyContent="center" spacing={3}>
        <IconButton
          color="default"
          sx={{ border: "2px solid", width: "40px", height: "40px" }}
          onClick={handleClickBackPage}
        >
          {" "}
          <ChevronLeftIcon />
        </IconButton>
        <Box
          sx={{
            bgcolor: "#134B8A",
            width: "40px",
            height: "40px",
            color: "white",
            borderRadius: "100%",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <h3>{numberPage}</h3>
        </Box>
        <IconButton
          color="default"
          sx={{ border: "2px solid", width: "40px", height: "40px" }}
          onClick={handleClickNextPage}
        >
          {" "}
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default PraticeCardResponsive;
