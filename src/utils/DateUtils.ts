class DateUtils {
  static getFormattedDate(date: Date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayName = days[date.getDay()]; // Get the name of the day
    const day = date.getDate(); // Get the day of the month
    const month = months[date.getMonth()]; // Get the name of the month
    const year = date.getFullYear(); // Get the year

    return `${dayName} ${day} ${month}, ${year}`;
  }
  static formatDateString(dateString: string) {
    if (dateString !== null) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(date);
    }
  }
}
export default DateUtils;
