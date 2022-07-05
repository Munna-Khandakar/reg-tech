const XLSX = require("xlsx");
const path = require("path");

module.exports.exportToExcelByBatch = async (jsonData, fileName) => {
  // Sheet header names
  const workSheetColumnNames = [
    "Name",
    "Nick Name",
    "Department",
    "Zilla",
    "Country",
    "Profession",
    "Hall Room Number",
    "Wish",
  ];
  const workSheetName = fileName; //worksheet name
  const filepath = "./users.xlsx";

  //console.log(data);
  const userData = jsonData;

  const exportDataToExcel = (
    userData,
    workSheetColumnNames,
    workSheetName,
    filepath
  ) => {
    const data = userData.map((user) => {
      return [
        user.fullName,
        user.nickName,
        user.department,
        user.zilla,
        user.country,
        user.profession,
        user.hallRoomNumber,
        user.wishBox,
      ];
    });
    const workBook = XLSX.utils.book_new(); // create a new book
    const workSheetData = [workSheetColumnNames, ...data];
    const worksheet = XLSX.utils.aoa_to_sheet(workSheetData);
    XLSX.utils.book_append_sheet(workBook, worksheet, workSheetName);
    XLSX.writeFile(workBook, path.resolve(filepath));
    return true;
  };
  exportDataToExcel(userData, workSheetColumnNames, workSheetName, filepath);
};
