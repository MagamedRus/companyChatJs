import { getDateType } from "../contants/types/timeUtil";

/** Get formated time
 * @param {string} format - type of get data
 *
 * Cases
 *  + HOURSE_MINUTES -  hours:minute | 24:00
 *  + ONLY_DATE - day.mounth.year | 10.03.2022
 *  + FULL_TIME - day.mounth.year hours:minute | 10.03.2022 12:33'
 *
 * @param {number} milliseconds - optional parameter if enabled,
 * will format the time from this parameter, and if not, it will
 * format the time from the current
 */

const getFormatedTime = (format, milliseconds) => {
  let date = "";
  if (milliseconds !== 0) {
    date = new Date(milliseconds);
  } else date = new Date();
  const onlyDate = date.toLocaleDateString();
  const onlyHours = date.toLocaleTimeString().toString();
  switch (format) {
    case getDateType.HM: // hours - minute
      return onlyHours.slice(0, -3);
    case getDateType.OD: // only - date
      return onlyDate;
    case getDateType.FT: // full - time
      const fullDate = onlyDate + " " + onlyHours.slice(0, -3);
      return fullDate;
    default:
      return "";
  }
};

export default getFormatedTime;