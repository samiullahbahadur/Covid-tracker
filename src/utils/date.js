const date = new Date();

export const today = () => `${date.getFullYear()}-${
  date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
}-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`;

export const tellToday = () => {
  const date = new Date();
  return date.toUTCString().slice(0, 16);
};
