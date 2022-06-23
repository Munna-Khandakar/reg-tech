import React from "react";
import Axios from "axios";
import FileDownload from "js-file-download";

function ExportUsers() {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "/api/exportAllUser",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "registered-users.xlsx");
    });
  };

  return (
    <div>
      <button onClick={(e) => download(e)}>DOWNLOAD</button>
    </div>
  );
}

export default ExportUsers;
