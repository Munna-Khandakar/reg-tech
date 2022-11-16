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
import { COLORS } from "../../utils/Colors";
import EditIcon from "@mui/icons-material/Edit";

function PageThree() {
  let navigate = useNavigate();
  const { id } = useParams();
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
  const [wantsToEdit, setWantsToEdit] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // get all information for mobile
  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch(`/api/reunion/id/${id}`);
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
    // setSubmitButtonLoading(false);
    // setSubmitButtonDisable(true);
    // navigate(`/reunion/confirm/${msg}`);
  };

  const errorMessageHandle = (msg) => {
    setSubmitButtonLoading(false);
    setSubmitButtonDisable(false);
    return swal("", msg, "error");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonLoading(true);
    if (inputFields.length > 0) {
      storedValue.guest = inputFields;
      setStoredValue({ ...storedValue });
    }

    axios
      .put("/api/reunion/registration", storedValue)
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
        errorMessageHandle(err);
      });
  };

  const show = () => {
    console.log(storedValue);
  };

  const procedeToPayment = () => {
    navigate(`/reunion/payment/${id}`);
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
          Congratulations..! Your form is submitted. You can have a final look
          though. After that you can't edit your data anymore.
        </p>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => setWantsToEdit((p) => !p)}
        >
          Edit
        </Button>

        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            select
            required
            disabled={!wantsToEdit}
            label="BATCH"
            value={storedValue?.batch?._id || "SELECT YOUR BATCH"}
            onChange={(e) =>
              setStoredValue({
                ...storedValue,
                batch: { _id: e.target.value },
              })
            }
            helperText="Please select your batch"
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
            disabled={!wantsToEdit}
            label="FACULTY"
            value={storedValue?.faculty?._id || "SELECT YOUR FACULTY"}
            onChange={(e) => {
              setFaculty(e.target.value);
              setStoredValue({
                ...storedValue,
                faculty: { _id: e.target.value },
              });
            }}
            helperText="Please select your faculty"
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
            disabled={!wantsToEdit}
            select
            label="DEPARTMENT"
            value={storedValue?.department?._id || "SELECT YOUR DEPARTMENT"}
            onChange={(e) =>
              setStoredValue({
                ...storedValue,
                department: { _id: e.target.value },
              })
            }
            helperText="Please select your department"
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
              // required={newPhotoUpload}
            />
          </div>
        </div>
        <div className="row">
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="AS PER NID"
            label="FULL NAME"
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
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
            disabled={!wantsToEdit}
            value={storedValue?.wishBox || ""}
            onChange={(e) =>
              setStoredValue({ ...storedValue, wishBox: e.target.value })
            }
            variant="outlined"
            required
          />
        </div>

        {wantsToEdit ? (
          <>
            <Button
              variant="outlined"
              onClick={addFields}
              endIcon={<AddCircleIcon />}
              fullWidth
            >
              Add Guest(if you have any)
            </Button>
            {inputFields.map((input, index) => {
              return (
                <div
                  className="row"
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
          </>
        ) : (
          <>
            <div
              style={{
                border: `1px solid ${COLORS.lightGreen}`,
                width: "100%",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <p
                style={{
                  marginBottom: "10px",
                }}
              >
                ADDED GUESTS
              </p>
              {storedValue?.guest.map((input, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: COLORS.lightGreen,
                      padding: "1rem",
                      borderBottom: "1px solid white",
                    }}
                  >
                    <p>{input.guestType}</p>
                    <p>
                      {input.guestType === "Kids" && 700}
                      {input.guestType === "Wife" && 700}
                      {input.guestType === "Guest" && 700} BDT
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {wantsToEdit ? (
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
            Update
          </LoadingButton>
        ) : (
          <Button
            onClick={procedeToPayment}
            type="button"
            variant="contained"
            endIcon={<NavigateNextIcon />}
            sx={{ margin: "5rem" }}
          >
            Procede
          </Button>
        )}
      </div>
    </form>
  );
}

export default PageThree;
