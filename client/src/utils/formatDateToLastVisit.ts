import { format, isThisYear, isToday, isYesterday, parseISO } from "date-fns";

export function formatDateToLastVisit(dateStr: string) {
  const date = parseISO(dateStr);

  if (isToday(date)) {
    return format(date, "HH:mm");
  } else if (isYesterday(date)) {
    return "Yesterday";
  } else if (isThisYear(date)) {
    return format(date, "MMM d");
  } else {
    return format(date, "MM.dd.yyyy");
  }
}
