import React from "react";
import { COLORS } from "../../utils/Colors";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: COLORS.green,
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "1000px",
            width: "100%",
            padding: 10,
            color: "white",
            gap: "3rem",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Link to={"/"} className="navlink">
            <div>Home</div>
          </Link>
          <Link to={"/registration/reunion"} className="navlink">
            <div>Reunion Registration</div>
          </Link>
          {/* <Link to={"/registration/reunion"} className="navlink">
            <div>Reunion Update</div>
          </Link> */}
          <Link to={"/help"} className="navlink">
            <div
              style={{
                backgroundColor: COLORS.orange,
                padding: "10px 30px",
                borderRadius: 10,
              }}
            >
              Help
            </div>
          </Link>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;
