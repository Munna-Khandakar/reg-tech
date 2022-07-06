import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import "./UserPage.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ReplayIcon from "@mui/icons-material/Replay";
function UserPage2() {
  const [plateData, setPlateData] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  let navigate = useNavigate();
  //fetching the paginated data for the first time
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`/api/users/1`);
      const data = await res.json();
      console.log(data);
      setPlateData(data);
    };
    getPosts();
  }, []);

  // fetch paginated data on demand
  const fetchPosts = async () => {
    console.log("fetching again...");
    const res = await fetch(`/api/users/${page}`);

    const data = await res.json();
    console.log(data);
    return data;
  };

  //fetch data from server function
  const fetchData = async () => {
    const postsFormServer = await fetchPosts();

    setPlateData([...plateData, ...postsFormServer]);
    if (postsFormServer.length === 0) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  const showProfile = (id) => {
    navigate(`/print/${id}`);
  };
  if (!plateData) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
  const searchQueryHandler = async () => {
    if (searchQuery === "") {
      return;
    }
    const res = await fetch(`/api/find/all/${searchQuery}`);
    const data = await res.json();
    setPlateData(data);
    setHasMore(false);
    setSearchQuery("");
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{
            fontSize: {
              lg: 40,
              md: 30,
              sm: 25,
              xs: 15,
            },
          }}
        >
          মওলানা ভাসানী হল জা. বি.
        </Typography>
        <Typography
          variant="h3"
          textAlign={"center"}
          bold
          sx={{
            fontSize: {
              lg: 35,
              md: 25,
              sm: 15,
              xs: 15,
            },
            fontWeight: 500,
          }}
        >
          ১ম পুনর্মিলনী উৎসব (SMART Reunion)
        </Typography>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{
            fontSize: {
              lg: 30,
              md: 20,
              sm: 15,
              xs: 15,
            },
            textDecoration: "underline",
          }}
        >
          ছাত্রদের মৌলিক তথ্য সংগ্রহ কার্যক্রম
        </Typography>

        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{
            fontSize: {
              lg: 20,
              md: 20,
              sm: 15,
              xs: 10,
            },
          }}
        >
          তাং : {moment(Date.now()).format("DD/MM/YYYY")}
        </Typography>
        <Paper
          sx={{
            m: "2rem",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: { xs: "90%", sm: "90%", lg: "50%" },
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Student"
            inputProps={{ "aria-label": "search students" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={searchQueryHandler}
          >
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={() => window.location.reload()}
          >
            <ReplayIcon />
          </IconButton>
        </Paper>
      </Box>
      <List sx={{ width: "100%" }}>
        <InfiniteScroll
          dataLength={plateData.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={"loading..."}
          endMessage={"no posts..."}
        >
          {plateData.map((row) => (
            <>
              <ListItem alignItems="flex-start" key={row._id}>
                <ListItemAvatar
                  onClick={() => showProfile(row._id)}
                  sx={{ cursor: "pointer" }}
                >
                  <Avatar alt={row.fullName} src={row.photo} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <span
                        className="cursorPointer"
                        onClick={() => showProfile(row._id)}
                      >
                        {row.fullName}
                      </span>

                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`(${row.nickName}),`}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {row.batch && `${row.batch.label},`}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {row.department && ` Dept. of ${row.department.label}`}
                      </Typography>
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`${row.mobile}, `}
                      </Typography>

                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`${row.email}, `}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {row.hallRoomNumber && `${row.hallRoomNumber}, `}
                      </Typography>

                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {row.wishBox && `${row.wishBox}`}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </InfiniteScroll>
      </List>
    </>
  );
}

export default UserPage2;
