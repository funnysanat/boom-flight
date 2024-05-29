import { weekDays, months } from "./constants";

export const dateTimeFormat = (dateTime) => {
  const dateTimeNew = new Date(dateTime);
  const date = dateTimeNew.getDate();
  const day = dateTimeNew.getDay();
  const month = dateTimeNew.getMonth();
  const year = dateTimeNew.getFullYear();
  const hours = dateTimeNew.getHours();
  const minutes = dateTimeNew.getMinutes();
  return `${date} ${weekDays[day]}, ${months[month]} ${year} | ${hours}:${minutes}`;
};
