import * as shamsi from "shamsi-date-converter"

export function Time() {
  const now = function (seperator) {
    return shamsi.gregorianToJalali(new Date()).join(seperator)
  }
  return {
    now,
  }
}

let time = new Time()
export default time
