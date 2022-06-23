const XLSX = require("xlsx");
const path = require("path");

module.exports.exportToExcel = async (jsonData) => {
  // Sheet header names
  const workSheetColumnNames = [
    "fullName",
    "nickName",
    "department",
    "batch",
    "faculty",
    " mobile",
    "whatsapp",
    "email",
    "fathername",
    "motherName",
    "streetAddress",
    "streetAddressLine2",
    "city",
    "zipCode",
    "state",
    "country",
    "emergencyContact",
    "fbId",
    "dob",
    "nationality",
    "bloodGroup",
    "religion",
    "occupation",
    "designation",
    "companyName",
    "maritalStatus",
    "hallRoomNumber",
    "wishBox",
    "photo",
  ];
  const workSheetName = "Register User"; //worksheet name
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
        user.batch,
        user.faculty,
        user.mobile,
        user.secondaryMobile,
        user.email,
        user.fatherName,
        user.motherName,
        user.streetAddress,
        user.streetAddressLine2,
        user.city,
        user.zipCode,
        user.state,
        user.country,
        user.emergencyContact,
        user.fbId,
        user.dob,
        user.nationality,
        user.bloodGroup,
        user.religion,
        user.occupation,
        user.designation,
        user.companyName,
        user.maritalStatus,
        user.hallRoomNumber,
        user.wishBox,
        user.photo,
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
