import moment from "moment";
import "moment/locale/ko";

export function momentFormat(date: string, format: string) {
  return moment(date).format(format);
}
