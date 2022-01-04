import * as shamsi from "shamsi-date-converter"
export default function Test() {
  return (
    <div>
      <p>{shamsi.gregorianToJalali(1989, 1, 24).join("/")}</p>
    </div>
  )
}
