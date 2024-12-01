export const Colors = {
  primary: "#48CFCB",
  secondary: "#229799",
  soft: "#424242",
  lightsoft: "#F5F5F5",
};

export const globalCSSStyles = {
  container:{
    padding: 20,
  }
};


export const isValidDate = (dateStr) => {
  const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
  if (!dateRegex.test(dateStr)) {
    return "Invalid date format. Use DD-MM-YYYY.";
  }
  const [day, month, year] = dateStr.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);
  if (
    dateObj.getDate() !== day ||
    dateObj.getMonth() !== month - 1 ||
    dateObj.getFullYear() !== year
  ) {
    return "Invalid date. Please check the values.";
  }
  if (dateObj > new Date()) {
    return "Date cannot be in the future.";
  }
};