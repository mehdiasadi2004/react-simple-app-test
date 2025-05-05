const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
export const todayDate = "" + year + "/" + month + "/" + day + "";


export const formatDateOnly = (isoString:string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // ماه از ۰ شروع میشه
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
