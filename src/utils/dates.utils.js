function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}
export const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
};

export const formatDate = (date) => {
  let year = date.getFullYear();
  let month = padZero(date.getMonth() + 1); // Month is 0-indexed
  let day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
};

export const getDayOfWeek = (dateString) => {
  // Parse the date string into a Date object
  let date = new Date(dateString + "T00:00:00Z");
  // Array of day names
  const dayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // Get the day of the week as a number (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  let dayOfWeekNumber = date.getUTCDay();

  // Get the day name using the number as an index in the array of day names
  let dayOfWeekName = dayNames[dayOfWeekNumber];

  return dayOfWeekName;
};

export const getNumberSuffix = (number) => {
  let numberString = number.toString();
  // Get the last digit of the number
  let lastDigit = numberString[numberString.length - 1];

  // Define suffixes based on the last digit
  let suffix = "";
  switch (lastDigit) {
    case "1":
      suffix = "st";
      break;
    case "2":
      suffix = "nd";
      break;
    case "3":
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  // Return the number with the appropriate suffix
  return number + suffix;
};

export const militaryTo12Hours = (militaryTime) => {
  const timeParts = militaryTime.split(":");
  const hour = parseInt(timeParts[0]);
  const minutes = timeParts[1];

  let ampm = "am";
  let hour12 = hour;
  if (hour >= 12) {
    ampm = "pm";
    if (hour > 12) {
      hour12 = hour - 12;
    }
  }

  if (hour === 0) {
    hour12 = 12;
  }

  const time12Hour = `${hour12}:${minutes}${ampm}`;

  return time12Hour;
};
