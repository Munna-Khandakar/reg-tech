import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import "./UserPage.css";

function UsersPage() {
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
    <>
      <table id="customers">
        <tr>
          <td>Full Name</td>
          <td>Nick Name</td>
        </tr>
        <InfiniteScroll
          dataLength={plateData.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={"loading..."}
          endMessage={"no posts..."}
        >
          {plateData.map((row) => (
            <tr>
              <td>{row.fullName}</td>
              <td>{row.fullName}</td>
            </tr>
          ))}
        </InfiniteScroll>
      </table>
    </>
  );
}

export default UsersPage;
