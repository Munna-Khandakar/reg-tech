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
function UserPage2() {
  const [plateData, setPlateData] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
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

  if (!plateData) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
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
              <ListItemAvatar>
                <Avatar alt={row.fullName} src={row.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    {`Full Name: `}
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`${row.fullName}`}
                    </Typography>
                    {` | Nick Name: `}
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`${row.nickName}`}
                    </Typography>
                    {` | Department: `}
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {row.department && `${row.department.label}`}
                    </Typography>
                  </>
                }
                secondary={
                  <React.Fragment>
                    {`Phone: `}
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`${row.mobile}`}
                    </Typography>
                    {`  | Email: `}
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`${row.email}`}
                    </Typography>
                    {`  | Room: `}
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {row.hallRoomNumber && `${row.hallRoomNumber}`}
                    </Typography>
                    {`  | Wish: `}
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
  );
}

export default UserPage2;
