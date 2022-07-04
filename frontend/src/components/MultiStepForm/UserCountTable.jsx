import React, { useEffect, useState, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Axios from "axios";
import FileDownload from "js-file-download";
import TabPanel from "@mui/lab/TabPanel";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import CountUp from "react-countup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Stack } from "@mui/material";
function UserCountTable() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [count, setCount] = useState("");

  //getting the user
  useEffect(() => {
    const getUserCount = async () => {
      const res = await fetch(`/api/count/user`);
      const data = await res.json();
      //console.log(data.department);
      setCount(data);
    };
    getUserCount();
  }, []);

  const showFilteredUser = (id, filter) => {
    console.log(`${id} - ${filter}`);
  };
  const exportFilteredUser = (e, id, filter) => {
    e.preventDefault();
    Axios({
      url: `/api/export/${filter}/${id}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, `users.xlsx`);
    });
  };

  const exportAllUsers = (e) => {
    e.preventDefault();
    Axios({
      url: "/api/exportAllUser",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "users.xlsx");
    });
  };

  return (
    <>
      <Box marginTop={"2rem"}></Box>
      <TabContext value={value}>
        <Tabs centered value={value} onChange={handleChange}>
          <Tab
            icon={<SchoolIcon />}
            value="1"
            label="By Department"
            style={{ minWidth: "30%" }}
          />
          <Tab
            icon={<AutoModeIcon />}
            value="0"
            label="Total"
            style={{ minWidth: "30%" }}
          />
          <Tab
            icon={<GroupsIcon />}
            value="2"
            label="By Batch"
            style={{ minWidth: "30%" }}
          />
        </Tabs>
        <TabPanel value="0">
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 34, textAlign: "center" }}
                color="text.secondary"
                gutterBottom
              >
                Total Registered Student
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: 44, textAlign: "center" }}
                color="text.main"
              >
                {count ? (
                  <Stack>
                    <CountUp
                      start={0}
                      end={count ? count.total : 0}
                      delay={0}
                    />
                    <IconButton
                      aria-label="download"
                      disableRipple
                      size="large"
                      onClick={(e) => exportAllUsers(e)}
                    >
                      <DownloadForOfflineIcon fontSize="inherit" />
                    </IconButton>
                  </Stack>
                ) : (
                  <Typography
                    sx={{ fontSize: 14, textAlign: "center" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    calculating...
                  </Typography>
                )}
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value="1">
          <TableContainer component={Paper}>
            <Table aria-label="caption table">
              <caption>Departmentwise students registration count</caption>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Department</TableCell>
                  <TableCell align="center">Count</TableCell>
                  <TableCell align="right">Download</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {count.department &&
                  count.department.map((data) => (
                    <TableRow key={data.department}>
                      <TableCell component="th" scope="row">
                        {data.department}
                      </TableCell>
                      <TableCell align="center">{data.count}</TableCell>
                      <TableCell align="right">
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent="flex-end"
                        >
                          {/* <IconButton
                            aria-label="view"
                            onClick={() =>
                              showFilteredUser(data.id, "department")
                            }
                          >
                            <VisibilityIcon />
                          </IconButton> */}
                          <IconButton
                            aria-label="download"
                            onClick={(e) =>
                              exportFilteredUser(e, data.id, "department")
                            }
                          >
                            <DownloadForOfflineIcon />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value="2">
          <TableContainer component={Paper}>
            <Table aria-label="caption table">
              <caption>Batchwise students registration count</caption>
              <TableHead>
                <TableRow>
                  <TableCell>Batch</TableCell>
                  <TableCell align="center">Count</TableCell>
                  <TableCell align="right">Download</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {count.batch &&
                  count.batch.map((data) => (
                    <TableRow key={data.batch}>
                      <TableCell component="th" scope="row">
                        {data.batch}
                      </TableCell>
                      <TableCell align="center">{data.count}</TableCell>
                      <TableCell align="right">
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent="flex-end"
                        >
                          {/* <IconButton
                            aria-label="view"
                            onClick={() =>
                              showFilteredUser(data.id, "department")
                            }
                          >
                            <VisibilityIcon />
                          </IconButton> */}
                          <IconButton
                            aria-label="download"
                            onClick={(e) =>
                              exportFilteredUser(e, data.id, "batch")
                            }
                          >
                            <DownloadForOfflineIcon />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default UserCountTable;
