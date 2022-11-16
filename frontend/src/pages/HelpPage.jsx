import { margin } from "@mui/system";
import React from "react";
import HelpImg from "../help.gif";
import { COLORS } from "../utils/Colors";

function HelpPage() {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            background: COLORS.green,
            color: "white",
            padding: "2rem",
            margin: "2rem",
            borderRadius: "5px",
          }}
        >
          Please call +880 1711-082532 for help
        </p>

        <img src={HelpImg} style={{ width: "100%" }} />
      </div>
    </>
  );
}

export default HelpPage;
