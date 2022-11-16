import { Box, Button, MenuItem, TextField, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import swal from "sweetalert";
import LoadingButton from "@mui/lab/LoadingButton";

function PageTwo() {
  let navigate = useNavigate();
  const { mobile } = useParams();
  const [storedValue, setStoredValue] = useState();
  const [batches, setBatches] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [faculties, setfaculties] = useState([]);
  const [batch, setBatch] = useState("SELECT YOUR BATCH");
  const [department, setDepartment] = useState("SELECT YOUR DEPARTMENT");
  const [faculty, setFaculty] = useState("SELECT YOUR FACULTY");
  const [newPhotoUpload, setNewPhotoUpload] = useState(false);
  const [photo, setPhoto] = useState("");
  // confirm step
  const [submitButtonLoading, setSubmitButtonLoading] = useState(false);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [inputFields, setInputFields] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // get all information for mobile
  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch(`/api/user/mobile/${mobile}`);
      const data = await res.json();
      setStoredValue(data);
      try {
        setFaculty(data.faculty._id);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  // getting all the batches
  useEffect(() => {
    const getBatches = async () => {
      const res = await fetch(`/api/batches`);
      const data = await res.json();
      setBatches(data);
    };
    getBatches();
  }, []);

  //getting all the departments
  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch(`/api/departments/${faculty}`);
      const data = await res.json();
      setDepartments((p) => [...data]);
    };
    getDepartments();
  }, [faculty]);
  // getting faculty names
  useEffect(() => {
    const getFaculties = async () => {
      const res = await fetch(`/api/faculties`);
      const data = await res.json();
      setfaculties(data);
    };
    getFaculties();
  }, []);

  const guestType = [
    { value: "Wife", cost: 700 },
    { value: "Kids", cost: 700 },
    { value: "Guest", cost: 700 },
  ];
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = () => {
    let newfield = { guestType: "" };

    setInputFields([...inputFields, newfield]);
  };
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const successMessageHandler = (msg) => {
    setSubmitButtonLoading(false);
    setSubmitButtonDisable(true);
    navigate(`/reunion/confirm/${msg}`);
  };

  const errorMessageHandle = (msg) => {
    setSubmitButtonLoading(false);
    setSubmitButtonDisable(false);
    return swal("", msg, "error");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonLoading(true);
    // if (inputFields.length > 0) {
    //   storedValue.guest = inputFields;
    //   setStoredValue({ ...storedValue });
    // }

    // setStoredValue({ ...storedValue, guest: inputFields, mobile: mobile });

    storedValue.guest = inputFields;
    storedValue.mobile = mobile;
    setStoredValue({ ...storedValue });

    axios
      .post("/api/reunion/registration", storedValue)
      .then((res) => {
        if (res.data.error) {
          errorMessageHandle(res.data.error);
        }
        if (res.data.success) {
          successMessageHandler(res.data.success);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "1000px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ margin: "2rem 0", fontSize: "2rem", textAlign: "center" }}>
          Please submit your information in the form carefully for the upcomig
          reunion
        </p>

        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            select
            required
            label="SELECT YOUR BATCH"
            value={storedValue?.batch?._id || ""}
            onChange={(e) =>
              setStoredValue({
                ...storedValue,
                batch: { _id: e.target.value },
              })
            }
          >
            <MenuItem key="SELECT YOUR BATCH" value="SELECT YOUR BATCH">
              SELECT YOUR BATCH
            </MenuItem>
            {batches.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            select
            required
            label="SELECT YOUR FACULTY"
            value={storedValue?.faculty?._id || ""}
            onChange={(e) => {
              setFaculty(e.target.value);
              setStoredValue({
                ...storedValue,
                faculty: { _id: e.target.value },
              });
            }}
          >
            <MenuItem key="SELECT YOUR FACULTY" value="SELECT YOUR FACULTY">
              SELECT YOUR FACULTY
            </MenuItem>
            {faculties.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            required
            select
            label="SELECT YOUR DEPARTMENT"
            value={storedValue?.department?._id || ""}
            onChange={(e) =>
              setStoredValue({
                ...storedValue,
                department: { _id: e.target.value },
              })
            }
          >
            <MenuItem
              key="SELECT YOUR DEPARTMENT"
              value="SELECT YOUR DEPARTMENT"
            >
              SELECT YOUR DEPARTMENT
            </MenuItem>
            {departments.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="row">
          <div className="photoBox">
            PHOTO *
            <img
              src={
                newPhotoUpload
                  ? photo
                  : storedValue?.photo ||
                    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              style={{
                height: 150,
                width: 150,
                borderRadius: "5%",
                border: "1px solid grey",
              }}
            />
            <Input
              style={{
                width: "100%",
                margin: "1rem 0",
                border: "1 solid black",
              }}
              name="photo2"
              label="PHOTO"
              id="photo2"
              onChange={(e) => {
                setNewPhotoUpload(true);
                setPhoto(URL.createObjectURL(e.target.files[0]));
                setStoredValue({ ...storedValue, photo: e.target.files[0] });
              }}
              variant="outlined"
              accept="image/*"
              type="file"
            />
          </div>
        </div>
        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="AS PER NID"
            label="FULL NAME"
            value={storedValue?.fullName || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, fullName: e.target.value })
            }
            variant="outlined"
            required
          />
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="KNOWN NAME IN CAMPUS"
            label="NICK NAME"
            value={storedValue?.nickName || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, nickName: e.target.value })
            }
            variant="outlined"
            required
          />
        </div>
        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="YOUR WHAT'S APP"
            label="WHAT'S APP"
            value={storedValue?.secondaryMobile || ""}
            onChange={(e) =>
              setStoredValue({
                ...storedValue,
                secondaryMobile: e.target.value,
              })
            }
            variant="outlined"
            type="text"
            required
          />
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="YOUR ACTIVE EMAIL"
            label="EMAIL"
            value={storedValue?.email || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, email: e.target.value })
            }
            variant="outlined"
            type="email"
            required
          />
        </div>
        {/* <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="AS PER NID"
            label="FATHER'S NAME"
            value={storedValue?.fatherName || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, fatherName: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="AS PER NID"
            label="MOTHER'S NAME"
            value={storedValue?.motherName || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, motherName: e.target.value })
            }
            variant="outlined"
          />
        </div> */}
        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="YOUR ADDRESS"
            label="ADDRESS"
            value={storedValue?.address || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, address: e.target.value })
            }
            variant="outlined"
            required
          />
        </div>
        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="COMPANY NAME"
            label="COMPANY"
            value={storedValue?.companyName || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, companyName: e.target.value })
            }
            variant="outlined"
            required
          />
          {/* <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="YOUR PROFESSION"
            label="PROFESSION"
            value={storedValue?.profession || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, profession: e.target.value })
            }
            variant="outlined"
            required
          /> */}
        </div>
        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="YOUR OCCUPATION"
            label="OCCUPATION"
            value={storedValue?.occupation || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, occupation: e.target.value })
            }
            variant="outlined"
            required
          />
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="YOUR DESIGNATION"
            label="DESIGNATION"
            value={storedValue?.designation || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, designation: e.target.value })
            }
            variant="outlined"
            required
          />
        </div>
        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="YOUR WISH"
            label="WISH"
            value={storedValue?.wishBox || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, wishBox: e.target.value })
            }
            variant="outlined"
            required
          />
        </div>

        <div className="row">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "1rem",
            }}
          >
            <Button
              variant="outlined"
              onClick={addFields}
              endIcon={<AddCircleIcon />}
            >
              Add Guest(if you have any)
            </Button>
            {inputFields.map((input, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    style={{ width: "100%", margin: "1rem 0" }}
                    select
                    label="SELECT GUEST TYPE"
                    value={input.guestType}
                    name="guestType"
                    onChange={(event) => handleFormChange(index, event)}
                    // helperText="Select Your Guest type from Drop Down List"
                  >
                    {guestType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                  <IconButton
                    aria-label="delete"
                    onClick={() => removeFields(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            })}
          </div>
        </div>

        {/* <Button
          variant="contained"
          endIcon={<NavigateNextIcon />}
          sx={{ margin: "5rem" }}
          type="submit"
        >
          Next
        </Button> */}

        <LoadingButton
          // onClick={handleClick}
          type="submit"
          loading={submitButtonLoading}
          disabled={submitButtonDisable}
          loadingPosition="end"
          variant="contained"
          endIcon={<NavigateNextIcon />}
          sx={{ margin: "5rem" }}
        >
          Submit
        </LoadingButton>
      </div>
    </form>
  );
}

export default PageTwo;
