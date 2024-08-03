import { useState } from "react";
import { TimePicker as TPicker } from "@mui/x-date-pickers/TimePicker";
import moment from "moment-jalaali";

const TimePicker = () => {
  const [time, setTime] = useState(moment());
  moment.loadPersian({ dialect: "persian-modern" });
  moment.loadPersian({ usePersianDigits: true });
  console.log(time);
  return (
    <>
      <TPicker
        value={time}
        onChange={(newValue) => setTime(newValue)}
        localeText={{ okButtonLabel: "تایید" }}
        // onAccept={(data) => onAccept(data)}
      />
    </>
  );
};

export default TimePicker;
